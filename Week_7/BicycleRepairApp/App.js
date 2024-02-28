import { StatusBar } from "expo-status-bar";
import { useState, useMemo, useCallback } from "react";
import { StyleSheet, Minecraft, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import OrderScreen from "./screens/OrderScreen.js";
import * as SplashScreen from "expo-splash-screen";
import HomeScreen from "./screens/HomeScreen.js";
import Colors from "./constants/colors.js";
import { useFonts } from "expo-font";


export default function App() {
  // Load custom fonts and set state for font loading status
  const [fontsLoaded, fontError] = useFonts({
    MinecraftBold: require("./assets/fonts/MinecraftBold.otf"),
    Minecraft: require("./assets/fonts/Minecraft.otf"),
  });

  // Hide splash screen after fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // State variables for managing the app's state
  const [currentScreen, setCurrentScreen] = useState(""); // Current screen identifier
  const [currentPrice, setCurrentPrice] = useState(0); // Current total price

  // useMemo to memoize and return the same radio buttons array on every render
  const repairTimeRadioButtons = useMemo(
    () => [
      // Definitions for repair time options with their prices
      { id: "0", label: "Standard", value: "Standard", price: 0, borderColor: Colors.primary500, color: Colors.primary500 },
      { id: "1", label: "Expedited", value: "Expedited", price: 50, borderColor: Colors.primary500, color: Colors.primary500 },
      { id: "2", label: "Next Day", value: "Next Day", price: 100, borderColor: Colors.primary500, color: Colors.primary500 },
    ],
    []
  );

  // State for tracking selected repair time and services
  const [repairTimeId, setRepairTimeId] = useState(0); // Selected repair time ID
  // Initial services state, tracking which services are selected
  const [services, setServices] = useState([
    { id: 0, name: "Basic Tune-Up", value: false, price: 50 },
    { id: 1, name: "Comprehensive Tune-Up", value: false, price: 75 },
    { id: 2, name: "Flat Tire Repair", value: false, price: 20 },
    { id: 3, name: "Brake Servicing", value: false, price: 50 },
    { id: 4, name: "Gear Servicing", value: false, price: 40 },
    { id: 5, name: "Chain Servicing", value: false, price: 15 },
    { id: 6, name: "Frame Repair", value: false, price: 35 },
    { id: 7, name: "Safety Check", value: false, price: 25 },
    { id: 8, name: "Accessory Install", value: false, price: 10 },
  ]);

  // States for newsletter subscription and rental membership
  const [newsletter, setNewsletter] = useState(false);
  const [rentalMembershipPrice, setRentalMembership] = useState(false);

  // Handlers for setting app state
  function homeScreenHandler() {
    setCurrentPrice(0); // Reset price
    setCurrentScreen("home"); // Navigate to home screen
  }

  // Toggle service selection
  function setServiceHandler(id) {
    setServices((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, value: !item.value } : item
      )
    );
  }

  // Toggle newsletter subscription
  function setNewsletterHandler() {
    setNewsletter((previous) => !previous);
  }

  // Toggle rental membership
  function setRentalMembershipHandler() {
    setRentalMembership((previous) => !previous);
  }

  // Calculate total price and navigate to review screen
  function orderReviewHandler() {
    let price = 0;
    // Calculate price based on selected services
    for (let i = 0; i < services.length; i++) {
      if (services[i].value) {
        price += services[i].price;
      }
    }

    // Add price for rental membership if selected
    if (rentalMembershipPrice) {
      price += 100;
    }

    // Add price for selected repair time
    price += repairTimeRadioButtons[repairTimeId].price;

    setCurrentPrice(price); // Update current price
    setCurrentScreen("review"); // Navigate to review screen
  }

  // Determine which screen to be on
  let screen = (
    <HomeScreen
      repairTimeId={repairTimeId}
      newsletter={newsletter}
      services={services}
      rentalMembershipPrice={rentalMembershipPrice}
      repairTimeRadioButtons={repairTimeRadioButtons}
      onSetNewsletter={setNewsletterHandler}
      onSetRepairTimeId={setRepairTimeId}
      onSetRentalMembership={setRentalMembershipHandler}
      onNext={orderReviewHandler}
      onSetServices={setServiceHandler}
      
    />
  );

  if (currentScreen === "review") {
    screen = (
      <OrderScreen
        repairTime={repairTimeRadioButtons[repairTimeId].value}
        services={services}
        newsletter={newsletter}
        rentalMembershipPrice={rentalMembershipPrice}
        price={currentPrice}
        onNext={homeScreenHandler}
      />
    );
  }

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
    backgroundColor: Colors.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
});