import { View, Image, Text, StyleSheet } from "react-native";

function RestaurantItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.itemImage} source={props.image} />
      </View>

      <View style={styles.ratingContainer}>
        <Text style={styles.itemRating}>{props.rating} / 10</Text>
      </View>
    </View>
  );
}

export default RestaurantItem;

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 20,
  },
  titleContainer: {
    backgroundColor: "#555555",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemTitle: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  ratingContainer: {
    backgroundColor: "#555555",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemRating: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
  },
});
