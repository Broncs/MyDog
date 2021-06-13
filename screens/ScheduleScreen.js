import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ScheduleCard from "../components/ScheduleCard";
import SubHeader from "../components/SubHeader";
import * as RootNavigation from "../RootNavigation";

const ScheduleScreen = ({ showBottomTab }) => {
  return (
    <View style={styles.screen}>
      <SubHeader style={styles.subHeader} title="Schedule visits" />
      <View style={styles.cardWrapper}>
        <ScheduleCard day="10" month="APRIL" desc="Completed inspection" />
        <ScheduleCard day="10" month="APRIL" desc="Completed inspection" />
        <ScheduleCard day="10" month="APRIL" desc="Completed inspection" />
        <ScheduleCard day="10" month="APRIL" desc="Completed inspection" />
        <ScheduleCard day="10" month="APRIL" desc="Completed inspection" />
        <ScheduleCard day="10" month="APRIL" desc="Completed inspection" />
      </View>

      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => {
          showBottomTab();
          RootNavigation.navigate("Home");
        }}
      >
        <Image
          style={{ tintColor: "white" }}
          source={require("../assets/icons/home-nav.png")}
        />
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <Image
          style={styles.dogImage}
          source={require("../assets/images/main-dog.png")}
        />
        <Image
          style={styles.rectangleImg}
          source={require("../assets/images/Rectangle-mobile.png")}
        />
      </View>
    </View>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  cardWrapper: {
    width: "90%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  subHeader: {
    marginBottom: 50,
  },
  bottomContainer: {
    position: "relative",
    width: "100%",
    height: "40%",
  },
  rectangleImg: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 20,
    resizeMode: "stretch",
    width: "100%",
    zIndex: -1,
  },
  dogImage: {
    position: "absolute",
    right: 0,
    bottom: -20,
    resizeMode: "contain",
    width: "60%",
  },
  iconWrapper: {
    position: "absolute",
    left: 10,
    bottom: 10,
    zIndex: 5,
  },
});
