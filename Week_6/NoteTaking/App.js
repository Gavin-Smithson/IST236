import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/Homescreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Colors from "./constants/colors";
import AddNoteScreen from "./screens/AddNoteScreen";
import NotesScreen from "./screens/NotesScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });

  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentNotes, setCurrentNotes] = useState([
    {
      id: 1,
      title: "To Do List",
      text: "1. Do Homework\n2. Clean Car\n3. Pay Bills\n4. Make Dinner",
    },
    {
      id: 2,
      title: "To Do List v2",
      text: "1. Do Homework\n2. Clean Car\n3. Pay Bills\n4. Make Dinner",
    },
  ]);

  function homeScreenHandler() {
    setCurrentScreen("home");
  }
  function notesScreenHandler() {
    setCurrentScreen("notes");
  }
  function addNoteScreenHandler() {
    setCurrentScreen("add");
  }

  function addNoteHandler(enteredNoteTitle, enteredNoteText) {
    setCurrentNotes((currentNotes) => {
      return [...currentNotes, { id: currentID, title: enteredNoteText }];
    });
    setCurrentID(currentID + 1);
    notesScreenHandler();
  }

  function deleteNoteHandler(id) {
    setCurrentNotes((currentNotes) => {
      return currentNotes,filter((item) => item.id !== id);
    });
  }

  let screen = <HomeScreen onNext={notesScreenHandler} />;

  if (currentScreen === "add") {
    screem = <AddNoteScreen onAdd={addNoteHandler} onCancel={notesScreenHandler} />;
  }

  if (currentScreen == "notes") {
    screen = (
      <NotesScreen
        onHome={homeScreenHandler}
        onAdd={addNoteScreenHandler}
        onDelete={deleteNoteHandler}
        currentNotes={currentNotes}
      />
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});
