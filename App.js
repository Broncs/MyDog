import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import MedicalScreen from "./screens/MedicalScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import Navigation from "./components/Navigation";

const Stack = createStackNavigator();

export default function App() {
  const [tabVisible, setTabVisible] = useState(false);

  const showBottomTab = () => {
    setTabVisible(true);
  };

  const hideBottomTab = () => {
    setTabVisible(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} showBottomTab={showBottomTab} />}
        </Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Medical" component={MedicalScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
      </Stack.Navigator>

      {tabVisible ? (
        <View style={styles.navWrapper}>
          <Navigation />
        </View>
      ) : null}

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navWrapper: {
    width: "100%",
    alignItems: "center",
  },
});
