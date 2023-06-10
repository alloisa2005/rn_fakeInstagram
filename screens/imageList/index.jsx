import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

const ImageList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Photos</Text>
    </SafeAreaView>
  )
}

export default ImageList