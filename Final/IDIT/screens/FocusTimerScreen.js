import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

function CalendarScreen() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    // This effect will run when the component mounts
    let interval;
    // If the timer is running and the timer is greater than 0
    if (isRunning && timer > 0) {
      // Set an interval to decrement the timer by 1 every second
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      // If the timer is not running, clear the interval
    } else if (timer === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

  // Function to handle starting and stopping the timer
  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  // Function to handle resetting the timer
  const handleReset = () => {
    setTimer(countdown * 60);
    setIsRunning(false);
  };

  //  Function to handle setting the countdown
  const handleSetCountdown = (value) => {
    if (value === "") {
      setCountdown("");
      setTimer(0);
    } else {
      const numericValue = parseInt(value, 10);
      if (!isNaN(numericValue)) {
        setCountdown(numericValue.toString());
        setTimer(numericValue * 60);
      }
    }
  };
  // Function to format the time
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Function to dismiss the keyboard
  const dismissKeyboard = () => Keyboard.dismiss();

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.container}>
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{formatTime(timer)}</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={handleSetCountdown}
            value={countdown.toString()}
            keyboardType="numeric"
            onSubmitEditing={dismissKeyboard}
          />
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 10 }}>
              <Button
                title={isRunning ? "Stop" : "Start"}
                onPress={handleStartStop}
              />
            </View>
            <Button title="Reset" onPress={handleReset} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3e3e3e",
  },
  timerContainer: {
    width: 400,
    height: 400,
    borderRadius: 400,
    borderWidth: 5,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  timerText: {
    fontSize: 60,
    color: "white",
    fontFamily: "GothamBold",
    textShadowColor: "rgba(0, 0, 0, 0.35)",
    textShadowOffset: { width: -10, height: -1 },
    textShadowRadius: 35,
  },
  input: {
    height: 40,
    marginVertical: 10,
    fontSize: 35,
    color: "white",
    textAlign: "center",
    width: 300,
    fontFamily: "GothamLight",
  },
});

export default CalendarScreen;
