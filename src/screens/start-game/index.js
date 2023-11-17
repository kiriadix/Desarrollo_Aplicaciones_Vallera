import { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';

import { styles } from './styles.js';
import { Card, NumberContainer } from '../../components/index.js';
import { theme } from '../../constants';

const StartGame = ({ OnStartGame }) => {
  const [number, setNumber] = useState('');
  const [confirmado, setConfirmado] = useState(false);
  const [numeroSeleccionado, setNumeroSeleccionado] = useState(null);

  const onHandlerChangeText = (text) => {
    setNumber(text.replace(/[^0-9]/g, ''));
  };

  const onHandlerConfirm = () => {
    const numeroSeleccionado = Number(number);
    if (isNaN(numeroSeleccionado) || numeroSeleccionado <= 0 || numeroSeleccionado > 99) {
      Alert.alert('Número Invalido', 'El número deberia estar entre 1 y 99', [
        { text: 'cerrar', style: 'destructive', onPress: () => setNumber('') },
      ]);
    } else {
      setNumeroSeleccionado(numeroSeleccionado);
      setConfirmado(true);
      setNumber('');
    }
  };

  const onHandlerReset = () => {
    setNumber('');
    setConfirmado(false);
    setNumeroSeleccionado(null);
  };

  const onHandlerStartGame = () => {
    OnStartGame(numeroSeleccionado);
  };

  const Confirmed = () =>
    confirmado ? (
      <Card style={styles.confirmedContainer}>
        <Text style={styles.confirmedTitle}>Número Seleccionado:</Text>
        <NumberContainer number={numeroSeleccionado} />
        <View style={styles.buttonContainer}>
          <Button title="Reiniciar" onPress={onHandlerReset} color={theme.colors.secondary} />
          <Button title="Iniciar Juego" onPress={onHandlerStartGame} color={theme.colors.primary} />
        </View>
      </Card>
    ) : null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Inicio del Juego</Text>
        {!confirmado ? (
          <Card style={styles.inputContainer}>
            <Text style={styles.label}> Escriba un número: </Text>
            <TextInput
              placeholder="0"
              style={styles.input}
              keyboardType="number-pad"
              maxLength={2}
              autoCapitalize="none"
              autoCorrect={false}
              blurOnSubmit
              onChangeText={onHandlerChangeText}
              value={number}
            />
            <View style={styles.buttonContainer}>
              <Button title="Reiniciar" onPress={onHandlerReset} color={theme.colors.secondary} />
              <Button
                title="Confirmar"
                onPress={onHandlerConfirm}
                color={theme.colors.primary}
                disabled={number === ''}
              />
            </View>
          </Card>
        ) : null}
        <Confirmed />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
