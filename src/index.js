import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View } from 'react-native';

import { theme } from './constants';
import { styles } from './styles.js';

export default function App() {
  const [loaded] = useFonts({
    'PlaypenSans-Regular': require('../assets/fonts/PlaypenSans-Regular.ttf'),
    'PlaypenSans-Bold': require('../assets/fonts/PlaypenSans-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text>Hola Aldo eres el mejor</Text>
      <StatusBar style="auto" />
    </View>
  );
}
