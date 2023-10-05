import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import {styles} from './styles.js'

export default function Item({item, onHandlerEvent}) {
  return (
    <TouchableOpacity 
      style={styles.itemContainer} 
      onPress={() => onHandlerEvent(item.id)}
    >
      <Text style={styles.item}>
        {item.titulo}
      </Text>
    </TouchableOpacity>
  )
}