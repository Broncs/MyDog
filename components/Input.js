import React, { useState } from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";

const Input = (props) => {
  const [enteredText, setEnteredText] = useState("");
  console.log(props.imgColor);
  return (
    <View style={styles.inputContainer}>
      <View
        style={
          props.paw
            ? { ...styles.imageContainer, borderColor: props.imgColor.email }
            : {
                ...styles.imageContainerLock,
                borderColor: props.imgColor.password,
              }
        }
      >
        <Image
          source={
            props.paw
              ? require("../assets/icons/paw-login.png")
              : require("../assets/icons/padlock-icon.png")
          }
        />
      </View>
      <TextInput
        style={
          enteredText.length === 0
            ? { ...styles.input, ...props.style, letterSpacing: 4.8 }
            : { ...styles.input, ...props.style, letterSpacing: 1.5 }
        }
        placeholder={props.placeholder}
        secureTextEntry={!props.paw}
        onChangeText={setEnteredText}
        value={enteredText}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 8,
  },
  input: {
    height: 25,
    borderBottomColor: "#C5C5C5",
    borderBottomWidth: 1,
    width: "70%",
    // letterSpacing: 4.8,

    color: "#7A7A7A",
    // marginLeft: 10,
  },
  imageContainer: {
    // Set border width.
    borderBottomWidth: 1,

    // Set border color.
    borderColor: "#C5C5C5",
    padding: 1.1,
    paddingRight: 5,
  },
  imageContainerLock: {
    // Set border width.
    borderBottomWidth: 1,
    // Set border color.
    borderColor: "#C5C5C5",
    padding: 4.5,
    paddingRight: 10,
  },
});
