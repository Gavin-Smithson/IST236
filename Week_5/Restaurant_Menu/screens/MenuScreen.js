import { View, StyleSheet, Text, FlatList } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import MenuItem from "../components/MenuItem";
import Colors from "../constants/colors";

function MenuScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [eventItems, setMenuItems] = useState([
    {
      name: "Fajito Trio",
      image: require("../assets/images/Fajita_Trio.jpg"),
      price: "19.99",
      id: 1,
    },
    {
      name: "Double Old Timer",
      image: require("../assets/images/Double_OldTimer.jpg"),
      price: "13.99",
      id: 2,
    },
    {
      name: "Alex Burger",
      image: require("../assets/images/Alex_Burger.jpg"),
      price: "18.99",
      id: 3,
    },
    {
      name: "Full Ribs",
      image: require("../assets/images/Full_Ribs.jpg"),
      price: "25.99",
      id: 4,
    },
    {
      name: "Molten Lavacake",
      image: require("../assets/images/Molten_Lavacake.jpg"),
      price: "6.99",
      id: 5,
    },
  ]);

  return (
    <View
      style={[
        styles.rootcontainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingRight: insets.right,
          paddingLeft: insets.left,
        },
      ]}
    >
      <View>
        <Title>Menu</Title>
      </View>

      <View>
        <NavButton onPress={props.onNext} style={styles.buttonContainer}>Go Home</NavButton>
      </View>

      <View>
        <FlatList 
        data = {eventItems}

        keyExtractor={(item) => item.id}
        alwaysBounceVerticle={true}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData) => {
            return (
                <MenuItem
                    name={itemData.item.name}
                    image={itemData.item.image}
                    price={itemData.item.price}
                    />
            )
        }}
         />
      </View>

    </View>
  );
}

export default MenuScreen;

const styles = StyleSheet.create({
  rootcontainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#C1272D', 
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    flex: 4,
  },
  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380,
  },
  infoContainer: {
    flex: 3,
    justifyContent: "center",
    color: Colors.primary500,
  },
  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7,
    fontFamily: "Minecraft", 
  },
  buttonContainer: {
    backgroundColor: '#C1272D', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItem: {
    backgroundColor: '#F8F8F8', 
    borderBottomColor: '#C1272D', 
    borderBottomWidth: 1,
  },
  menuItemText: {
    color: '#333', 
    fontSize: 16,
  }
});

