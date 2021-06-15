import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import HeaderText from "./HeaderText";

import Colors from "../constants/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View
        style={
          props.secondary
            ? { ...styles.button, backgroundColor: "white" }
            : styles.button
        }
      >
        <HeaderText
          style={
            props.secondary
              ? { ...styles.buttonText, color: Colors.primary }
              : styles.buttonText
          }
        >
          {props.children}
        </HeaderText>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 7,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: 193,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
});
