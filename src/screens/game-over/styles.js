import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    paddingBottom: 10,
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  rounds: {
    fontSize: 25,
    marginVertical: 10,
    fontFamily: 'PlaypenSans-Bold',
  },
  selectedNumber: {
    fontSize: 20,
    marginBottom: 15,
    fontFamily: 'PlaypenSans-Bold',
  },
});
