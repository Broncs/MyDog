import React, { useCallback } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import ScheduleCard from "../components/ScheduleCard";
import SubHeader from "../components/SubHeader";
import * as RootNavigation from "../RootNavigation";

const ScheduleScreen = ({ hideBottomTab }) => {
  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      hideBottomTab();
    }, [])
  );

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
          RootNavigation.navigate("Home");
        }}
      >
        <Image
          style={{ tintColor: "white" }}
          source={require("../assets/icons/home-nav.png")}
        />
      </TouchableOpacity>

      <View style={styles.bottomContainer}>
        <View style={styles.dogImageWrapper}>
          <Image
            style={styles.dogImage}
            source={require("../assets/images/main-dog.png")}
          />
        </View>

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
    flex: 1,
    width: "100%",
    position: "relative",
  },
  dogImageWrapper: {
    alignSelf: "flex-end",
    justifyContent: "space-around",
  },
  rectangleImg: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,

    resizeMode: "stretch",
    width: "100%",
    zIndex: -1,
  },
  dogImage: {
    resizeMode: "contain",
    maxHeight: 350,
  },
  iconWrapper: {
    position: "absolute",
    left: 10,
    bottom: 10,
    zIndex: 5,
  },
});
