import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

const BodyText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default BodyText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 10,
    color: Colors.secondary,
  },
});
