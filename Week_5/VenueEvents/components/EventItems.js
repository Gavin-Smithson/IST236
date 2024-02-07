import { View, StyleSheet } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";


function EventItem(props){
    return(
    <View style={styles.itemContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.name}</Text>
        </View>
        <View style={styles.imageContainer}>
            <Text style={styles.image}>{props.title}</Text>
        </View>
        <View style={styles.dateContainer}> 
            <Text style={styles.date}>{props.date}</Text>
        </View>
    </View>
    
    )
}

export default EventItem;


styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20,
    },
    titleContainer: {
        backgroundColor: Colors.primary500,
        borderWidth: 3,
        borderRadius: 1,
    }
})