import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, Linking, } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style="light" />
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.selfieContainer}>
        <Image source={require('./assets/selfie.jpg')} style={styles.profileImage} />
      </View>
      <View style={styles.informationContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:smithson.gavin@outlook.com')} >
          <Text style={styles.link}>smithson.gavin@outlook.com</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('tel:+18435049855')}>
          <Text style={styles.link}>843-504-9855</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Gavin-Smithson')}>
          <Text style={styles.link}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
    padding: "10px",
  },
  selfieContainer: {
    flex: 5,
    marginBottom: 10,
  },
  informationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 10,
  },
  profileImage: {
    borderRadius: 150 / 2,
    width: 400,
    height: 600,
  }
});
