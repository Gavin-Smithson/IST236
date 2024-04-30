import {useState} from 'react';
import { Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import TaskList from '../components/TaskList'; 
import AddTaskButton from '../components/AddTaskButton'; 
import Colors from '../constants/colors';

function TodoLists() {
  return (
    <>
    <View style={styles.container}>
        <TaskList filter="Due Today" /> 
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
    fontFamily: 'GothamBold',
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
