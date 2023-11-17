import { useState } from 'react';
import { View } from 'react-native';

import { Header } from './components/index.js';
import { StartGame, Game } from './screens/index.js';
import { styles } from './styles.js';

const App = () => {
  const [numeroJugador, setNumeroJugador] = useState(null);

  const Title = numeroJugador ? 'Juego' : 'Bienvenido';

  const Content = () =>
    numeroJugador ? (
      <Game numeroJugador={numeroJugador} />
    ) : (
      <StartGame OnStartGame={OnStartGame} />
    );

  const OnStartGame = (number) => {
    setNumeroJugador(number);
  };
  return (
    <View style={styles.container}>
      <Header title={Title} />
      <Content />
    </View>
  );
};

export default App;
