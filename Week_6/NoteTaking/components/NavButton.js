import { Pressable, View, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";



function NavButton(props){
    return(
        <Pressable
        android_ripple={{color: "grey"}}
        onPress={props.onPress}
        style={({ pressed }) => pressed && styles.pressedItem}
        >
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
        height: 75,
        width: 150,
        margin: 8,
        borderRadius: 6,
    },
    text: {
        padding: 8,
        fontSize: 25,
        textAlign: "center",
        color: Colors.primary500,
        fontFamily: "paperNoteBold"
    },
    pressedItem: {
        opacity: 0.8,
    }
})


    
