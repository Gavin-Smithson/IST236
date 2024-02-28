import { View, StyleSheet, ScrollView, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import { useState } from "react";

function AddNoteScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState('');

    function addNoteHandler(){
        props.onAdd(noteTitle, noteText);
        props.onCancel
    }

  return (
    <View
      style={[
        styles.rootCotainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets,
          bottom,
          paddingLeft: insets,
          left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Add New Note</Title>
      </View>

      <View style={styles.scrollContainer}>
        <ScrollView style={styles.noteTitleContainer}>
          <View>
            <TextInput 
            placeholder="Enter Note Title Here"
            styles={styles.noteTitle}
            onChangeText={setNoteTitle}

             />
          </View>

          <View>
            <TextInput
            placeholder="Enter Note Text Here" 
            styles={styles.noteText}
            onChangeText={setNoteText}
            textAlignVertical="top"
            numberOfLines={20}
            />
          </View>


          <View style={styles.navButtonContainer}>
            <View style={styles.navButton}>
              <NavButton onNext={addNoteHandler}>Save Note</NavButton>
            </View>

            <View style={styles.navButtonContainer}>
              <NavButton onNext={props.onCancel}>Return Home</NavButton>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default AddNoteScreen;

const styles = StyleSheet.create({
    rootCotainer: {
        flex: 1,
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        marginBottom: 50,
    },
    scrollContainer: {
        flex: 5,
    },
    noteTitleContainer: {
        borderWidth: 3,
        backgroundColor: Colors.primary300,
    },
    noteTitle: {
        color: Colors.accent800,
        fontWeight: "bold",
        fontSize: 30
    },
    noteTextContainer: {
        marginVertical: 5,
        borderWidth: 3,
        backgroundColor: Colors.primary300,
        alignItems: "flex-start",
    },
    noteText: {
        colors: Colors.primary800,
    },
    navButtonContainer: { 
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    navButton: {
        marginHorizontal: 10,
    }
});
