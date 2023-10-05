import { useState } from 'react';
import { View } from 'react-native';
import {styles} from "./styles.js";
import { Input, CustomModal, List } from './components/index';

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

  return (
    <View style={styles.container}>
      
      <Input 
        setTextInput={setTextInput}
        textInput={textInput}
        onPressBtn={onPressBtn}
      />

      <List 
        data={data}
        onHandlerEvent={onHandlerEvent}
      />

      <CustomModal 
        modalVisible={modalVisible}
        selectedItem={selectedItem}
        onCancelEvent={onCancelEvent}
        deleteItem={deleteItem}
      />
  
    </View>
  );
}