import { View, Image, Text, StyleSheet } from "react-native";

function MenuItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.itemTitle}>{props.name}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.itemImage} source={props.image} />
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.itemPrice}>${props.price}</Text>
      </View>
    </View>
  );
}

export default MenuItem;

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
    fontFamily: "Minecraft",
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
  priceContainer: {
    backgroundColor: "#555555",
    borderWidth: 3,
    borderRadius: 5,
  },
  itemPrice: {
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    fontFamily: "Minecraft",
  },
});
