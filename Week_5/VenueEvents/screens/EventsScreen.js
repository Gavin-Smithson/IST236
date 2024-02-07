import { View, StyleSheet, Text, FlatList } from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import EventItem from "../components/EventItems";

function EventScreen(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  const [eventItems, setEventItems] = useState([
    {
      name: "American Floyd - The Ultimate Pink Floyd Tribute Experience",
      image: require("../assets/images/americanfloyd.jpg"),
      date: "01/13/2024",
      id: 1,
    },
    {
      name: "Badfish - A Tribute To Sublime",
      image: require("../assets/images/badfish.jpg"),
      date: "01/14/2024",
      id: 2,
    },
    {
      name: "Tell Me Lies - The Fleetwood Mac Experience",
      image: require("../assets/image/tellmelies.jpg"),
      date: "01/27/2024",
      id: 3,
    },
    {
      name: "Blackberry Smoke: Be Right Here Tour",
      image: require("../assets/image/blackberry.jpg"),
      date: "02/17/2024",
      id: 4,
    },
    {
      name: "Electric Avenue - The 80's MTV Experience",
      image: require("../assets/image/eletric.jpg"),
      date: "02/23/2024",
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
        <Title>Event</Title>
      </View>

      <View>
        <FlatList 
        data = {eventItems}

        keyExtractor={(item) => item.id}
        alwaysBounceVerticle={false}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData) => {
            return (
                <EventItem
                    name={itemData.item.name}
                    image={itemData.item.image}
                    date={itemData.item.date}
                    />
            )
        }}
         />
      </View>

      <View style={styles.buttonContainer}></View>
    </View>
  );
}

export default EventScreen;

const styles = StyleSheet.create({});
