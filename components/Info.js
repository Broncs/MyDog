import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import BodyText from "./BodyText";

const Info = () => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.infoItem}>
        <BodyText style={styles.infoText}>Owner's Name</BodyText>
        <Text style={styles.infoTextOrange}>Luciano Gomes</Text>
      </View>

      <View style={styles.infoItem}>
        <BodyText style={styles.infoText}>Doctor's Name</BodyText>
        <Text style={styles.infoTextOrange}>Aline Kossfer</Text>
      </View>

      <View style={styles.infoItem}>
        <BodyText style={styles.infoText}>Address</BodyText>
        <BodyText style={styles.infoTextOrange}>
          Street 3, Planice{"\n"}walkers, Goiás{"\n"}Brazil - 75900000
        </BodyText>
      </View>

      <View style={styles.infoItem}>
        <BodyText style={styles.infoText}>Phone</BodyText>
        <BodyText style={styles.infoTextOrange}>+55 (64) 99999999</BodyText>
      </View>

      <View style={styles.infoItem}>
        <BodyText style={styles.infoText}>Email</BodyText>
        <BodyText style={styles.infoTextOrange}>pet@gomes.com.br</BodyText>
      </View>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  infoWrapper: {
    backgroundColor: Colors.lightGrey,
    width: "90%",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  infoText: {
    fontSize: 13,
    letterSpacing: 1,
  },
  infoTextOrange: {
    color: Colors.primary,
    fontSize: 13,
    textAlign: "right",
  },
});
