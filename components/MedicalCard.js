import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
import BodyText from "./BodyText";

const MedicalCard = ({ vit, qnt, period }) => {
  return (
    <View>
      <View style={styles.cardWrapper}>
        <Image source={require("../assets/icons/pill-icon.png")} />
        <BodyText style={styles.vitText}>{vit} </BodyText>
        <BodyText style={styles.subText}>
          {qnt}
          <BodyText style={styles.textSpan}> {period}</BodyText>
        </BodyText>
        <Ionicons name="ellipsis-vertical" size={18} color={Colors.primary} />
      </View>
    </View>
  );
};

export default MedicalCard;

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: "row",
    backgroundColor: Colors.lightGrey,
    borderRadius: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    height: 76,
    marginBottom: 35,
  },
  vitText: {
    fontSize: 15,
  },
  subText: {
    fontSize: 10,
    color: Colors.primary,
  },
});
