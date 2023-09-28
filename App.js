import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        
        <TextInput placeholder="Enter your event"  style={styles.input} />
        
        <View style={styles.button}>
          <Button title='Add' style={styles.button} color="#52528C"/>
        </View>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    width: '80%',
    marginRight: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#52528C',
  },
  button:{

  }
});
