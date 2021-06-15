import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";
import BodyText from "./BodyText";

const Card = ({ text, iconPath, style, onPress }) => {
  const [firstText, secondText] = text.split(" ");

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ ...styles.wrapper, ...style }}>
        <Image
          style={styles.image}
          source={
            iconPath ? iconPath : require("../assets/icons/medicine-icon.png")
          }
        />
        <View style={styles.textWrapper}>
          <BodyText style={styles.text}>{firstText}</BodyText>
          <BodyText style={styles.text}>{secondText}</BodyText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: 145,
    width: 140,

    borderRadius: 10,
  },
  image: {
    marginBottom: 7,
  },
  textWrapper: {
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
