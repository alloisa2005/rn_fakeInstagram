
import * as ImagePicker from "expo-image-picker";


export const getPermissionCamera = async () => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();

  if (status !== "granted") {
    Alert.alert(
      "Permiso denegado",
      "Necesitamos permisos para usar la camara",
      [{ text: "Ok" }]
    );
    return false;
  }

  return true;
};

export const getPermissionLibrary = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

  if (status !== "granted") {
    Alert.alert(
      "Permiso denegado",
      "Necesitamos permisos para acceder a la galería",
      [{ text: "Ok" }]
    );
    return false;
  }

  return true;
};