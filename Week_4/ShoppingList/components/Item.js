import { View, Pressable, StyleSheet, Text } from "react-native";

function Item(props) {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{ color: "#fff" }}
        style={styles.pressed}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.itemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  itemText: {
    color: "#FFF",
    padding: 0,
  },
});
