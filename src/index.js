import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from "./styles.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Aldo eres el mejor</Text>
      <StatusBar style="auto" />
    </View>
  );
}