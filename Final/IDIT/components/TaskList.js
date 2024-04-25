import { FlatList, Text, View, StyleSheet } from "react-native";
import { collection, onSnapshot, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import FIREBASE_DB from "../firebaseConfig";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from "../constants/colors";



function TaskList(props) {
  const [todos, setTasks] = useState([]);

  const openDetailModal = () => {
    console.log("Open Detail Modal");
  }

  // Render a todo item
  const renderTodo = ({ item }) => {
    const today = new Date();
    let calendarDate = new Date();
    if (props.filter === "Calendar") {
      calendarDate = props.calendarDate
    }
    const dueDate = new Date(item.Date.seconds * 1000);
    const dueDateStr = dueDate.toDateString();
    // Check if the todo item is overdue, due today, or completed, or equal to the calendar date selected
    const isOverdue = dueDate < today;
    const isDueToday = dueDate.toDateString() === today.toDateString();
    const isCompleted = item.Done === true;
    const isCalendar = calendarDate.toDateString() === dueDate.toDateString();

    // Check to see if the props.filter is either "Overdue", "Due Today", or "Completed", "Calendar" to how a todo item should be displayed
    if (props.filter === "Overdue" && (!isOverdue || isCompleted)) {
        return null;
    }
    if (props.filter === "Due Today" && (!isDueToday || isCompleted)) {
        return null;
    }
    if (props.filter === "Completed" && !isCompleted) {
        return null;
    }
    if (props.filter === "Calendar" && !isCalendar) {
        return null;
    }


    // Reference to the current todo item
    const currentItem = doc(FIREBASE_DB, `todos/${item.id}`)
    // Function to toggle the 'Done' status of the todo item
    const toggleDone = async () => {
        // Update the 'Done' status of the todo item within Firestore
        updateDoc(currentItem, { Done: !item.Done });
    }

    // Function to delete the todo item
    const deleteItem = async () => {
        // Delete the todo item from Firestore
        deleteDoc(currentItem);
    }
    return (
        // Display the todo item
        <View style={styles.todoContainer}>
            {/* Check to see if the item is done or not, and display the appropriate icon */}
            {item.Done && <FontAwesome name="check-square" size={26} color="green" onPress={toggleDone}  />}
            {!item.Done && <FontAwesome name="square-o" size={26} color="white" onPress={toggleDone}  />}
            {/* Contain the todo item text and due date within a TouchableOpacity component */}
            <TouchableOpacity style={styles.todoTouchable} onPress={openDetailModal}>
            <Text style={styles.todoText}>{item.Name}{"\n"}{dueDateStr}</Text>
            </TouchableOpacity>
            {/* Display a delete icon to delete the todo item */}
            <AntDesign name="closesquareo" size={24} color="red" onPress={deleteItem} />
        </View>
    )
  }


  // Fetch todos from Firestore
  useEffect(() => {
    // Reference to the 'todos' collection
    const todoReference = collection(FIREBASE_DB, "todos");

    // Subscribe to the 'todos' collection
    const subscriber = onSnapshot(todoReference, {
    // Callback to handle the data
      next: (snapshot) => {
        // Initialize an empty array to store the todos
        const todos = [];
  
        // Iterate over the documents in the snapshot
        snapshot.docs.forEach((doc) => {
            // Add the document data to the array
          todos.push({ id: doc.id, ...doc.data() });
        });
        // Update the todos state with the new data
        setTasks(todos);
      },
    });

    // Unsubscribe from the collection when the component unmounts
    return () => subscriber();
  }, []);

  return (
    <>
    {/* if there is any todos, display them */}
    { todos.length > 0 && (
        <View style={styles.todoList}>
            <FlatList
            style={styles.todoList}
            data={todos}
            renderItem={renderTodo}
            keyExtractor={(todo) => todo.id}
            />
        </View>
    )}
    </>
  );
}

const styles = StyleSheet.create({
    todoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 5,
        marginVertical: 2,
        backgroundColor: Colors.primary400,
        padding: 10,
    },
    todoText: {
        fontSize: 16,
        color: Colors.accent800,
        textAlign: "center",
        width: 330,
        fontFamily: "Arial",
    },
    todoTouchable: {
        flex: 1,
    },
    todoList: {
        flex: 1,
    },
});

export default TaskList;
