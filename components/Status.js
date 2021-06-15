import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";
const Status = (props) => {
  return (
    <View style={{ ...styles.wrapper, ...props.style }}>
      <View style={styles.item}>
        <BodyText style={styles.itemText}>Rotweiller</BodyText>
        <Image source={require("../assets/icons/pawprint-orange.png")} />
      </View>

      <View style={styles.item}>
        <BodyText style={styles.itemText}>35 kg</BodyText>
        <Image source={require("../assets/icons/weighing-machine-icon.png")} />
      </View>

      <View style={styles.item}>
        <BodyText style={styles.itemText}>23.06.2020</BodyText>
        <Image source={require("../assets/icons/confetti-icon.png")} />
      </View>

      <View style={styles.item}>
        <BodyText style={styles.itemText}>Female</BodyText>
        <Image source={require("../assets/icons/gender-icon.png")} />
      </View>
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.lightGrey,
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
    marginBottom: 9,
  },
});
