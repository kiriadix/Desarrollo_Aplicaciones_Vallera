import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from './styles.js';

const Game = () => {
  return (
    <View style={styles.container}>
      <Text>Game</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default Game;
