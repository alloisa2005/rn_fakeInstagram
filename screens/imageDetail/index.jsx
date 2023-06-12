import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { selectedImage } from '../../redux/slices/imageSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MiBoton } from '../../components'
import { useNavigation } from '@react-navigation/native'

const ImageDetail = () => {

  const selected = useSelector(selectedImage);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Titulo: {selected.title}</Text>

      <Image source={{uri: selected.image}} style={{width: '100%', height: 250,}} />

      <Text style={styles.description}>Descripción: {selected.description}</Text>

      <View style={{width: '100%', alignItems:'center', justifyContent:'center', marginTop: 10,}}>
        <MiBoton titulo={'Volver'} onPress={() => navigation.navigate('ImageList')}/>
      </View>
    </SafeAreaView>
  )
}

export default ImageDetail