import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import Colors from "./constants/colors.js";
import { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen.js";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    CampBold: require("./assets/fonts/CampBold.ttf"),
    Driftwood: require("./assets/fonts/Driftwood.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  });

  let screen = <HomeScreen />;

  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
    <>
      <StatusBar style="auto" />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent300,
  },
});