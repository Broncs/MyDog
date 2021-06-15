import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import HeaderText from "./HeaderText";

const SubHeader = (props) => {
  return (
    <View style={{ ...styles.wrapper, ...props.style }}>
      <Image
        style={styles.image}
        source={require("../assets/icons/pawprint-orange.png")}
      />
      <HeaderText style={styles.text}>{props.title}</HeaderText>
    </View>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    margin: 25,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  image: {
    width: 19,
    height: 19,
  },
  text: {
    marginHorizontal: 13,
  },
});
