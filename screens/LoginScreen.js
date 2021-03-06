import React, { useCallback, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";
import Header from "../components/Header";

const LoginScreen = ({ navigation, hideBottomTab }) => {
  const [borderColor, setBorderColor] = useState({
    email: "#C5C5C5",
    password: "#C5C5C5",
  });

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused

      hideBottomTab();
    }, [])
  );

  const onFocus = (key) => {
    setBorderColor({
      ...borderColor,
      [key]: borderColor[key] === "#C5C5C5" ? Colors.primary : "#C5C5C5",
    });
  };

  return (
    <View style={styles.screen}>
      <Header title="myDog" />
      <View style={styles.inputContainer}>
        <Input
          onFocus={() => onFocus("email")}
          onBlur={() => onFocus("email")}
          style={{ borderBottomColor: borderColor.email }}
          imgColor={borderColor}
          placeholder="Username or e-mail"
          paw
          autoCorrect={false}
        />
        <Input
          onFocus={() => onFocus("password")}
          onBlur={() => onFocus("password")}
          style={{ borderBottomColor: borderColor.password }}
          imgColor={borderColor}
          placeholder="Password"
          autoCorrect={false}
        />

        <View style={styles.buttonContainer}>
          <MainButton
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            Log In
          </MainButton>
          <Text style={styles.signUp}>
            Don't have an account yet ?{" "}
            <Text style={styles.innerText}>Sign up!</Text>
          </Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.dogImage}
          source={require("../assets/images/main-dog.png")}
        />
        <Image
          style={styles.waveImage}
          source={require("../assets/images/wave-mobile.png")}
        />
      </View>

      <Image
        style={styles.pawPrintImg1}
        source={require("../assets/icons/pawprint-orange.png")}
      />
      <Image
        style={styles.pawPrintImg2}
        source={require("../assets/icons/pawprint-orange.png")}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    marginTop: 70,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  signUp: {
    marginTop: 19,
    fontSize: 10,
    fontFamily: "Roboto_700Bold",
  },
  innerText: {
    color: Colors.primary,
  },
  imageContainer: {
    alignItems: "center",
    position: "relative",
  },
  dogImage: {
    resizeMode: "contain",
  },
  waveImage: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "stretch",
    width: "100%",
    zIndex: -1,
  },

  pawPrintImg1: {
    position: "absolute",
    top: 350,
    left: 20,
  },
  pawPrintImg2: {
    position: "absolute",
    top: "70%",
    right: 20,
  },
});
