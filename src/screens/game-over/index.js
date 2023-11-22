import { Button, Image, Text, View } from 'react-native';

import { styles } from './styles.js';
import { Card } from '../../components';
import { theme } from '../../constants';

const GameOver = ({ rondasUsadas, numeroJugador, onRestartGame }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.content}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/game-over-poster-design-template-f479214fda20e2267202e03bcbdba176_screen.jpg?ts=1616307820',
          }}
          resizeMode="center"
        />
        <Text style={styles.rounds}> Rondas: {rondasUsadas}</Text>
        <Text style={styles.selectedNumber}> Número Seleccionado: {numeroJugador}</Text>
        <Button title="Reiniciar Juego" onPress={onRestartGame} color={theme.colors.primary} />
      </Card>
    </View>
  );
};

export default GameOver;
