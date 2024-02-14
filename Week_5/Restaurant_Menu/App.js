import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import { useFonts } from "expo-font";
import Colors from "./constants/colors.js";

export default function App() {
  //Set up our custom fonts
  const [fontsLoaded] = useFonts({
    "Minecraft": require("./assets/fonts/Minecraft.otf"),
    "MinecraftBold": require("./assets/fonts/MinecraftBold.otf"),
  });

  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState("home");

  function MenuScreenHandler() {
    setCurrentScreen("event");
  }

  function HomeScreenHandler() {
    setCurrentScreen("home");
  }

  // Determine which screen to be on
  let screen = <HomeScreen onNext={MenuScreenHandler} />;

  if (currentScreen === "event") {
    screen = <MenuScreen onNext={HomeScreenHandler} />;
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
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
  },
});