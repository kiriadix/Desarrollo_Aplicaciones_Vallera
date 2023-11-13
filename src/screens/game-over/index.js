import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from './styles.js';

const GameOver = () => {
  return (
    <View style={styles.container}>
      <Text>Game Over</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default GameOver;
