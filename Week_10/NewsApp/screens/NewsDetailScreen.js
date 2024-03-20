// Import necessary components from react-native, react and other local files
import { Text, StyleSheet, View, Image, ScrollView } from "react-native";
import { NEWSARTICLES } from "../data/dummy-data";
import { useLayoutEffect, useState } from "react";
import BookmarkButton from "../components/BookmarkButton";

// Define the NewsDetailScreen component
function NewsDetailScreen(props) {
  // Extract the NewsId from the navigation parameters
  const NewsId = props.route.params.NewsId;
  // Find the selected article from the dummy data using the NewsId
  const selectedArticle = NEWSARTICLES.find((article) => article.id === NewsId);

  // Define a state variable for the bookmark button press status
  const [pressed, setPressed] = useState(false);

  // Define a handler for the bookmark button press event
  function headerButtonPressHandler() {
    // Toggle the pressed state
    setPressed(!pressed);
  }

  // Use the useLayoutEffect hook to set the navigation options
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      // Define the headerRight component as the BookmarkButton
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  // Render the component
  return (
    // Start of the root container
<View style={styles.rootContainer}>
  {/* Use ScrollView for enabling scrolling when the content overflows */}
  <ScrollView>
    {/* Container for the image */}
    <View style={styles.imageContainer}>
      {/* Display the image of the selected article */}
      <Image
        style={styles.image}
        source={{ uri: selectedArticle.imageUrl }}
      />
    </View>

    {/* Container for the article information */}
    <View style={styles.infoContainer}>
      {/* Display the headline of the selected article */}
      <Text style={styles.headline}>{selectedArticle.headline}</Text>
      {/* Display the author of the selected article */}
      <Text style={styles.author}>{selectedArticle.author}</Text>

      {/* Container for the date and agency */}
      <View style={styles.rowContainer}>
        {/* Display the date of the selected article */}
        <Text style={styles.rowItem}>{selectedArticle.date}</Text>
        {/* Display the agency of the selected article */}
        <Text style={styles.rowItem}>{selectedArticle.agency}</Text>
      </View>
      {/* Display the description of the selected article */}
      <Text style={styles.description}>{selectedArticle.description}</Text>
    </View>
  </ScrollView>
{/* End of the root container */}
</View>
  );
}

// Export the NewsDetailScreen component
export default NewsDetailScreen;

// Define the styles for the component
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 15,
    height: 250,
    width: "95%",
    alignSelf: "center",
    borderWidth: 5,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
  },
  infoContainer: {
    alignSelf: "center",
    marginVertical: 5,
    marginBottom:15,
    paddingHorizontal:15,
    width: "90%",
    borderWidth: 5,
  },
  headline: {
    fontSize: 24,
    marginVertical: 15,
    textAlign: "center",
    fontFamily:"robotoBold",
  },
  author: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    fontFamily:"robotoBold",
  },
  rowContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  rowItem: {
    fontSize: 18,
    fontFamily:"robotoBold",
  },
  description: {
    fontSize: 16,
    alignSelf: "center",
    marginBottom:15,
    fontFamily:"robotoReg",
  },
});