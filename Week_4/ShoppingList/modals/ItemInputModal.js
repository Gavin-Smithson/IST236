import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  SafeAreaView,
  TextInput,
  Button,
  FlatList,
} from "react-native";

function ItemInputModal(props) {
  const [enteredItemText, setEnteredItemText] = useState("");

  function itemInputHandler(enteredText) {
    setEnteredItemText(enteredText);
  }

  function addItemHandler() {
    props.onAddItem(enteredItemText);
    setEnteredItemText("");
  }

  return (
    <Modal visible={props.visible}>
      <SafeAreaView style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/ShoppingCart.png")}
        />

        <TextInput style={styles.textInput} placeholder=""></TextInput>
        <View>
          <View style={styles.buttonContainer}>
            <Button
              title="Add Item"
              color="#b180f0"
              onPress={addItemHandler}
            ></Button>
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Cancel" color="#f1449b" onPress={props.onCancel} />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default ItemInputModal;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    flex: 7,
    backgroundColor: "#FFF",
    width: "90%",
    alignItems: "center",
  },
  listText: {
    fontSize: 20,
    color: "black",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e3d0ff",
    backgroundColor: "#e3d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  modalButton: {
    width: "30%",
    marginHorizontal: 20,
  },
  addButtonContainer: {},
  addButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  pressedButton: {
    opacity: 0.8,
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5e08cc",
  },
});
