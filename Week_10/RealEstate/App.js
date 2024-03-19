import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HouseListingsScreen from "./screens/HouseListingsScreen";
import CondoListingsScreen from "./screens/CondoListingsScreen";
import TrailerListingsScreen from "./screens/TrailerListingsScreen";
import TownhouseListingsScreen from "./screens/TownhouseListingsScreen";
import ListingDetailScreen from "./screens/ListingDetailScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import Colors from "./constants/colors";
import { useCallback } from "react";
import {
  Entypo,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// Get the native stack, drawer, and tabs navigator
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

// Function to build Drawer Navigator
function DrawerNavigator() {
  return (
    // Create Drawer Navigator
    <Drawer.Navigator
      initialRouteName="Listings"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "nolluqa",
          fontSize: 40,
          color: Colors.accent800,
        },

        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerActiveTintColor: Colors.primary300,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.primary800,
      }}
    >
      {/* Create Drawer Screen for Listings*/}
      <Drawer.Screen
        name="Listings"
        component={TabsNavigator}
        options={{
          title: "All Listings",
          drawerLabel: "Real Estate Listings",
          drawerIcon: ({ color, size }) => (
            // Icon from https://icons.expo.fyi/Index
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      {/* Create Drawer Screen for Bookmarks*/}
      <Drawer.Screen
        name="BookmarkedListings"
        component={BookmarksScreen}
        options={{
          title: "Saved Listings",
          drawerLabel: "Saved Listings",
          drawerIcon: ({ color, size }) => (
            // Icon from https://icons.expo.fyi/Index
            <Entypo name="bookmark" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// Function to build Tab Navigator
function TabsNavigator() {
  return (
    // Create Tabs Navigator
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarLabel: {
          fontSize: 12,
          fontFamily: "playfairBold",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      {/* Create Tabs Screen for House Listing */}
      <Tabs.Screen
        name="HouseListings"
        component={HouseListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
          tabBarLabel: "Houses",
        }}
      />
      {/* Create Tabs Screen for Condo Listing */}
      <Tabs.Screen
        name="CondoListings"
        component={CondoListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="apartment" size={size} color={color} />
          ),
          tabBarLabel: "Condos",
        }}
      />
      {/* Create Tabs Screen for Townhome Listing */}
      <Tabs.Screen
        name="TownhomeListings"
        component={TownhouseListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="holiday-village" size={size} color={color} />
          ),
          tabBarLabel: "Townhomes",
        }}
      />
      {/* Create Tabs Screen for Mobile Home Listing */}
      <Tabs.Screen
        name="TrailerListings"
        component={TrailerListingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="truck-trailer"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Mobile Homes",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  // Set Up Custom Fonts
  const [fontsLoaded, fontError] = useFonts({
    nolluqa: require("./assets/fonts/NolluqaRegular.otf"),
    playfair: require("./assets/fonts/Playfair.ttf"),
    playfairBold: require("./assets/fonts/PlayfairBold.ttf"),
    playfairItalic: require("./assets/fonts/PlayfairBoldItalic.ttf"),
  });

  // Wait and load all of the fonts for application
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      // Turn off Splash Screen
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Check to see if the fonts are not loaded as well if they are giving any errors
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    // If the fonts are loaded and there is no errors show screen
    return (
      <>
        {/* Show status bar */}
        <StatusBar style="light" />
        {/* Create Navigation Container */}
        <NavigationContainer style={styles.container}>
          {/* Utilize Stack to make a Navigator and Screen */}
          <Stack.Navigator
            // Set default screen to DrawerScreen
            initialRouteName="DrawerScreen"
            // Configure screen options in HouseListingsScreen

            screenOptions={{
              headerTintColor: Colors.primary300,
              headerStyle: { backgroundColor: Colors.primary500 },
              contentStyle: { backgroundColor: "black" },
            }}
          >
            {/* Create Drawer Navigator */}
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            {/* Create Listing Detail Screen */}
            <Stack.Screen
              name="ListingDetail"
              component={ListingDetailScreen}
              options={{
                headerBackTitle: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
