import { useEffect, useRef, useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';

import { styles } from './styles.js';
import { Card, NumberContainer } from '../../components';
import { theme } from '../../constants/theme.js';

const MIN_MUMBER = 1;
const MAX_NUMBER = 99;

const generateRamdomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const ramdomNumber = Math.floor(Math.random() * (max - min) + min);
  if (ramdomNumber === exclude) {
    return generateRamdomNumber(min, max, exclude);
  } else {
    return ramdomNumber;
  }
};

const Game = ({ numeroJugador, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRamdomNumber(MIN_MUMBER, MAX_NUMBER, numeroJugador)
  );
  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(MIN_MUMBER);
  const currentHigh = useRef(MAX_NUMBER);

  const onHandlerNewxGuess = (direction) => {
    if (
      (direction === 'lower' && currentGuess < numeroJugador) ||
      (direction === 'greater' && currentGuess > numeroJugador)
    ) {
      Alert.alert('Pista', 'Lo que intentas hacer no es correcto', [
        { text: 'Lo siento', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRamdomNumber(currentLow.current, currentHigh.current, currentGuess);

    setCurrentGuess(nextNumber);
    setRounds((currentRountd) => currentRountd + 1);
  };

  useEffect(() => {
    if (currentGuess === numeroJugador) onGameOver(rounds);
  }, [currentGuess, numeroJugador, onGameOver]);

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}> Adivina el Número </Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button
            title="Menor"
            color={theme.colors.primary}
            onPress={() => onHandlerNewxGuess('lower')}
          />
          <Button
            title="Mayor"
            color={theme.colors.primary}
            onPress={() => onHandlerNewxGuess('greater')}
          />
        </View>
      </Card>
    </View>
  );
};

export default Game;
