import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

// Creates the Title function for all screens to use
function Title(props) {
  return <Text style={styles.title}>{props.children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: "center",
    color: Colors.primary300,
    textShadowColor: Colors.accent800,
    textShadowRadius: 25,
    fontFamily: "MinecraftBold",
  },
});
