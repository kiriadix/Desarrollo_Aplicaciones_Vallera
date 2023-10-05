import { TextInput, View, Button } from 'react-native'
import React from 'react'
import {styles} from "./styles.js";

export default function Input({setTextInput, textInput, onPressBtn}) {
  return (
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
          color="#82E0AA"
          onPress={onPressBtn}
        />
      </View>
      
    </View>
  )
}