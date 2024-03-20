// Import necessary components and libraries from React Native and a custom NewsItem component.
import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";

// Define the NewsList functional component that accepts props.
function NewsList(props) {
  // Define a function to render individual news items.
  // It receives itemData, which contains details about each news item.
  function renderNewsItem(itemData) {
    // Extract necessary properties from itemData and pass them to the NewsItem component.
    const newsItemProps = {
      id: itemData.item.id,
      type: itemData.item.type,
      headline: itemData.item.headline,
      date: itemData.item.date,
      author: itemData.item.author,
      agency: itemData.item.agency,
      description: itemData.item.description,
      imageUrl: itemData.item.imageUrl,
    };
    // Return the NewsItem component, spreading the newsItemProps as its properties.
    return <NewsItem {...newsItemProps} />;
  }

  // Render the NewsList component.
  // It uses a FlatList for efficient rendering of a potentially large list of news items.
  return (
    <View style={styles.container}>
      <FlatList
        data={props.items} // The data prop is the array of news items passed to NewsList.
        keyExtractor={(item) => item.id} // Define how to extract a unique key from each item.
        renderItem={renderNewsItem} // Define how to render each item.
        showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator for aesthetic reasons.
      />
    </View>
  );
}

// Export the NewsList component for use in other parts of the application.
export default NewsList;

// Define the component's styles using StyleSheet.create.
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 16, 
  },
  backgroundImage: {
    opacity: 0.1, 
  },
});
