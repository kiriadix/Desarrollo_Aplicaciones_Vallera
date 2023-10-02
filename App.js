import { useState } from 'react';
import { Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal} from 'react-native';
import {styles} from "./styles.js";

export default function App() {
  const [idCount, setIdCount] = useState(1);
  const [data, setData] = useState([]);
  const [textInput, setTextInput] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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

  const onCancelEvent = () => {
    setSelectedItem(null);
    setModalVisible(false);
  }

  const deleteItem = () => {
    const newItems = data.filter(item => item.id !== selectedItem.id);
    setData(newItems);
    onCancelEvent();
  }

  const Item = ({item}) => (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={() => onHandlerEvent(item.id)}
    >
      <Text style={styles.item}>
        {item.titulo}
      </Text>
    </TouchableOpacity>
  );

  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        
        <TextInput 
          placeholder="Ingrese su tarea"  
          style={styles.input}
          onChangeText={setTextInput}
          value={textInput}
        />
        
        <View style={styles.button}>
          <Button 
            title='Add' 
            style={styles.button} 
            color="#82E0AA"
            onPress={onPressBtn}
          />
        </View>
        
      </View>

      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />

      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.ModalContainter}>
          <View style={styles.titleModal}>
            <Text>DETALLES DE LA TAREA</Text>
          </View>
          <View style={styles.detailModalContainer}>
            <Text>Esta seguro que desea eliminar la tarea:</Text>
            <Text>
              { selectedItem === null ? '' : selectedItem.titulo }
            </Text>
          </View>
          <View style={styles.btnModalContainer}>
            <Button
              title='Cancelar'
              color='#212121'
              onPress={onCancelEvent}
            />
            <Button
              title='Eliminar'
              color='red'
              onPress={deleteItem}
            />
          </View>
        </View>
      </Modal>      
    </View>
  );
}