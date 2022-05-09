import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,

} from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState("Useless Text");
  return (
    <View>
      <View style={styles.click}>
        <TouchableOpacity
          style={styles.button}
         
          onPress={() => {
          
            navigation.navigate("Attendance");
          }}
        >
          <Text style={styles.text}>Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
         
          onPress={() => {
          
            navigation.navigate("Leave");
          }}
        >
          <Text style={styles.text}>Leave</Text>
        </TouchableOpacity>
      </View>
    
     
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
 
  click: {
    flexDirection: "column",
    marginTop:20,
    justifyContent: "center",
   alignItems: "center",
  },
  text:{
    fontSize:20,
    fontWeight: "bold",
  },
 
});
