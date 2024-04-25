import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import Animated from "react-native-reanimated";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoLists from "./screens/TodoLists";
import CalendarScreen from "./screens/CalendarScreen";
import FocusTimerScreen from "./screens/FocusTimerScreen";
import TodayScreen from "./screens/TodayScreen";
import Colors from "./constants/colors";
import { useCallback } from "react";
import {
  Entypo,
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
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
      initialRouteName="ToLists"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily: "roboto",
          fontSize: 30,
          color: Colors.accent800,
        },

        sceneContainerStyle: { backgroundColor: Colors.primary300 },
        drawerContentStyle: { backgroundColor: Colors.primary500 },
        drawerActiveTintColor: Colors.accent300,
        drawerActiveBackgroundColor: Colors.primary400,
        drawerInactiveTintColor: Colors.accent800,
        drawerInactiveBackgroundColor: Colors.primary500,
      }}
    >
      {/* Create Drawer Screen for ToLists*/}
      <Drawer.Screen
        name="ToLists"
        component={TabsNavigator}
        options={{
          title: "IDIT",
          drawerLabel: "IDIT",
          drawerIcon: ({ color, size }) => (
            // Icon from https://icons.expo.fyi/Index
            <Feather name="list" size={size} color={color} />
          ),
        }}
      />
      {/* Create Drawer Screen for Today*/}
      <Drawer.Screen
        name="TodayScreen"
        component={TodayScreen}
        options={{
          title: "Today",
          drawerLabel: "Today",
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
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: Colors.primary800,
        tabBarActiveTintColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary500,
        tabBarInactiveTintColor: Colors.primary300,
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      {/* Create Tabs Screen for Todo Listing */}
      <Tabs.Screen
        name="TodoLists"
        component={TodoLists}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="today" size={size} color={color} />
          ),
        }}
      />
      {/* Create Tabs Screen for Calendar Listing */}
      <Tabs.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="calendar-month" size={size} color={color} />
          ),
        }}
      />
      {/* Create Tabs Screen for Focus Timer Listing */}
      <Tabs.Screen
        name="FocusTimer"
        component={FocusTimerScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="timer-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  // Set Up Custom Fonts
  const [fontsLoaded, fontError] = useFonts({
    roboto: require("./assets/fonts/Roboto.ttf"),
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
            // Configure screen options in TodoLists

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
