import { Text, StyleSheet, View } from "react-native";
import { NEWSARTICLES } from "../data/dummy-data";
import NewsList from "../components/NewsList";


function USNewsScreen(props) {
  const type = "USA";


  const displayedArticles = NEWSARTICLES.filter((newsItem) => {
    return newsItem.type === type;
  });


  return <NewsList items={displayedArticles} />;
}


export default USNewsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
});