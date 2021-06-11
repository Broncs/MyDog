import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

const Info = () => {
  return (
    <View style={styles.infoWrapper}>
      <View style={styles.infoItem}>
        <Text style={styles.infoText}>Owner's Name</Text>
        <Text style={styles.infoTextOrange}>Luciano Gomes</Text>
      </View>

      <View style={styles.infoItem}>
        <Text style={styles.infoText}>Doctor's Name</Text>
        <Text style={styles.infoTextOrange}>Aline Kossfer</Text>
      </View>

      <View style={styles.infoItem}>
        <Text style={styles.infoText}>Address</Text>
        <Text style={styles.infoTextOrange}>
          Street 3, Planice{"\n"}walkers, Goiás{"\n"}Brazil - 75900000
        </Text>
      </View>

      <View style={styles.infoItem}>
        <Text style={styles.infoText}>Phone</Text>
        <Text style={styles.infoTextOrange}>+55 (64) 99999999</Text>
      </View>

      <View style={styles.infoItem}>
        <Text style={styles.infoText}>Email</Text>
        <Text style={styles.infoTextOrange}>pet@gomes.com.br</Text>
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
  },
  infoTextOrange: {
    color: Colors.primary,
    fontSize: 13,
    textAlign: "right",
  },
});
