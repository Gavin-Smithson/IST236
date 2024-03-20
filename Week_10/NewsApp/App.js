import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './constants/Colors';
import BookmarksScreen from './screens/BookmarksScreen';
import USNewsScreen from './screens/USNewsScreen';
import WorldNewsScreen from './screens/WorldNewsScreen';
import VillageNewsScreen from './screens/VillagerNewsScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import { Fontisto, FontAwesome, MaterialIcons, FontAwesome5, Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';


// Get the native stack, drawer, and tabs navigator
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();


// Function to build Drawer Navigator
function DrawerNavigator() {
  return (
    // Create Drawer Navigator for app
    <Drawer.Navigator
      initialRouteName="News"
      screenOptions={{
        headerStyle: { backgroundColor: Colors.secondary500 },
        headerTitleStyle: {
          fontFamily: "Madimi",
          fontSize: 30,
          color: Colors.primary500,
        },

        sceneContainerStyle: { backgroundColor: Colors.primary800 },
        drawerContentStyle: { backgroundColor: Colors.secondary800 },
        drawerInactiveTintColor: Colors.primary500,
        drawerActiveTintColor: Colors.accent500,
        drawerActiveBackgroundColor: Colors.secondary500,
      }}
    >
      {/* Create Drawer Screen for News*/}
      <Drawer.Screen
        name="News"
        component={TabsNavigator}
        options={{
          title: "News Articles",
          drawerLabel: "News Articles",
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" size={size} color={color} />
          ),
        }}
      />
      {/* Create Drawer Screen for Bookmarks*/}
      <Drawer.Screen
        name="BookmarkedNews"
        component={BookmarksScreen}
        options={{
          title: "Bookmarked Articles",
          drawerLabel: "Saved Articles",
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="bookmark" size={size} color={color} />
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
          fontSize: 14,
          fontFamily: "robotoReg",
        },
        tabBarStyle: {
          backgroundColor: Colors.primary500,
        },
      }}
    >
      {/* Create Tabs Screen for US News */}
      <Tabs.Screen
        name="USArticles"
        component={USNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="flag-usa" size={size} color={color} />
          ),
          tabBarLabel: "US Articles",
        }}
      />
      {/* Create Tabs Screen for World News*/}
      <Tabs.Screen
        name="WorldArticles"
        component={WorldNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="world" size={size} color={color} />
          ),
          tabBarLabel: "World Articles",
        }}
      />
      {/* Create Tabs Screen for Game News */}
      <Tabs.Screen
        name="VillagerArticles"
        component={VillageNewsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="holiday-village" size={size} color={color} />
          ),
          tabBarLabel: "Villager News",
        }}
      />
    </Tabs.Navigator>
  );
}

export default function App() {
  // Set Up Custom Fonts
  // Fonts can be found at Google Fonts and Font Space
  const [fontsLoaded, fontError] = useFonts({
    Madimi: require("./assets/fonts/MadimiOne-Regular.ttf"),
    robotoReg: require("./assets/fonts/Roboto-Regular.ttf"),
    robotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    
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
            // Configure screen options in DrawerScreen
            screenOptions={{
              headerTintColor: Colors.primary500,
              headerStyle: { backgroundColor: Colors.secondary800 },
              contentStyle: { backgroundColor: Colors.primary800},
            }}
          >
            {/* Create Drawer Screen for Drawer Navigator */}
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            {/* Create News Detail Screen */}
            <Stack.Screen
              name="NewsDetail"
              component={NewsDetailScreen}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});