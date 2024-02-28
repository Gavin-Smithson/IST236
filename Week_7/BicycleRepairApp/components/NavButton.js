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
    borderRadius: 300,
    backgroundColor: Colors.primary500,
    width: 300,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textContainer: {},
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    color: Colors.accent700,
    fontFamily: "Minecraft"
  },
});