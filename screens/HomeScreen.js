import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderProfile from "../components/HeaderProfile";
import Status from "../components/Status";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <HeaderProfile />
      <Status />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  headerWrapper: {},
});
