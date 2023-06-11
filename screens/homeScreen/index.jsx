import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { MiBoton } from '../../components'
const HomeScreen = () => {

  const navigation = useNavigation();

  const navigateToImageList = () => {
    navigation.navigate('ImageList')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My</Text>
      <Text style={styles.title}>Private Instagram</Text>
      <MiBoton titulo='Go' estilos={{marginTop: 10,}} onPress={navigateToImageList} />
    </View>
  )
}

export default HomeScreen