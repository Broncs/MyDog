import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HeaderProfile from "../components/HeaderProfile";
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <HeaderProfile />
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
