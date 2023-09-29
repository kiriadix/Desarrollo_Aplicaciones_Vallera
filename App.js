import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {

  const DATA = [
    {
      id:1,
      titulo: 'Item 1'
    },
    {
      id:2,
      titulo: 'Item 2'
    },
    {
      id:3,
      titulo: 'Item 3'
    },
    {
      id:4,
      titulo: 'Item 4'
    },
    {
      id:5,
      titulo: 'Item 5'
    }
  ];

  const Item = ({titulo}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{titulo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        
        <TextInput placeholder="Enter your event"  style={styles.input} />
        
        <View style={styles.button}>
          <Button title='Add' style={styles.button} color="#52528C"/>
        </View>
        
      </View>

      <FlatList
        data={DATA}
        renderItem={({item}) => <Item titulo={item.titulo} />}
        keyExtractor={item => item.id}
      />

      
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
    marginTop: 55,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#52528C',
    color: '#212121'
  },
  itemContainer: {
    marginVertical:10,
    backgroundColor:'#52528C',
    height: 60,
    borderRadius: 5,
    justifyContent: 'center'
  },
  item:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10
    
  }
});
