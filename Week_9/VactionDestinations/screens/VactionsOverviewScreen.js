import { useEffect, useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { COUNTRY } from "../data/dummy-data";
import { VACATION } from "../data/dummy-data";
import VacationItem from "../components/VacationItem";

function VacationsOverviewScreen(props) {

    const countryId = props.route.params.countryId;

    useLayoutEffect(() => {
        const country = COUNTRY.find((country) => country.id === countryId);
        props.navigation.setOptions({
            title: country ? country.name : null
        });
    }, [countryId, props.navigation]);

    const displayedVacations = VACATION.filter(
        (vacationItem) => {
            return vacationItem.countryId === countryId;
        });

    function renderVacationItem(itemData) {
        const vacationItemProps = {
            name: itemData.item.name,
            averagePrice: itemData.item.averagePrice,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            imageUrl: itemData.item.imageUrl,
            desc: itemData.item.desc,
            listIndex: itemData.index,
        }
        return <VacationItem {...vacationItemProps}/>
    }
        
    return (
        <View style = {styles.container}>
            <FlatList 
                data = {displayedVacations}
                keyExtractor={(item) => item.id}
                renderItem={renderVacationItem} 
            />
        </View>
    );
}

export default VacationsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
});