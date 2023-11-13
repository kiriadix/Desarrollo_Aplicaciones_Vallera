import { Button, Text, TextInput, View } from 'react-native';

import { styles } from './styles.js';
import { Card, Header } from '../../components/index.js';

const StartGame = () => {
  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <Text style={styles.title}>Start Game</Text>
      <Card title="Escribe un número:" />
    </View>
  );
};

export default StartGame;
