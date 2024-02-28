import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Switch,
  ImageBackground,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function HomeScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  return (
    // Setting up a background image for the whole screen
    <ImageBackground
      source={require("../assets/images/minecraft_bike.jpg")}
      resize="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
      {/* Main View container adjusted for safe area insets */}
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        {/* Title section */}
        <View style={styles.titleContainer}>
          <Title>Bicycle Repair</Title>
        </View>

        {/* Scrollable content container */}
        <ScrollView style={styles.scrollContainer}>
          {/* Repair time selection section */}
          <View style={styles.radioContainer}>
            <Text style={styles.radioHeader}>Repair Time:</Text>
            <RadioGroup
              radioButtons={props.repairTimeRadioButtons}
              onPress={props.onSetRepairTimeId}
              selectedId={props.repairTimeId}
              layout="row"
              containerStyle={styles.radioGroup}
              labelStyle={styles.radioGroupLabels}
            />
          </View>
          {/* Service types selection section */}
          <View style={styles.rowContainer}>
            <View style={styles.checkBoxContainer}>
              <Text style={styles.checkBoxHeader}>Service Types:</Text>
              <View style={styles.checkBoxSubContainer}>
                {props.services.map((item) => {
                  return (
                    <BouncyCheckbox
                      key={item.id}
                      text={item.name}
                      onPress={props.onSetServices.bind(this, item.id)}
                      textStyle={{
                        textDecorationLine: "none",
                        color: Colors.primary300,
                        fontFamily: "Minecraft",
                      }}
                      innerIconStyle={{
                        borderRadius: 0,
                        borderColor: Colors.primary300,
                      }}
                      iconStyle={{
                        borderRadius: 0,
                      }}
                      fillColor={Colors.primary300}
                      style={{
                        padding: 2,
                      }}
                    />
                  );
                })}
              </View>
            </View>
          </View>

          {/* Add-ons selection section */}
          <View style={styles.rowContainer}>
            {/* Newsletter subscription switch */}
            <View style={styles.addOnsContainer}>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Newsletter</Text>
                <Switch
                  onValueChange={props.onSetNewsletter}
                  value={props.newsletter}
                  thumbColor={
                    props.newsletter
                     ? Colors.primary300 
                     : Colors.accent500
                  }
                  trackColor={{
                    false: "white",
                    true: Colors.accent500,
                  }}
                />
              </View>
            </View>
            {/* Rental membership switch */}
            <View style={styles.addOnsContainer}>
              <View style={styles.addOnsSubContainer}>
                <Text style={styles.addOnsLabel}>Rental Membership</Text>
                <Switch
                  onValueChange={props.onSetRentalMembership}
                  value={props.rentalMembershipPrice}
                  thumbColor={
                    props.rentalMembership
                      ? Colors.primary300
                      : Colors.accent500
                  }
                  trackColor={{
                    false: "white",
                    true: Colors.accent500,
                  }}
                />
              </View>
            </View>
          </View>
          {/* Submit order button */}
          <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Submit Order</NavButton>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
  },
  titleContainer: {
    marginBottom: 14,
    borderWidth: 4,
    borderRadius: 10,
    borderColor: Colors.accent500,
    backgroundColor: Colors.primary300,
    paddingHorizontal: 30,
    paddingVertical: 5,
    alignContent: "center",
  },
  scrollContainer: {
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioHeader: {
    fontSize: 22,
    color: Colors.accent500,
    fontFamily: "Minecraft",
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontSize: 15,
    color: Colors.accent500,
    fontFamily: "Minecraft",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {},
  checkBoxHeader: {
    fontSize: 20,
    color: Colors.accent500,
    fontFamily: "Minecraft",
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  addOnsContainer: {
    justifyContent: "space-between",
  },
  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addOnsLabel: {
    color: Colors.accent500,
    fontSize: 20,
    fontFamily: "Minecraft",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  backgroundImage: {
    objectFit: "fill",
  },
});
