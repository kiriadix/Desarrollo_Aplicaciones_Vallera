import { useState } from 'react';
import { Button, Text, View } from 'react-native';

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

const Game = ({ numeroJugador }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRamdomNumber(MIN_MUMBER, MAX_NUMBER, numeroJugador)
  );

  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Text style={styles.title}> Adivina el Número </Text>
        <NumberContainer number={currentGuess} />
        <View style={styles.buttonContainer}>
          <Button title="Menor" color={theme.colors.primary} onPress={() => {}} />
          <Button title="Mayor" color={theme.colors.primary} onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

export default Game;
