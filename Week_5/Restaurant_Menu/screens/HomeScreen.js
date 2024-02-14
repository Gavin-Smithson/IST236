import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";

function HomeScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootcontainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingRight: insets.right,
          paddingLeft: insets.left,
        },
      ]}
    >
      <View>
        <Title>Chili's Bar and Grill</Title>
      </View>
      

      <View style={styles.imageContainer} >
        <Image
          style={styles.image}
          source={require("../assets/images/Chilis.jpg")}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:+18434486319")}
        >
          +1-843-448-6319
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/bVhy8U5vYXT8QRcR7")
          }
        >
          4401 N Kings Hwy{"\n"}Myrtle Beach{"\n"}SC 29579
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://chilis.com/")
          }
        >
          www.chilis.com
        </Text>
      </View>

      <View>
        <NavButton onPress={props.onNext} style={styles.buttonContainer}>View Menu</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
    padding: 20,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 400,
  },
  infoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "black",
    borderBottomWidth: 2,
    borderColor: "white",
  },
  infoText: {
    fontSize: 20,
    textAlign: "center",
    color: Colors.textPrimary,
    padding: 5,
    fontFamily: "Minecraft",
  },
  buttonContainer: {
    flex: 1,
    marginVertical: 10,
    backgroundColor: Colors.button,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.buttonText,
    fontSize: 35,
    fontWeight: 'bold',
  },
});

