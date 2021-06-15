import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./RootNavigation";

import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import MedicalScreen from "./screens/MedicalScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ScheduleScreen from "./screens/ScheduleScreen";
import Navigation from "./components/Navigation";

const Stack = createStackNavigator();

export default function App() {
  const [tabVisible, setTabVisible] = useState(false);

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const showBottomTab = () => {
    setTabVisible(true);
  };

  const hideBottomTab = () => {
    setTabVisible(false);
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} hideBottomTab={hideBottomTab} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} showBottomTab={showBottomTab} />}
        </Stack.Screen>
        <Stack.Screen name="Medical" component={MedicalScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Schedule">
          {(props) => (
            <ScheduleScreen {...props} hideBottomTab={hideBottomTab} />
          )}
        </Stack.Screen>
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
