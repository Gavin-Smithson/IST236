import { Pressable, View, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";



function NavButton(props){
    return(
        <Pressable
        android_ripple={{color: "grey"}}
        onPress={props.onPress}>
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}


export default NavButton;

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 300,
        borderColor: Colors.primary500,
        backgroundColor: Colors.accent500,
        width: 300,
        margin: 10
    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "squealer"
    }
})


    
