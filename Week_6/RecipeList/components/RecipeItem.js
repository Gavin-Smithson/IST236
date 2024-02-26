import { View, StyleSheet, Text, Pressable } from "react-native";
import Colors from "../constants/colors.js";

function RecipesItem(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemTitleContainer}>
        <Text style={styles.itemTitle}>{props.title}</Text>
      </View>
      <View style={styles.itemButtonContainer}>
        <Pressable style={styles.button} onPress={props.onView}>
          <Text style={styles.buttonText}>View</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={props.onDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default RecipesItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 3,
    borderRadius: 17,
    backgroundColor: Colors.accent500,
  },
  itemTitleContainer: {
    justifyContent: "center",
  },
  itemTitle: {
    fontSize: 20,
    color: Colors.primary300,
    padding: 10,
    fontFamily: "Minecraft",
  },
  itemButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginVertical: 5,
    marginHorizontal: 1,
    backgroundColor: Colors.primary500,
    borderRadius: 50,
    padding: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Minecraft",
  },
});
