import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton.js";
import Title from "../components/Title.js";
import Colors from "../constants/colors.js";
import { LinearGradient } from "expo-linear-gradient";

function OrderScreen(props) {
  // Set Safe Area Screen Bounderies
  const insets = useSafeAreaInsets();

  return (
    // Background with a linear gradient
    <LinearGradient
      colors={[Colors.primary800, "rgb(53, 54, 52)", "rgb(148, 150, 148).85)"]}
      style={styles.rootContainer}
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
          <Title>Order Details</Title>
        </View>

        {/* Subtitle section */}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>See details below</Text>
        </View>

        {/* Services section */}
        <View style={styles.servicesContainer}>
          <Text style={styles.service}>Repair Time Estimate:</Text>
          {/* Displays repair time estimate */}
          <Text style={styles.subService}>{props.repairTime}</Text>
          <Text style={styles.service}>Services Provided:</Text>
          {/* Maps through services and displays each as a sub-service if it's selected */}
          {props.services.map((item) => {
            if (item.value) {
              return (
                <Text key={item.id} style={styles.subService}>
                  {item.name}
                </Text>
              );
            }
          })}
          <Text style={styles.service}>Subscriptions Provided:</Text>
          {/* Conditionally renders newsletter subscription if selected */}
          <Text style={styles.subService}>
            {props.newsletter ? "Newsletter" : ""}
          </Text>
          {/* Conditionally renders rental membership if selected */}
          <Text style={styles.subService}>
            {props.rentalMembership ? "Rental Membership" : ""}
          </Text>
        </View>

        {/* Pricing section */}
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>
            Subtotal: ${props.price.toFixed(2)}
          </Text>
          <Text style={styles.subTitle}>
            Sales Tax: ${(props.price * 0.06).toFixed(2)}
          </Text>
          <Text style={styles.subTitle}>
            Total: ${(props.price + props.price * 0.06).toFixed(2)}
          </Text>
        </View>

        {/* Navigation button to go to the next page */}
        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Go Home</NavButton>
        </View>
      </View>
    </LinearGradient>
  );
}

export default OrderScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: "100%",
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  titleContainer: {
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 10, 
    backgroundColor: "#F2F2F2", 
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center', 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 24,
    color: "#ffffff", 
    fontFamily: "MinecraftBold", 
    textAlign: "center",
  },
  servicesContainer: {
    flex: 3,
    marginHorizontal: 20,
    paddingTop: 10,
  },
  service: {
    fontSize: 18,
    color: Colors.primary500, 
    fontFamily: "Minecraft",
    marginBottom: 10,
  },
  subService: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.accent500, 
    fontFamily: "Minecraft",
    marginTop: 5,
  },
  buttonContainer: {
    backgroundColor: Colors.primary500, 
    borderRadius: 25, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
