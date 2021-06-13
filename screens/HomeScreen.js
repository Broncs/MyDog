import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import Card from "../components/Card";
import HeaderProfile from "../components/HeaderProfile";
import Status from "../components/Status";
import Navigation from "../components/Navigation";
const HomeScreen = ({ navigation, hideBottomTab }) => {
  return (
    <View style={styles.screen}>
      <HeaderProfile />
      <Status />
      <View style={styles.cardWrapper}>
        <Card
          text="Medical record"
          onPress={() => navigation.navigate("Medical")}
        />
        <Card
          text="Schedule visits"
          iconPath={require("../assets/icons/schedule-icon.png")}
          onPress={() => {
            navigation.navigate("Schedule");
            hideBottomTab();
          }}
        />
      </View>
      <View style={styles.cardWrapper}>
        <Card
          text="Detailed information"
          iconPath={require("../assets/icons/pawprint.png")}
          onPress={() => navigation.navigate("Profile")}
          style={styles.card}
        />
        <Card
          text="Vaccination schedule"
          iconPath={require("../assets/icons/vaccine-icon.png")}
          style={styles.card}
        />
      </View>
      {/* <View style={styles.navWrapper}>
        <Navigation />
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  cardWrapper: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginBottom: 47,
  },
  card: {
    backgroundColor: Colors.secondary,
  },
});
