import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <Image
        style={styles.image}
        source={require("../assets/icons/paw-logo.png")}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 22,
    alignItems: "center",
    justifyContent: "center",
    color: "#313131",
  },
  headerText: {
    fontSize: 40,
    // fontWeight: "bold",
    padding: 10,
    fontFamily: "Roboto_700Bold",
  },
  image: {
    width: 24,
    height: 23,
  },
});
