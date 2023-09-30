import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal} from 'react-native';

export default function App() {
  const [idCount, setIdCount] = useState(1);
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const Item = ({item}) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onHandlerEvent(item.id)}>
      <Text style={styles.item}>
        {item.titulo}
      </Text>
    </TouchableOpacity>
  );

  const onPressBtn = () => {

    if (textInput.length === 0) return;

    setData([
      ...data,
      {
        id:idCount,
        titulo: textInput
      }
    ]);

    setIdCount(idCount + 1);
    setTextInput('');

    
  };

  const onHandlerEvent = (id) => {
    const selectedItem = data.find(item => item.id === id);
    setSelectedItem(selectedItem)
    setModalVisible(true);
  }

  console.warn('item seleccionado', selectedItem);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        
        <TextInput 
          placeholder="Enter your event"  
          style={styles.input}
          onChangeText={setTextInput}
          value={textInput}
        />
        
        <View style={styles.button}>
          <Button 
            title='Add' 
            style={styles.button} 
            color="#52528C"
            onPress={onPressBtn}
          />
        </View>
        
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />

      <Modal visible={modalVisible} animationType='slide'></Modal>

      
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
    marginVertical:5,
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
