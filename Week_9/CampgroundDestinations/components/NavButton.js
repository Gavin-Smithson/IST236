import { View, StyleSheet, Text, Pressable, useWindowDimensions } from "react-native";
import Colors from "../constants/colors.js";

// Adds the NavButton function for every page
function NavButton(props) {
  const { width, height } = useWindowDimensions();
  return (
    <Pressable android_ripple={{ color: "grey" }} onPress={props.onPress}
    style={({ pressed }) => pressed && styles.pressedItem}>
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontSize: width * 0.07}]}>{props.children}</Text>
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
    width: 1000,
    maxWidth: "70%",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textContainer: {},
  pressedItem: {
    opacity: 0.5,
  },
  text: {
    padding: 8,
    fontFamily: "merch",
    textAlign: "center",
    color: Colors.primary300,
  },
});