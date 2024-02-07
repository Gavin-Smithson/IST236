import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import EventScreen from './screens/EventsScreen';
import HomeScreen from './screens/HomeScreen';
import Colors from './constants/colors';

export default function App() {
  // Setup our custom fonts
  const [fontsLoaded] = useFonts({
    "squealer": require('./assets/fonts/Squealer.otf'),
    "squealer-embossed": require('./assets/fonts/SquealerEmbossed.otf')
  })


  // Set state variable for the current screen
  const [currentScreen, setCurrentScreen] = useState('home');
  
  function eventsScreenHandler() {
    setCurrentScreen("events");
  }

  function homeScreenHandler() {
    setCurrentScreen("home");
  }



  // Determine which screen to be on
  let screen = <HomeScreen onNext={eventsScreenHandler}/>;


  if (currentScreen == "events"){
    screen = <EventScreen onNext={homeScreenHandler} />;
  }




  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
