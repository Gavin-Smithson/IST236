import {StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function Title(props){
    return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
      fontSize: 40,
      textAlign: "center",
      color: "#FFFFFF",
      fontFamily: "MinecraftBold",
      marginVertical: 10,
    },
  });
  