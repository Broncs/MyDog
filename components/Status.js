import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Status = (props) => {
  return (
    <View style={{ ...styles.wrapper, ...props.style }}>
      <View style={styles.item}>
        <Text style={styles.itemText}>Rotweiller</Text>
        <Image source={require("../assets/icons/pawprint-orange.png")} />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemText}>35 kg</Text>
        <Image source={require("../assets/icons/weighing-machine-icon.png")} />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemText}>23.06.2020</Text>
        <Image source={require("../assets/icons/confetti-icon.png")} />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemText}>Female</Text>
        <Image source={require("../assets/icons/gender-icon.png")} />
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    height: 76,
    marginBottom: 35,
  },
  item: {
    alignItems: "center",
  },
  itemText: {
    fontSize: 10,
    marginBottom: 9,
  },
});
