import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React from "react";
import AppText from "./AppText";

import colors from "../config/colors";

export default function AppButton(props) {
  return (
    <TouchableOpacity
          style={[styles.button, { backgroundColor: colors[props.color] }]}
          onPress={AppText}
    >
      <AppText title={props.text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 40,
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
