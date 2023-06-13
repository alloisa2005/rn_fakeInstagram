import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import { setSelected, getImages } from "../../redux/slices/imageSlice";
import { useDispatch, useSelector } from "react-redux";

const ImageList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { images } = useSelector((state) => state.images);

  useEffect(() => {
    console.log("useEffect");
    dispatch(getImages());
  }, []);
  const onHandlerNavigate = () => {
    navigation.navigate("NewImage");
  };

  const onHandlerSelectImage = (item) => {
    dispatch(setSelected(item));
    navigation.navigate("ImageDetail");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Photos</Text>
        <TouchableOpacity onPress={onHandlerNavigate}>
          <MaterialIcons name="add-a-photo" size={26} color="white" />
        </TouchableOpacity>
      </View>

      {/* List of Images */}
      <View style={styles.listContainer}>
        <FlatList 
          data={images}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onHandlerSelectImage(item) }>
              <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10,}}>
                <Image source={{uri: item.imageUri}} style={{width: 80, height: 70, borderRadius: 5,}} />
                <Text style={styles.imageTitle}>{item.title}</Text>                
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ImageList;
