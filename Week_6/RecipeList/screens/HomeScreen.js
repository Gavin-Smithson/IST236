import { View, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";
import NavButton from "../components/NavButton";

function HomeScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  return (
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
      {/* Declare Title */}
      <View style={styles.titleContainer}>
        <Title>Recipe Book</Title>
      </View>

      {/* Declare Image */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/chef_man.png")}
        />
      </View>

      {/* Create button to travel pages */}
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Open The Recipes</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 20,
  },
  imageContainer: {
    flex: 6,
    justifyContent: "center",
    borderWidth: 5,
    borderRadius: 25,
    borderColor: Colors.primary300,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
