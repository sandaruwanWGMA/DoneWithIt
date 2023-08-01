import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React from "react";
import AppText from "./AppText";
import Constants from "expo-constants";

import colors from "../config/colors";

export default function AppButton(props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: props.bgColor,
          color: props.color,
          marginTop: Constants.statusBarHeight,
        },
      ]}
      onPress={props.onPress}
    >
      <AppText
        style={{ width: "100%", textAlign: "center" }}
        children={props.title}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 40,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
