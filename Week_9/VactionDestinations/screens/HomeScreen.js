import { View, Text, FlatList } from "react-native";
import { COUNTRY } from "../data/dummy-data";
import StateGridTile from "../components/StateGridTile";

function HomeScreen(props) {

    function renderStateItem(itemData) {

        function pressHandler() {
            props.navigation.navigate("VactionOverviewScreen", {
                countryId: itemData.item.id,
            });
        }

        return (
            <StateGridTile
                name = {itemData.item.name}
                color = {itemData.item.color}
                onPress = {pressHandler}
            />   
        );
    }


    return (
        <View>
            <FlatList
                data={COUNTRY}
                keyExtractor={(item) => {
                    return item.id;
                }}
                renderItem = {renderStateItem}
                numColumns={2}
            />
        </View>
    );
}

export default HomeScreen;