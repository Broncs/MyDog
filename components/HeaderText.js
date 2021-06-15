import React from "react";
import { StyleSheet, Text } from "react-native";

const HeaderText = (props) => {
  return (
    <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto_700Bold",
    fontSize: 25,
  },
});
