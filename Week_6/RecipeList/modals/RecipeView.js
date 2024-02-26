import { View, StyleSheet, Text, Image, Linking, Modal } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton.js";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";

// Creates the RecipeView Modal to show the title and text of the selected recipe
function RecipeView(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  return (
    <Modal visible={props.visible} animationType="slide">
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.text}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onClose}>Return</NavButton>
        </View>
      </View>
    </Modal>
  );
}

export default RecipeView;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: Colors.accent800,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    color: Colors.primary300,
  },
  textContainer: {
    flex: 5,
    width: "90%",
    borderWidth: 3,
    borderColor: Colors.primary500,
  },
  text: {
    color: Colors.primary300,
    fontSize: 20,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 10,
  },
});
