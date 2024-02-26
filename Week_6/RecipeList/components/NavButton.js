import { View, StyleSheet, Text, Pressable } from "react-native";
import Colors from "../constants/colors.js";

// Adds the NavButton function which every page uses
function NavButton(props) {
  return (
    <Pressable android_ripple={{ color: "grey" }} onPress={props.onPress}>
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: Colors.accent500,
    width: 150,
    margin: 10,
    elevation: 2,
    borderBottomWidth: 2,
    borderColor: "white",
  },
  text: {
    padding: 15,
    fontSize: 30,
    textAlign: "center",
    color: Colors.primary300,
    fontFamily: "Minecraft",
  },
});
