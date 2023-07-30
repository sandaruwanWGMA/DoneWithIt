import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  Platform,
  Image,
} from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

function WelcomeScreen() {
  return (
    <View style={styles.background}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        blurRadius={10}
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoRed}
            source={require("../assets/logo-red.png")}
          ></Image>
          <Text style={styles.tagLine}>Sell what you don't need</Text>
        </View>
        <View style={styles.details}>
          <AppButton color="primary" text="login" />
          <AppButton color="secondary" text="register" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  details: {
    width: "100%",
    position: "absolute",
    bottom: Platform.OS === "ios" ? 20 : 0,
  },
  logoContainer: {
    alignItems: "center",
    width: "100%",
    position: "absolute",
    top: Platform.OS === "ios" ? 80 : 70,
  },
  logoRed: {
    width: 100,
    height: 100,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
