import { View, StyleSheet, ImageBackground, ScrollView, Pressable, Platform, Text, Modal, Button, useWindowDimensions, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import Title from "../components/Title";
import WheelPicker from "react-native-wheely";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";




function HomeScreen() {
  //constants
  // sets the insets, keeping everything inside the bounds of the screen
  const insets = useSafeAreaInsets();

  //sets states for checkin + showcheckin
  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  //checkinpicker functions (show + hide)
  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  function hideCheckInPicker() {
    setShowCheckIn(false);
  }


  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckInPicker(true);
    }
    setCheckIn(currentDate);
  }

// sets state for checkout + showcheckout
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  //checkoutpicker functions for show and hide
  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckOutPicker(true);
    }
    setCheckOut(currentDate);
  }

  //guest constants
    //controls how many guest will be on the scroll option
  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [numGuests, setNumGuests] = useState(0);
  const [showNumGuests, setShowNumGuests] = useState(false);

  //functions for the guest picker
  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }

  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }
    //sets the number of guests
  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  //campsite constants
    //controls how many campsites on the scroll option
  const campsiteCounts = [1, 2, 3, 4, 5];
  const [numCampsites, setNumCampsites] = useState(0);
  const [showNumCampsites, setShowNumCampsites] = useState(false);

  //campsite functions
  function showNumCampsitesPicker() {
    setShowNumCampsites(true);
  }

  function hideNumCampsitesPicker() {
    setShowNumCampsites(false);
  }
  
  //sets the number of campsites
  function onChangeNumCampsites(index) {
    setNumCampsites(index);
  }

  const [results, setResults] = useState("");

  //function for when the reserve button is hit, to display the results
  function onReserveHandler() {
    let res = `Check In:\t\t${checkIn.toDateString()}\n`;
    res = res + `Check Out:\t\t${checkOut.toDateString()}\n`;
    res = res + `Number of Guests:\t\t${guestCounts[numGuests]}\n`;
    res = res + `Number of Campsites:\t\t${campsiteCounts[numCampsites]}\n`;
    setResults(res);
  }

  //makes font + screen dynamic between devices/orientations
  const { width, height } = useWindowDimensions();

  const dateLabelFlex = {
    fontSize: width * 0.07,
  };

  const dateTextFlex = {
    fontSize: width * 0.04,
  };

  return (
    //set the background as an image
    <ImageBackground
      source={require("../assets/images/campbackground.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
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
        <ScrollView style={styles.scrollContainer}>
          {/* Title of Campsite */}
          <View style={styles.titleContainer}>
            <Title>Camper's Aid</Title>
          </View>

          <View style={styles.rowContainer}>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In!</Text>
              <Pressable onPress={showCheckInPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out!</Text>
              <Pressable onPress={showCheckOutPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>
          </View>

        {/* checks to see if the device is ios or android to determine which datetimepicker will show */}
          <View>
            {showCheckIn && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckInAndroid"
                value={checkIn}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckIn}
              />
            )}
            {showCheckIn && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckInIOS"
                      value={checkIn}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckIn}
                    />
                    <Button title="Confirm" onPress={hideCheckInPicker} />
                  </View>
                </View>
              </Modal>
            )}

            {showCheckOut && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckOutAndroid"
                value={checkOut}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckOut}
              />
            )}
            {showCheckOut && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckOutIOS"
                      value={checkOut}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckOut}
                    />
                    <Button title="Confirm" onPress={hideCheckOutPicker} />
                  </View>
                </View>
              </Modal>
            )}
          </View>

          <View style={styles.rowContainer}>
            <Text style={[styles.infoLabel, dateLabelFlex]}>
              Number of Guests?
            </Text>
            <Pressable onPress={showNumGuestsPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {guestCounts[numGuests]}
                </Text>
              </View>
            </Pressable>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumGuests}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Guests!
                  </Text>
                  <WheelPicker
                    selectedIndex={numGuests}
                    options={guestCounts}
                    onChange={onChangeNumGuests}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumGuestsPicker} />
                </View>
              </View>
            </Modal>
          </View>

          <View style={styles.rowContainer}>
            <Text style={[styles.infoLabel, dateLabelFlex]}>
              Number of Campsites?
            </Text>
            <Pressable onPress={showNumCampsitesPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {campsiteCounts[numCampsites]}
                </Text>
              </View>
            </Pressable>

            <Modal
              animationType="slide"
              transparent={true}
              visible={showNumCampsites}
              supportedOrientations={["portrait", "landscape"]}
            >
              <View style={styles.centeredModalView}>
                <View style={styles.modalView}>
                  <Text style={[styles.dateText, dateTextFlex]}>
                    Enter Number of Campsites!
                  </Text>
                  <WheelPicker
                    selectedIndex={numCampsites}
                    options={campsiteCounts}
                    onChange={onChangeNumCampsites}
                    containerStyle={{ width: 200 }}
                  />
                  <Button title="Confirm" onPress={hideNumCampsitesPicker} />
                </View>
              </View>
            </Modal>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton onPress={onReserveHandler}>Reserve Now</NavButton>
          </View>

          <View style={styles.resultsContainer}>
            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const windowWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    backgroundImage: {
      opacity: 0.55,
    },
    titleContainer: {
      padding: 7,
      marginVertical: 20,
      marginHorizontal: 20,
      borderWidth: 10,
      borderRadius: 9,
      borderColor: Colors.accent500,
      backgroundColor: Colors.primary300o5,
    },
    scrollContainer: {
      flex: 1,
      width: 3000,
      maxWidth: "95%",
    },
    rowContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      paddingBottom: 20,
      marginBottom: 20,
    },
    dateContainer: {
      backgroundColor: Colors.primary300o5,
      padding: 10,
    },
    dateLabel: {
      fontSize: 125,
      color: Colors.accent500,
      fontFamily: "CampBold",
      textShadowColor: "white",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    infoLabel: {
      fontSize: 100,
      padding: 5,
      backgroundColor: Colors.primary300o5,
      color: Colors.accent500,
      fontFamily: "CampBold",
      textShadowColor: "white",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    dateText: {
      color: Colors.primary800,
      fontSize: 20,
      fontWeight: "bold",
    },
    centeredModalView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: Colors.title300,
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "white",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonContainer: {
      alignItems: "center",
    },
    results: {
      backgroundColor: Colors.primary300o5,
      paddingTop: 20,
      textAlign: "center",
      color: Colors.accent500,
      fontFamily: "CampBold",
      textShadowColor: "white",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 1,
    },
  });
  