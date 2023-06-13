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
  loadingContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 22,
    color: 'white',
    fontFamily: "Roboto-Bold",
  },
  listContainer:{
    marginTop: 10,
    flex: 1,    
  },
  imageTitle:{
    marginLeft: 10,
    fontFamily: "Roboto-Bold",
    color: 'white',
    fontSize: 18,
  },
});