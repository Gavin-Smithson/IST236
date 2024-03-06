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
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: Colors.accent500,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: Colors.primary300,
  },
  textContainer: {},
  pressedItem: {
    opacity: 0.75,
  },
  navText: {
    fontFamily: "CampBold",
    fontSize: 16,
    textAlign: "center",
    color: Colors.title300,
  },
});
