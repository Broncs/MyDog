import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import BodyText from "./BodyText";
import HeaderText from "./HeaderText";

import Colors from "../constants/colors";

const ScheduleCard = ({ day, month, desc }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.dataContainer}>
        <HeaderText style={styles.dataNumber}>{day}</HeaderText>
      </View>
      <HeaderText style={styles.dataText}>{month}</HeaderText>
      <HeaderText style={styles.descText}>{desc}</HeaderText>
    </View>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
    width: 94,
    marginBottom: 34,
  },
  dataContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  dataNumber: {
    color: "white",
    fontSize: 25,
  },
  dataText: {
    color: "white",
    fontSize: 15,
    letterSpacing: 1.2,
    marginVertical: 4,
  },
  descText: {
    fontSize: 10,
    color: "white",
    textAlign: "center",

    letterSpacing: 1.2,
  },
});
