import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Pressable,
  TextInput,
  Modal,
} from "react-native";

export default function App() {
  // Set max and min dice value
  const maxVal = 6;
  const minVal = 1;
  // Create state mangement variables
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [modalIsVisable, setModalIsVisible] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [userWager, setUserWager] = useState("");
  const [diceSum, setDiceSum] = useState(0);

  function startDiceRollHandler() {
    setModalIsVisible(true);
    setUserGuess("");
    setUserWager("");
  }

  function endDiceRollHandler () {
    setModalIsVisible(false);
  }

  function onDiceRoll() {
    const rndNum1 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    const rndNum2 = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
    setDice1(rndNum1);
    setDice2(rndNum2);

    let result = rndNum1 + rndNum2

    endDiceRollHandler();

  // Dynamically determine what type of result text to display
  let resultText = (
    <Text style={styles.resultText}>Roll the Dice and Make a Wager</Text>
  )

  const userGuessNum = parseInt(userGuess);
  const diceSumNum = parseInt(diceSum);
  if (userGuess !== "" && userGuessNum == diceSumNum) {
    resultText = <Text style={styles.resuleText}>You Won $ {(userWager * 5).toFixed(2)}</Text>
  
  }
  if (userGuess !== "" && userGuessNum !== diceSumNum) {
    resultText = <Text style={styles.resuleText}>You lost $ {(userWager ).toFixed(2)}</Text>
  
  }
  return (
  <>
    <StatusBar style="auto" />
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBackground}>
        <View style={styles.titleContainer}>
          <Text>Dice Roller</Text>
        </View>
      </View>

      <View style={styles.rollButtoncontainer}>
        <View>
          <Pressable
            // Add the android ripple
            android_ripple={{ color: "#ff6f6f" }}
            // Style the button when pressed
            style={({ pressed }) => pressed && styles.pressedButton}
          >
            <Text>Roll Dice</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.diceContainer}>
        <View style={styles.dice}>
          <Text style={styles.diceNumber}>{dice1}</Text>
        </View>
        <View style={styles.diceNumber}>
          <Text>{dice2}</Text>
        </View>
      </View>

      <View style={resultsContainer}>
        <Text style={results.resultText}>The resulting dice roll is {diceSum}</Text>
      </View>

      <View style={resultsContainer}>
        <Text style={results.resultText}>You won / Lost ____</Text>
      </View>


      <Modal visable={modalIsVisable} animationType="slide">
        <SafeAreaView style={styles.modalRoot}>
          <Text style={inputLabel}>Guess the Roll Value:</Text>
          <TextInput 
          style={styles.textInput}
          // Placeholder for when the input is empty
          placeholder="Enter A Guess Between 2 and 12"
          // Set the keyboard type to number pad for only intergers
          keyboardType="number-pad"
          // When the text is changed, update the userGuess
          onChangeText={setUserGuess}
          // Tie the entered value to the userGuess so when
          // it is reset to blank the input field will also reset
          ></TextInput>

          <Text style={inputLabel}>What's Your Wager:</Text>
          <TextInput
          style={styles.textInput} 
          // Placeholder for when the input is empty
          placeholder="Enter your wager"
          // Set the keyboard type to number pad for only intergers
          keyboardType="number-pad"
          // When the text is changed, update the userGuess
          onChangeText={setUserWager}
          // Tie the entered value to the userWager so when
          // it is reset to blank the input field will also reset
          ></TextInput>
          <View>
            <View>
              <Button title="Roll Dice" onPress={onDiceRoll}></Button>
            </View>
            <View>
              <Button title="Cancel" color="black" onPress={endDiceRollHandler}></Button>
            </View>
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
    backgroundColor: "#8849b3",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flex: 1,
    
  },
  titleBackground: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
  },
  title: {
    fontSize: 60,
  },
  rollButtoncontainer: {
    flex: 1,
    justifyContent: "center",
  },
  pressedButton: {
    opacity: 0.8,
    borderRadius: 7,
    borderWidth: 1,
  },
  rollButton: {
    backgroundColor: "white",
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
  },
  rollButtonText: {
    fontSize: 20,
  },
  diceContainer: {
    flex: 3,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  dice: {
    backgroundColor: "white",
    borderWidth: 3,
    margin: 20,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  diceNumber: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
    borderWidth: 3,
    borderRadius: 7,
  },
  resultText: {
    fontSize: 25,
  },
  modalRoot: {

  },
  inputLabel: {
    fontSize: 25,
    color: "white",
    marginTop: 20,
  },
  textInput: {
    backgroundColor: "#ffd4d4",
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    color: '#8849b3',
    marginBottom: 30,
  },
  modalButtonContainer: {
    flexDirection: 'row',
    marginTop: '16'
  },
  modalButton: {
    width: '30%',
    marginHorizontal: 8
  }

})};
