import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Input from "../components/Input";
import MainButton from "../components/MainButton";
import colors from "../constants/colors";
import Header from "../components/Header";

const LoginScreen = ({ navigation, showBottomTab }) => {
  return (
    <View style={styles.screen}>
      <Header title="myDog" />
      <View style={styles.inputContainer}>
        <Input placeholder="Username or e-mail" paw autoCorrect={false} />
        <Input placeholder="Password" autoCorrect={false} />
        <View style={styles.buttonContainer}>
          <MainButton
            onPress={() => {
              navigation.navigate("Home");
              showBottomTab();
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
    fontWeight: "bold",
  },
  innerText: {
    color: colors.primary,
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
});
