import { View, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import RecipesItem from "../components/RecipeItem.js";
import Title from "../components/Title.js";
import NavButton from "../components/NavButton.js";
import RecipeView from "../modals/RecipeView.js";

function RecipesScreen(props) {
  // Declare insets variable
  const insets = useSafeAreaInsets();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [ModalTitle, setModalTitle] = useState("");
  const [ModalText, setModalText] = useState("");

  function recipeScreenHandler(title, text) {
    setModalTitle(title);
    setModalText(text);
    setModalIsVisible(true);
  }

  function closeRecipeViewHandler() {
    setModalIsVisible(false);
  }

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {/* Declare title with amazing title name */}
      <View style={styles.titleContainer}>
        <Title>Cooking Time!!!</Title>
      </View>

      {/* Declare flatlist to display each item */}
      <View style={styles.itemContainer}>
        <FlatList
          data={props.currentRecipes}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={true}
          showsVerticalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              <RecipesItem
                id={itemData.item.id}
                title={itemData.item.title}
                onView={recipeScreenHandler.bind(
                  this,
                  itemData.item.title,
                  itemData.item.text
                )}
                onDelete={props.onDelete.bind(this, itemData.item.id)}
              />
            );
          }}
        />
      </View>

      {/* Declare RecipeView modal*/}
      <RecipeView
        visible={modalIsVisible}
        title={ModalTitle}
        text={ModalText}
        onClose={closeRecipeViewHandler}
      />

      {/* Add Nav Button*/}
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <NavButton onPress={props.onAdd}>Add Recipe</NavButton>
        </View>

        <View style={styles.button}>
          <NavButton onPress={props.onHome}>Return Home</NavButton>
        </View>
      </View>
    </View>
  );
}

export default RecipesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "90%",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 20,
  },
  itemContainer: {
    flex: 6,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  button: {
    marginHorizontal: 10,
  },
});
