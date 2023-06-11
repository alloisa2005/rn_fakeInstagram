import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import { selectImages } from "../../redux/slices/imageSlice";
import { useSelector } from "react-redux";

const ImageList = () => {
  const navigation = useNavigation();

  const { images } = useSelector((state) => state.images);

  const onHandlerNavigate = () => {
    navigation.navigate("NewImage");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Photos</Text>
        <TouchableOpacity onPress={onHandlerNavigate}>
          <MaterialIcons name="add-a-photo" size={26} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ImageList;
