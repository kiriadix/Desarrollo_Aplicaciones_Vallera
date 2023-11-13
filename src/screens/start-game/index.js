import { useState } from 'react';
import { Button, Text, TextInput, View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { styles } from './styles.js';
import { Card, Header } from '../../components/index.js';
import { theme } from '../../constants';

const StartGame = () => {
  const [number, setNumber] = useState('');

  const onHandlerChangeText = (text) => {
    setNumber(text.replace(/[^0-9]/g, ''));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header title="Bienvenido" />
        <Text style={styles.title}>Inicio del Juego</Text>
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
            <Button title="Reiniciar" onPress={() => {}} color={theme.colors.secondary} />
            <Button title="Confirmar" onPress={() => {}} color={theme.colors.primary} />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
