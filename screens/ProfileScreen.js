import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import SubHeader from "../components/SubHeader";
import Status from "../components/Status";
import Info from "../components/Info";
const ProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <SubHeader title="Detailed Information" />

      <View style={styles.imgWrapper}>
        <Image source={require("../assets/images/profile-dog.png")} />
      </View>
      <Status style={{ marginBottom: 16 }} />

      <Info />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  imgWrapper: {
    marginBottom: 15,
  },
});
