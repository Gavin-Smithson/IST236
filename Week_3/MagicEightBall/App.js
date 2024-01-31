import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TextInput,
  Modal,
  Button
} from 'react-native';

export default function App() {
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];

  const [userQuestion, setUserQuestion] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [magicEightResult, setMagicEightResult] = useState('');

  // Function to show the modal and generate a response
  function startEightBallHandlers() {
    setModalIsVisible(true);
    generateEightBallResponse();
  }

  // Function to end the modal and set everything back to empty
  function endEightBallHandler() {
    setModalIsVisible(false);
    setMagicEightResult('');
    setUserQuestion('');
  }

  // Function to generate a response based on the responses list
  function generateEightBallResponse() {
    // Use the Math libary to create a random number based on the length of the responses list and set the state of the magicEightResult
    const rndNum = Math.floor(Math.random() * (responses.length - 0 + 1)) + 0;
    setMagicEightResult(responses[rndNum]);
  }

  return (
    <>
      <StatusBar style="auto" />
      {/* Main Screen Container */}
      <SafeAreaView style={styles.container}>

        {/* Title Container and Text Element */}
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Magical Eight Ball</Text>
          </View>
        </View>

        {/* textInput Container */}
        <View style={styles.textInputContainer}>
        <Text style={styles.inputLabel}>Enter the question you want to ask.</Text>
            {/* set the userQuestion state to the text within this input */}
            <TextInput 
              style={styles.textInput}
              onChangeText={setUserQuestion}
              value={userQuestion}
            />
        </View>

        {/* Container for the ask button */}
        <View style={styles.askButtonContainer}>
          {/* Have a custom button that launches the calls the eightBallHanlder */}
          <Pressable
            onPress={startEightBallHandlers}
            android_ripple={{ color: '#ff6f6f' }}
            style={({ pressed }) => [styles.rollButton, pressed && styles.pressedButton]}
          >
            <Text style={styles.rollButtonText}>Ask the Magical EightBall of Destiny!</Text>
          </Pressable>
        </View>

        {/* !!! MODAL CONTAINER !!! */}
        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRoot}>
            
            {/* Create a container to hold all the text elements for the results */}
            <View style={styles.modalTextContainer}>
            <Text style={styles.userQuestionText}>{userQuestion}</Text>
            <Text style={styles.responseText}>{magicEightResult}</Text>
            </View>
            {/* Exit Button */}
            <View style={styles.modalButtonContainer}>
              <Button title="Exit" color="white" onPress={endEightBallHandler} />
            </View>
          </SafeAreaView>
        </Modal>

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3D58', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBackground: {
    backgroundColor: '#0A558C', 
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A1C6EA', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
  textInputContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  inputLabel: {
    fontSize: 20,
    color: '#FFFFFF', 
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    fontSize: 16,
    width: '90%',
    borderWidth: 1,
    borderColor: '#A1C6EA', 
  },
  askButtonContainer: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  rollButton: {
    backgroundColor: '#0A558C',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#FFFFFF', 
  },
  rollButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
  modalRoot: {
    flex: 1,
    backgroundColor: '#1E3D58',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  modalTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userQuestionText: {
    fontSize: 22,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  responseText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#A1C6EA', 
    textAlign: 'center',
  },
  modalButtonContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    backgroundColor: '#0A558C', 
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A1C6EA',
  },
  modalButton: {
    backgroundColor: '#0A558C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  modalButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});


