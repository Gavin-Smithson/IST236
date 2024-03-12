import { useEffect, useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { STATES } from "../data/dummy-data";
import { CAMPGROUNDS } from "../data/dummy-data";
import CampgroundItem from "../components/CampgroundItem";

function CampgroundsOverviewScreen(props) {

    const stateId = props.route.params.stateId;

    useLayoutEffect(() => {
        const state = STATES.find((state) => state.id === stateId);
        props.navigation.setOptions({
            title: state ? state.name : null
        });
    }, [stateId, props.navigation]);

    const displayedCampgrounds = CAMPGROUNDS.filter(
        (campgroundItem) => {
            return campgroundItem.stateId === stateId;
        });

    function renderCampgroundItem(itemData) {
        const campgroundItemProps = {
            name: itemData.item.name,
            numSites: itemData.item.numSites,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            imageUrl: itemData.item.imageUrl,
            listIndex: itemData.index,
        }
        return <CampgroundItem {...campgroundItemProps}/>
    }
        
    return (
        <View style = {styles.container}>
            <FlatList 
                data = {displayedCampgrounds}
                keyExtractor={(item) => item.id}
                renderItem={renderCampgroundItem} 
            />
        </View>
    );
}

export default CampgroundsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
});