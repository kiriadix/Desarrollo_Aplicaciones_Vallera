import { StyleSheet } from 'react-native';

import { theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 5,
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
