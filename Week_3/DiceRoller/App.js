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
  const maxVal = 6;
  const minVal = 1;
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [userWager, setUserWager] = useState('');
  const [diceSum, setDiceSum] = useState(2);

  function startDiceRollHandler() {
    setModalIsVisible(true);
    setUserGuess('');
    setUserWager('');
  }

  function endDiceRollHandler() {
    setModalIsVisible(false);
  }

  function onDiceRoll() {
    const rndNum1 = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    const rndNum2 = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    setDice1(rndNum1);
    setDice2(rndNum2);
    setDiceSum(rndNum1 + rndNum2);
    endDiceRollHandler();
  }

  let resultText = <Text style={styles.resultText}>Roll the Dice and Make a Wager</Text>;
  const userGuessNum = parseInt(userGuess);
  const userWagerNum = parseFloat(userWager);

  if (userGuess !== '') {
    if (userGuessNum === diceSum) {
      resultText = (
        <Text style={styles.resultText}>You Won ${userWagerNum * 5}</Text>
      );
    } else {
      resultText = (
        <Text style={styles.resultText}>You Lost ${userWagerNum}</Text>
      );
    }
  }

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>Dice Roller</Text>
          </View>
        </View>

        <View style={styles.rollButtonContainer}>
          <Pressable
            onPress={startDiceRollHandler}
            android_ripple={{ color: '#ff6f6f' }}
            style={({ pressed }) => [styles.rollButton, pressed && styles.pressedButton]}
          >
            <Text style={styles.rollButtonText}>Roll Dice</Text>
          </Pressable>
        </View>

        <View style={styles.diceContainer}>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>{dice1}</Text>
          </View>
          <View style={styles.dice}>
            <Text style={styles.diceNumber}>{dice2}</Text>
          </View>
        </View>

        <View style={styles.resultsContainer}>
          <Text style={styles.resultText}>The resulting dice roll is {diceSum}</Text>
        </View>

        <View style={styles.resultsContainer}>
          {resultText}
        </View>

        <Modal visible={modalIsVisible} animationType="slide">
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.inputLabel}>Guess the Roll Value:</Text>
            <TextInput 
              style={styles.textInput}
              placeholder="Enter A Guess Between 2 and 12"
              keyboardType="number-pad"
              onChangeText={setUserGuess}
              value={userGuess}
            />

            <Text style={styles.inputLabel}>What's Your Wager:</Text>
            <TextInput
              style={styles.textInput} 
              placeholder="Enter your wager"
              keyboardType="number-pad"
              onChangeText={setUserWager}
              value={userWager}
            />
            <View style={styles.modalButtonContainer}>
              <Button title="Roll Dice" onPress={onDiceRoll} />
              <Button title="Cancel" color="black" onPress={endDiceRollHandler} />
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
    backgroundColor: '#8849b3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
  },
  titleBackground: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 50,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
  },
  title: {
    fontSize: 24,
  },
  rollButtonContainer: {
    flex: 1,
    marginVertical: 20,
  },
  pressedButton: {
    opacity: 0.8,
  },
  rollButton: {
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 7,
  },
  rollButtonText: {
    fontSize: 20,
  },
  diceContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  dice: {
    backgroundColor: 'white',
    borderWidth: 3,
    margin: 20,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  diceNumber: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 20,
    color: 'white',
    marginVertical: 10,
  },
  modalRoot: {
    flex: 1,
    backgroundColor: '#8849b3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputLabel: {
    fontSize: 20,
    color: 'white',
    marginVertical: 10,
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    color: '#8849b3',
    marginBottom: 20,
    width: '80%',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  resultsContainer: {
    flex: 1,
    alignItems: 'center',
  }
});
