import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import MedicalCard from "../components/MedicalCard";
import SubHeader from "../components/SubHeader";
import colors from "../constants/colors";

const MedicalScreen = () => {
  return (
    <View style={styles.screen}>
      <SubHeader title="Medical Records" style={styles.subHeader} />
      <MedicalCard vit="Vitamin D" qnt="1 teaspoon" period="every day" />
      <MedicalCard vit="Vitamin D" qnt="1 teaspoon" period="every day" />
      <MedicalCard vit="Vitamin D" qnt="1 teaspoon" period="every day" />
      <MedicalCard vit="Vitamin D" qnt="1 teaspoon" period="every day" />
      <View style={styles.footer}>
        <MainButton secondary style={styles.button}>
          Call a doctor
        </MainButton>
      </View>
    </View>
  );
};

export default MedicalScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  subHeader: {
    marginBottom: 50,
  },
  button: {},
  footer: {
    marginTop: "auto",
    height: 74,
    backgroundColor: colors.primary,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
