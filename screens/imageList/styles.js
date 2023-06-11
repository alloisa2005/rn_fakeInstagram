import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 10,    
    backgroundColor: "#3089AB",
  },
  titleContainer:{
    marginTop: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',    
  },
  title:{
    fontSize: 22,
    color: 'white',
    fontFamily: "Roboto-Bold",
  },
});