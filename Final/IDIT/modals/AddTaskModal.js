import {
  TextInput,
  View,
  Modal,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
  Button
} from "react-native";
import { useEffect, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import FIREBASE_DB from "../firebaseConfig"
import { addDoc, collection } from "firebase/firestore";
import { set } from "firebase/database";

function AddTaskModal(props) {

  // Create states for holding data for the database
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("Low");
  const [taskDueDate, setTaskDueDate] = useState(new Date());


  // Function for adding a todo
  const addTask = async () => {
    const doc = await addDoc(collection(FIREBASE_DB, "todos"), {
      Name: taskName,
      Description: taskDescription,
      Priority: taskPriority,
      Date: taskDueDate,
      Done: false,
    });
    // Toggle The Modal and clear the states
    props.toggleModal();
    setTaskName("");
    setTaskDescription("");
    setTaskPriority("Low");
    setTaskDueDate(new Date());
  };

  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.centeredView}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTaskName(text)}
            value={taskName}
            placeholder="Task Name"
            placeholderTextColor="#ccc"
            autoFocus={true} 
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setTaskDescription(text)}
            value={taskDescription}
            placeholder="Description"
            placeholderTextColor="#ccc"
          />
          <Text style={styles.label}>Due Date</Text>
          <DateTimePicker
            style={styles.dateTimePicker}
            value={taskDueDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || taskDueDate;
              setTaskDueDate(currentDate);
            }}
          />
          <Text style={styles.label}>Priority</Text>
          <Picker
            style={styles.picker}
            selectedValue={taskPriority}
            onValueChange={(itemValue) => setTaskPriority(itemValue)}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="Low" value="low" />
            <Picker.Item label="Medium" value="medium" />
            <Picker.Item label="High" value="high" />
          </Picker>
          <Button style={styles.button} title="Add Task" onPress={() => addTask()} />
          <Button style={styles.button} title="Close" onPress={() => props.toggleModal()} />

        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end", 
  },
  modalView: {
    width: "100%", 
    backgroundColor: "#333", 
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  input: {
    backgroundColor: "#555", 
    color: "white", 
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 5,
    width: "100%", 
  },
  dateTimePicker: {
    width: "100%", 
    backgroundColor: "#444", 
    color: "white",
  },
  picker: {
    width: "100%", 
    backgroundColor: "#444",
    color: "white",
    paddingTop: 0,
    marginBottom: 25,
    height: 60,
  },
  pickerItem: {
    color: "white", 
    height: 60,
  },
  label: {
    color: "white",
    margin: 0,
    paddingBottom: 0,
    paddingTop: 10,
    fontSize: 16,
    marginBottom: 10,
    textAlign: "left",
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
});

export default AddTaskModal;
