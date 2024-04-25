import {useState, } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, StyleSheet, Platform } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";
import Colors from '../constants/colors';
import TaskList from '../components/TaskList';
import AddTaskButton from '../components/AddTaskButton';


function CalendarViewScreen() {
  const [currentSelectedDate, setcurrentSelectedDat] = useState(new Date());




  return (
    <SafeAreaView style={styles.safeArea}>
      <DateTimePicker
            style={styles.dateTimePicker}
            value={currentSelectedDate}
            mode="date"
            display="default"
            themeVariant='dark'
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || taskDueDate;
              setcurrentSelectedDat(currentDate);
            }}
          />
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
