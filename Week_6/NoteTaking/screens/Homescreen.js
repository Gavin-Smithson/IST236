import { View, StyleSheet, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";



function HomeScreen(props){
    // Set Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();

    return (
        <View
        style={[styles.rootCotainer,
        {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }]}
        >
            <View style={styles.titleContainer}>
                <Title>Journal</Title>
            </View>
            <View style={styles.imageContainer}>
                <Image
                source={require("../assets/images/note-taking.jpg")}
                style={styles.image}
            />

            <View style={styles.navButtonContainer}>
                <NavButton onNext={props.onNext}>Go To Notes</NavButton>
            </View>
            </View>
        </View>
        
    )
}


export default HomeScreen;

const styles = StyleSheet.create({
    rootCotainer: {
        flex: 1,
        width: "90%",
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    imageContainer: {
        flex: 2,
        justifyContent: "center",
        borderWidth: 4,
        borderRadius: 55,
        borderColor: Colors.accent500
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: 55,
        borderColor: Colors.accent500
    },
    navButtonContainer: {
        flex: 2,
        justifyContent: "center",
        alignItem: "center",
    }

})