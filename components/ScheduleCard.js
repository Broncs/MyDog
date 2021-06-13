import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import Colors from "../constants/colors";

const ScheduleCard = ({ day, month, desc }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.dataContainer}>
        <Text style={styles.dataNumber}>{day}</Text>
      </View>
      <Text style={styles.dataText}>{month}</Text>
      <Text style={styles.descText}>{desc}</Text>
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
    fontWeight: "bold",
  },
  dataText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 2,
    marginVertical: 4,
  },
  descText: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: 1.4,
  },
});
