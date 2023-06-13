import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { setSelected, getImages, deleteImage } from "../../redux/slices/imageSlice";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from '@expo/vector-icons'; 


const ImageList = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { images, loading } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(getImages());
  }, []);

  const onHandlerNavigate = () => {
    navigation.navigate("NewImage");
  };

  const onHandlerSelectImage = (item) => {
    dispatch(setSelected(item)).unwrap();
    navigation.navigate("ImageDetail");
  };

  const onHandlerDeleteImage = (item) => {
    dispatch(deleteImage(item.id)).unwrap();    
    dispatch(getImages());    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Photos</Text>
        <TouchableOpacity onPress={onHandlerNavigate}>
          <MaterialIcons name="add-a-photo" size={26} color="white" />
        </TouchableOpacity>
      </View>

      {/* List of Images */}
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            data={images}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onHandlerSelectImage(item)}>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: "center", marginBottom: 10, marginRight: 10, }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={{ uri: item.imageUri }} style={{ width: 80, height: 70, borderRadius: 5 }} />
                    <Text style={styles.imageTitle}>{item.title}</Text>
                  </View>
                  <TouchableOpacity onPress={() => onHandlerDeleteImage(item)}>
                    <AntDesign name="delete" size={24} color="white" />
                  </TouchableOpacity>
                </View>                
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ImageList;
