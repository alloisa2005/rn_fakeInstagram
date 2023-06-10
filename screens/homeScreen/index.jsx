import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
const HomeScreen = () => {

  const navigation = useNavigation();

  const navigateToImageList = () => {
    navigation.navigate('ImageList')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My</Text>
      <Text style={styles.title}>Private Instagram</Text>
      <TouchableOpacity style={styles.butonContainer} onPress={navigateToImageList}>
        <Text style={styles.buttonTitle}>Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen