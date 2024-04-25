import {useState} from 'react';
import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import TaskList from '../components/TaskList'; 
import AddTaskButton from '../components/AddTaskButton'; 
import Colors from '../constants/colors';

function TodoLists() {

  const [completedCollapsed, setCompletedCollapsed] = useState(false);
  const [overdueCollapsed, setOverdueCollapsed] = useState(true);
  const [todayCollapsed, setTodayCollapsed] = useState(false);

  const toggleCompleted =  () => {
    setCompletedCollapsed(!completedCollapsed);
  }
  const toggleOverdue =  () => {
    setOverdueCollapsed(!overdueCollapsed);
    console.log("Hello");
  }
  const toggleToday =  () => {
    setTodayCollapsed(!todayCollapsed);
  }

    const overdueArrow = overdueCollapsed  ? '▲' : '▼';
    const completedArrow = completedCollapsed ? '▲' : '▼';
    const todayArrow = todayCollapsed ? '▲' : '▼';

  return (
    <>
    <View style={styles.container}>
      <View style={styles.collapsibleContainer}>
      <TouchableOpacity style={styles.touchableContainer} onPress={toggleOverdue}>
      <Text style={styles.collapsibleTitle}>Overdue</Text>
      <Text style={styles.arrow}>{overdueArrow}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={overdueCollapsed} >
        <TaskList filter="Overdue" /> 
      </Collapsible>
      </View>

      <View style={styles.collapsibleContainer}>
      <TouchableOpacity style={styles.touchableContainer} onPress={toggleToday}>
      <Text style={styles.collapsibleTitle}>Today</Text>
      <Text style={styles.arrow}>{todayArrow}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={todayCollapsed} >
        <TaskList filter="Due Today" /> 
      </Collapsible>
      </View>

      <View style={styles.collapsibleContainer}>
      <TouchableOpacity style={styles.touchableContainer} onPress={toggleCompleted}>
      <Text style={styles.collapsibleTitle}>Completed</Text>
      <Text style={styles.arrow}>{completedArrow}</Text>
      </TouchableOpacity>
      <Collapsible collapsed={completedCollapsed} >
        <TaskList filter="Completed" /> 
      </Collapsible>
      </View>

      <AddTaskButton />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary350,
  },
  collapsibleContainer: {
    borderBottomWidth: 1, 
    borderColor: Colors.accent800,
    },
  arrow: {
    color: Colors.accent800,
  },
  collapsibleTitle: {
    fontSize: 18, 
    fontWeight: 'bold', 
    color: Colors.accent800,
    paddingTop: 10, 
    paddingBottom: 5, 
  },
  touchableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },



});

export default TodoLists;
