import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

const UseOrientation = () => {
  const [isPortrait, setIsPortrait] = useState(true);
  //Portraid (Vertical)
  //landscape (Horizontal)

  const onPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const statePortrait = () => {
    setIsPortrait(onPortrait);
  };

  useEffect(() => {
    const suscription = Dimensions.addEventListener('change', () => statePortrait);

    return () => suscription.remove();
  });

  return isPortrait;
};

export default UseOrientation;
