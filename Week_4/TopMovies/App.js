import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';

import MovieItem from './components/Movietem';

export default function App() {
  const [movieItems, setMovieItems] = useState([
    {
      name: "The Fault In Our Stars",
      image: require("./assets/images/TheFaultInOurStarsPoster.jpg"),
      rating: "6.5",
    },

    {
      name: "The Notebook",
      image: require("./assets/images/TheNotebookPoster.jpg"),
      rating: "6.5",
    },
    
    {
      name: "Mario Movie",
      image: require("./assets/images/TheMarioMoviePoster.jpg"),
      rating: "7",
    },
    {
      name: "Avengers Infinity War",
      image: require("./assets/images/AvengersInfinityWarPoster.jpg"),
      rating: "7.5",
    },
    {
      name: "The Dark Knight",
      image: require("./assets/images/TheDarkKnightPoster.jpg"),
      rating: "7.6",
    },

    {
      name: "Forest Gump",
      image: require("./assets/images/ForestGumpPoster.jpg"),
      rating: "8.0",
    },

    {
      name: "Star Wars The Revenge of The Sith",
      image: require("./assets/images/RevengeOfTheSithPoster.jpg"),
      rating: "9",
    },

    {
      name: "A Silent Voice",
      image: require("./assets/images/ASilentVoicePoster.jpg"),
      rating: "9.9",
    },

    {
      name: "How To Train Your Dragon",
      image: require("./assets/images/HowToTrainYourDragonPoster.jpg"),
      rating: "10",
    },

    {
      name: "Django Unchained",
      image: require("./assets/images/DjangoUnchainedPoster.jpg"),
      rating: "10",
    },
    
  ]);


  return (
    <>
    <StatusBar style="dark"/>
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Top 10 Movies</Text>
      </View>


      <View style={styles.listContainer}>
        {/* Flat List View */}
        <FlatList
        data={movieItems}
        renderItem={(movieData) => (
          <MovieItem
          name={movieData.name}
          image={movieData.image}
          ranting={movieData.rating}
          />
        )} 
        />
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#5af7e7',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40
  },
  titleContainer: {
    flex: 1,
    backgroundColor: "#555555",
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    color: "#fff",
  },
  listContainer: {
    flex: 8,
    width: "80%"
  }
});
