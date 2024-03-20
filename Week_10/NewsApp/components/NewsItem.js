// Import necessary React Native components and the useNavigation hook from react-navigation for navigation between screens.
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
// Import the Colors object from the constants to use for styling.
import Colors from "../constants/Colors";

// Define the NewsItem functional component that takes props passed from its parent component.
function NewsItem(props) {
  // Initialize navigation to enable navigating to different screens.
  const navigation = useNavigation();

  // Define the handler function that will be called when the news item is pressed.
  // It navigates to the NewsDetail screen with the NewsId parameter.
  function selectedNewsHandler() {
    navigation.navigate("NewsDetail", {
      NewsId: props.id,
    });
  }

  // Render the NewsItem component.
  return (
    <View style={styles.itemContainer}>
      {/* Pressable component makes the news item clickable and triggers navigation */}
      <Pressable onPress={selectedNewsHandler}>
        {/* Container for the image of the news item */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        {/* Container for the news item's text information */}
        <View style={styles.infoContainer}>
          {/* Displays the headline */}
          <Text style={styles.headline}>{props.headline}</Text>
          {/* Displays the release date */}
          <Text style={styles.articleReleased}>{props.date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

// Export the NewsItem component for use in other parts of the application.
export default NewsItem;

// Define the styling for the NewsItem component using StyleSheet.create.
const styles = StyleSheet.create({
  itemContainer: {
    padding: 10, 
    marginBottom: 20,
    borderWidth: 6.5,
    borderRadius: 20,
    borderColor: Colors.secondary800, 
    backgroundColor: Colors.primary500, 
  },
  imageContainer: {
    borderWidth: 5,
    borderRadius: 7,
    height: 200, 
  },
  image: {
    height: "100%", 
    resizeMode: "fill", 
    borderRadius: 7,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  headline: {
    fontSize: 25, 
    textAlign: 'center', 
    fontFamily: "robotoBold", 
    paddingBottom: 10, 
  },
  articleReleased: {
    fontSize: 16,
    fontFamily: "robotoReg", 
  },
});
