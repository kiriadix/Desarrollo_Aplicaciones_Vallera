import { FlatList } from 'react-native'
import React from 'react'
import Item from './item/index.js'
import {styles} from './styles.js'

export default function List({data, onHandlerEvent}) {

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <Item item={item} onHandlerEvent={onHandlerEvent}  />}
      keyExtractor={item => item.id}
    />
  )
}