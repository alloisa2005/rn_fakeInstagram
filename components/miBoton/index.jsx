import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'

const MiBoton = ({titulo, estilos, onPress}) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, estilos]} onPress={onPress}>
      <Text style={styles.buttonTitle}>{titulo}</Text>
    </TouchableOpacity>
  )
}

export default MiBoton