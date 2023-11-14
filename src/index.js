import { View } from 'react-native';

import { StartGame } from './screens/index.js';
import { styles } from './styles.js';

const App = () => {
  return (
    <View style={styles.container}>
      <StartGame />
    </View>
  );
};

export default App;
