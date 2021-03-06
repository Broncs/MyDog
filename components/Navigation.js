import React, { useState } from "react";
import * as RootNavigation from "../RootNavigation";
import BodyText from "./BodyText";

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const Navigation = () => {
  const [active, setActive] = useState("home");

  return (
    <View style={styles.navWrapper}>
      <TouchableWithoutFeedback
        onPress={() => {
          setActive("home");
          RootNavigation.navigate("Home");
        }}
      >
        <View
          style={
            active === "home"
              ? { ...styles.navItem, ...styles.navItemActive }
              : styles.navItem
          }
        >
          <Image
            style={
              active === "home"
                ? { tintColor: "white" }
                : { tintColor: "#797979" }
            }
            source={require("../assets/icons/home-nav.png")}
          />
          <BodyText style={styles.navText}>
            {active === "home" && "Home"}
          </BodyText>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setActive("noti")}>
        <View
          style={
            active === "noti"
              ? { ...styles.navItem, ...styles.navItemActive }
              : styles.navItem
          }
        >
          <Image
            style={
              active === "noti"
                ? { tintColor: "white" }
                : { tintColor: "#797979" }
            }
            source={require("../assets/icons/bell-nav.png")}
          />
          <Text style={styles.navText}>{active === "noti" && "Notif"}</Text>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => setActive("settings")}>
        <View
          style={
            active === "settings"
              ? { ...styles.navItem, ...styles.navItemActive }
              : styles.navItem
          }
        >
          <Image
            style={
              active === "settings"
                ? { tintColor: "white" }
                : { tintColor: "#797979" }
            }
            source={require("../assets/icons/settings-nav.png")}
          />
          <Text style={styles.navText}>
            {active === "settings" && "Settings"}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  navWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",

    height: 42,
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
    paddingHorizontal: 12,

    borderRadius: 3,
  },
  navItemActive: {
    backgroundColor: "#797979",
  },
  navText: {
    marginLeft: 8,
    fontSize: 10,
    color: "white",
  },
});
