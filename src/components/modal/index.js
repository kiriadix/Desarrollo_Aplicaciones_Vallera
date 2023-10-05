import { View, Text, Modal, Button} from 'react-native'
import React from 'react'
import {styles} from './styles.js'

export default function CustomModal({modalVisible, selectedItem, onCancelEvent, deleteItem}) {
  return (
    <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.ModalContainter}>
            <View>
            <Text style={styles.titleModal}>DETALLES DE LA TAREA</Text>
            </View>
            <View style={styles.detailModalContainer}>
            <Text style={styles.detailModalMessage}>
                Esta seguro que desea eliminar la tarea:
            </Text>
            <Text style={styles.selectItemModal}>
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
  )
}