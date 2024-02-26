import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";
import Colors from "./constants/colors.js";
import AddRecipeScreen from "./screens/AddRecipeScreen.js";
import RecipeViewScreen from "./screens/RecipeViewScreen.js";

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded] = useFonts({
    Minecraft: require("./assets/fonts/Minecraft.otf"),
    MinecraftBold: require("./assets/fonts/MinecraftBold.otf"),
  });

  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(4);
  const [currentRecipes, setCurrentRecipes] = useState([
    {
      id: 1,
      title: "Minecraft Cake",
      text: "1. Gather 3 wheat, 2 sugars, 1 egg, and 3 buckets of milk.\n2. Open the crafting table and arrange the ingredients: place 3 milk buckets across the top row, followed by sugar, egg, and sugar in the middle row, and finally 3 wheat at the bottom.\n3. Combine all items to craft your Minecraft cake.\n4. Place the cake on a block and right-click to eat it, restoring health and hunger points.\n5. Remember, unlike real cake, you can't take the whole cake with you once it's placed!"
    }
    
   
  ]);

  // Sets the current screens
  function HomeScreenHandler() {
    setCurrentScreen("home");
  }

  function RecipeViewScreenHandler() {
    setCurrentScreen("recipes");
  }

  function AddRecipeScreenHandler() {
    setCurrentScreen("add");
  }

  // Adds the new recipe to the list
  function AddRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipes((currentRecipes) => {
      return [
        ...currentRecipes,
        { id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    RecipeViewScreenHandler();
  }

  // Deletes the chosen recipe
  function deleteRecipeHandler(id) {
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    });
  }

  // Determine which screen to be on
  let screen = <HomeScreen onNext={RecipeViewScreenHandler} />;

  if (currentScreen === "add") {
    screen = (
      <AddRecipeScreen
        onAdd={AddRecipeHandler}
        onCancel={RecipeViewScreenHandler}
      />
    );
  }

  if (currentScreen === "recipes") {
    screen = (
      <RecipeViewScreen
        onHome={HomeScreenHandler}
        onAdd={AddRecipeScreenHandler}
        onDelete={deleteRecipeHandler}
        currentRecipes={currentRecipes}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
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
