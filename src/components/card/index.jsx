import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import { styles } from './styles';

const Card = ({ title }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}> {title} </Text>
      <TextInput placeholder="0" style={styles.input} />
      <View style={styles.buttonContainer}>
        <Button title="Reiniciar" onPress={() => {}} color="#22AED1" />
        <Button title="Confirmar" onPress={() => {}} color="#22AED1" />
      </View>
    </View>
  );
};

export default Card;
