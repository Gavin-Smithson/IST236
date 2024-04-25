import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/colors";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import AddTaskModal from "../modals/AddTaskModal"; 

function AddTaskButton(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const openModal = async () => {
    setModalIsVisible(true);
  }

  const toggleModal = async () => {
    setModalIsVisible(!modalIsVisible);
  }

return (  
  <>  
  <AddTaskModal visible={modalIsVisible} toggleModal={toggleModal}/>
  <View style={styles.button}>
  <TouchableOpacity style={styles.buttonIcon} onPress={openModal}>
    <AntDesign name="pluscircleo" size={70} color={"white"} />
  </TouchableOpacity>
  </View>
  </>



);
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 25,
    right: 25,
  }
});
export default AddTaskButton;
