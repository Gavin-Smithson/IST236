import NewsList from "../components/NewsList";
import { NEWSARTICLES } from "../data/dummy-data";


// Define a functional component named VillageNewsScreen that takes props as its argument.
function VillageNewsScreen(props) {
  // Set a constant 'type' with the value "Village" to filter news articles by type.
  const type = "Village";

  // Filter the NEWSARTICLES array to include only those items where the 'type' matches "Village".
  // The filter method creates a new array with all elements that pass the test implemented by the provided function.
  const displayedArticles = NEWSARTICLES.filter((newsItem) => {
    return newsItem.type === type;
  });

  // Render the NewsList component, passing the filtered list of articles (displayedArticles) as a prop.
  // This will display only the news items of type "Village".
  return <NewsList items={displayedArticles} />;
}

// Export VillageNewsScreen for use in other parts of the application, making it available for navigation or direct rendering.
export default VillageNewsScreen;
