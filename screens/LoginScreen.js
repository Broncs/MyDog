import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";

const LoginScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <Input placeholder="Username or e-mail" paw autoCorrect={false} />
        <Input placeholder="Password" autoCorrect={false} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 75,
  },
});
