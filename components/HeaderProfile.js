import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const HeaderProfile = () => {
  return (
    <View style={styles.profileWrapper}>
      <View>
        <Text style={styles.dataText}>April, 07,2021</Text>
        <Text style={styles.nameTitle}>Athena</Text>
      </View>
      {/* <View style={styles.imageWrapper}> */}
      <Image
        style={styles.image}
        source={require("../assets/images/profile-dog.png")}
      />
      {/* </View> */}
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  profileWrapper: {
    marginVertical: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderColor: "red",
    // borderWidth: 1,
    width: "90%",
  },
  dataText: {
    fontSize: 12,
  },
  nameTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  imageWrapper: {},
  image: {
    resizeMode: "contain",
    height: 61,
    width: 58,
  },
});
