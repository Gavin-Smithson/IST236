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
        <Title>House of Blues</Title>
      </View>

      <View style={styles.imageContainer} >
        <Image
          style={styles.image}
          source={require("../assets/images/venue.jpg")}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() => Linking.openURL("tel:8432723000")}
        >
          843-272-3000
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://maps.app.goo.gl/2dUw7HZnP5SUsRRC6")
          }
        >
          4640 Hwy 16 S{"\n"}North Myrtle Beach{"\n"}SC 29572
        </Text>
      </View>

      <View style={styles.infoContainer}>
        <Text
          style={styles.infoText}
          onPress={() =>
            Linking.openURL("https://www.houseofblues.com/myrtlebeach")
          }
        >
          www.houseofblue.com
        </Text>
      </View>

      <View>
        <NavButton onPress={props.onNext} style={styles.buttonContainer}>View Events</NavButton>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380,
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center",
    color: Colors.primary500,
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7,
    fontFamily: "squealer"
  },
  buttonContainer: {
    flex: 1,
  }
});
