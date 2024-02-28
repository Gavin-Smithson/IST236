import { View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";
import NotesItem from "../components/NotesItem";
import NoteView from "../modals/NoteView";
import { useState } from "react";
function NotesScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [modalNoteTitle, setModalNoteTitle] = useState("");
  const [modalNoteText, setModalNoteText] = useState("");
  
  function noteViewHandler(title, text){
    setModalNoteTitle(title);
    setModalNoteText(text);
    setModalIsVisible(true)
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
        <Title>Current Thoughts</Title>
      </View>

      <View style={styles.itemContainer}>
        <FlatList
          data={props.currentNotes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <NotesItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={noteViewHandler.bind(this,itemData.title, itemData.item.text)}
                onDelete={itemData.item.onDelete.bind(this, itemData.id)}
              />
            );
          }}
        />
      </View>

      <NoteView
        visible={modalIsVisible}
        title={modalNoteTitle}
        text={modalNoteText}
        onClose={closeNoteViewHandler}
      />

      <View style={styles.navButtonContainer}>
        <View style={styles.navButton}>
          <NavButton onNext={props.onAdd}>Add New Notes</NavButton>
        </View>
      

      <View style={styles.navButtonContainer}>
        <NavButton onNext={props.onHome}>Return Home</NavButton>
      </View>
      </View>
    </View>
  );
}

export default NotesScreen;

const styles = StyleSheet.create({
  rootCotainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyCotent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 6,
  },
  navButtonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItem: "center",
  },
  navButton: {
    marginHorizontal: 20,
  },
});
