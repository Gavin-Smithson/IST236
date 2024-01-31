import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, SafeAreaView, TextInput, Button, FlatList, Alert } from 'react-native';
import ItemInputModal from './modals/ItemInputModal';


export default function App() {
  const [shoppingItems, setShoppingItems] = useState([]);
  const [modalIsVisble, setModalIsVisble] = useState(false);

  const [currentID, setCurrentID] = useState(0);
  
  // Create modal screen handler functions
  function startAddItemHandler(){
    setModalIsVisble(true);
  }

  function endAddItemHandler(){
    setModalIsVisble(false);

  }



  function addItemHandler(enteredItemText){
    setShoppingItems((currentShoppingItems) => 
    [...currentShoppingItems,
    {text: enteredItemText, id: currentID},
    ]);

    setCurrentID(currentID =+ 1);
    endAddItemHandler();
  }

  function deleteItemHandler(id){
    Alert.alert("Delete Item",
    "Are you sure you want to delete")
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "confirm",
        styles: "default",
        onPress: () => {
          setShoppingItems((currentShoppingItems) => {
            return currentShoppingItems.filter((item) => item.id !=- id);
          });
        }
      }
    ]
  }
}

export default function App() {
  return (
    <>
    <SafeAreaView>
    <StatusBar></StatusBar>
    {/* Set List of Items Container */}
    <View>
      <FlatList 
      data={shoppingItems}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      renderItem={(itemData) => {
        return(<Item text={itemData.item.text} id={itemData.id.text} onDeleteItem={itemData.onDeleteItem.deleteItemHandler}></Item>);
      }}
      />
      
    </View>
    </SafeAreaView>
    <ItemInputModal onAddItem={addItemHandler} onCancel={endAddItemHandler} visible={modalIsVisble}/>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 7,
    backgroundColor: '#FFF',
    width: '90%',
    alignItems: 'center',

  },
  listText: {
    fontSize: 20,
    color: 'black',

  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e3d0ff',
    backgroundColor: "#e3d0ff",
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 12,
  },
  modalButtonContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  modalButton: {
    width: '30%',
    marginHorizontal: 20, 
  },
  addButtonContainer: {

  },
  addButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  pressedButton: {
    opacity: 0.8
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#5e08cc"
  },
  
});
