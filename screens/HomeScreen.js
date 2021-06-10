import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import Card from "../components/Card";
import HeaderProfile from "../components/HeaderProfile";
import Status from "../components/Status";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <HeaderProfile />
      <Status />
      <View style={styles.cardWrapper}>
        <Card text="Medical record" />
        <Card
          text="Medical record"
          iconPath={require("../assets/icons/schedule-icon.png")}
        />
      </View>
      <View style={styles.cardWrapper}>
        <Card
          text="Medical record"
          iconPath={require("../assets/icons/pawprint.png")}
          style={styles.card}
        />
        <Card
          text="Medical record"
          iconPath={require("../assets/icons/vaccine-icon.png")}
          style={styles.card}
        />
      </View>
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
