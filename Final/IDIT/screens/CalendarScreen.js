import { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Button,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from "../constants/colors";
import TaskList from "../components/TaskList";
import AddTaskButton from "../components/AddTaskButton";

function CalendarViewScreen() {
  const [currentSelectedDate, setcurrentSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Android Calendar Display */}
      {Platform.OS === "android" && (
        <>
          {showDatePicker && (
            <DateTimePicker
              style={styles.dateTimePicker}
              value={currentSelectedDate}
              mode="date"
              display="calendar"
              themeVariant="dark"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  const currentDate = selectedDate || taskDueDate;
                  setcurrentSelectedDate(currentDate);
                }
              }}
            />
          )}
          <Button title="Select Date" onPress={() => setShowDatePicker(true)} />
        </>
      )}

      {/* IOS Calendar Display */}
      {Platform.OS === "ios" && (
      <DateTimePicker
        style={styles.dateTimePicker}
        value={currentSelectedDate}
        mode="date"
        display="default"
        themeVariant="dark"
        onChange={(event, selectedDate) => {
          const currentDate = selectedDate || taskDueDate;
          setcurrentSelectedDate(currentDate);
        }}
      />
      )}
      
      <View style={styles.todoContainer}>
        <TaskList filter="Calendar" calendarDate={currentSelectedDate} />
      </View>
      <AddTaskButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.primary350,
  },
  dateTimePicker: {
    marginTop: 20,
    width: 270,
    color: "white",
  },
  todoContainer: {
    flex: 1,
    backgroundColor: Colors.primary350,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default CalendarViewScreen;
