import { useFonts } from 'expo-font';
import { useState } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';

import { Header } from './components/index.js';
import { theme } from './constants';
import { Game, GameOver, StartGame } from './screens/index.js';
import { styles } from './styles.js';

const App = () => {
  const [numeroJugador, setNumeroJugador] = useState(null);
  const [rondasUsadas, setRondasUsadas] = useState(0);

  const [loaded] = useFonts({
    'PlaypenSans-Regular': require('../assets/fonts/PlaypenSans-Regular.ttf'),
    'PlaypenSans-Bold': require('../assets/fonts/PlaypenSans-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <StatusBar backgroundColor={theme.colors.primary} />
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  const Title =
    numeroJugador && rondasUsadas === 0
      ? 'JUEGO'
      : rondasUsadas > 0
      ? 'JUEGO TERMINADO'
      : 'BIENVENIDOS';

  const Content = () => {
    if (numeroJugador && rondasUsadas <= 0) {
      return <Game numeroJugador={numeroJugador} onGameOver={onGameOver} />;
    }

    if (rondasUsadas > 0) {
      return (
        <GameOver
          rondasUsadas={rondasUsadas}
          onRestartGame={onRestartGame}
          numeroJugador={numeroJugador}
        />
      );
    }

    return <StartGame OnStartGame={OnStartGame} />;
  };

  const OnStartGame = (number) => {
    setNumeroJugador(number);
  };

  const onGameOver = (rondas) => {
    setRondasUsadas(rondas);
  };

  const onRestartGame = () => {
    setNumeroJugador(null);
    setRondasUsadas(0);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.colors.primary} />
      <Header title={Title} />
      <Content />
    </View>
  );
};

export default App;
