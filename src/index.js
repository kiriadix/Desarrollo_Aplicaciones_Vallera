import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { StartGame } from './screens/index.js';
import { styles } from './styles.js';

const App = () => {
  return (
    <View style={styles.container}>
      <StartGame />
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
