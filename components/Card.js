import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";

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
          <Text style={styles.text}>{firstText}</Text>
          <Text style={styles.text}>{secondText}</Text>
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
    fontSize: 10,
    color: "white",
  },
});
