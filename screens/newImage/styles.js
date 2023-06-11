import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,    
    backgroundColor: "#3089AB",
  },
  title:{
    marginTop: 10,
    fontSize: 24,
    color: 'white',
    fontFamily: "Roboto-Bold",
  },
  inputContainer:{
    marginTop: 12,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 7, borderRadius: 7,
  },
  inputText:{
    fontSize: 16,
    fontFamily: "Roboto-Regular", color: 'black',
  },
  imageContainer:{
    marginTop: 20,
    height: 240,
    width: '100%',
    backgroundColor: 'grey', borderRadius: 10, overflow: 'hidden',
  },
  image:{
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  buttonContainer:{
    marginTop: 15,
    width: '100%',
    flexDirection: 'row', 
    justifyContent: 'space-around'
    , alignItems: 'center',
    
  },
});