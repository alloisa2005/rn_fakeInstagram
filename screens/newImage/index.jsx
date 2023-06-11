import {
  View,
  Text,
  Button,
  Image,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";
import { MiBoton } from "../../components";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { addImage } from "../../redux/slices/imageSlice";
import { getPermissionCamera, getPermissionLibrary} from '../../utils/verifiyPermissions';

const NewImage = () => {
  const dispatch = useDispatch();  

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);  

  const imageFromLibrary = async () => {
    const isPermitted = await getPermissionLibrary();
    if (!isPermitted) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });
    setImage(result.assets[0].uri);
  };

  const takeImage = async () => {
    const isPermitted = await getPermissionCamera();
    if (!isPermitted) return;

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });
    setImage(result.assets[0].uri);
  };

  const onHandlerSaveImage = () => {
    dispatch(addImage({
      id: Math.random().toString(),
      title,
      description,
      image: image,
    }));
    /* Alert.alert("Image Saved", "Image saved successfully", [{ text: "Ok" }]); */
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Add New Image</Text>

      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Title..."
            maxLength={30}
            style={styles.inputText}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            multiline
            numberOfLines={4}
            placeholder="Description..."
            style={styles.inputText}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>

        <View style={styles.imageContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Image
              source={require("../../assets/imgs/noImage.jpg")}
              style={styles.image}
            />
          )}
        </View>

        <View style={styles.buttonContainer}>
          <MiBoton titulo='Take Photo' onPress={takeImage} />
          <MiBoton titulo='Choose From Library' onPress={imageFromLibrary} />          
        </View>

        <View style={styles.buttonContainer}>
          <MiBoton titulo='Save' estilos={{marginTop: 20,}} onPress={onHandlerSaveImage} />            
        </View>
        
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewImage;
