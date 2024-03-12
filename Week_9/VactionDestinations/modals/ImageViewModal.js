import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function ImageViewModal(props) {
  return (
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <Text style={styles.description}>{props.desc}</Text>
          <View style={styles.navbuttonContainer}>
          <Button  title="Return to Vactions" onPress={props.onClose} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(49, 49, 49)",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  description: {
    color: "white",
    padding: 10,
    fontFamily: "satisfy",
    backgroundColor: Colors.primary500,
    fontSize: 25,
    marginBottom: 50,
    marginTop: 55,
    paddingHorizontal: 30,
  },
  navbuttonContainer: {
    flex: .15,
  }
});