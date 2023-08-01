import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import Screen from "./Screen";
import colors from "../config/colors";

export default function AppTextInput({ placeholder }) {
  return (
    <Screen>
      <TextInput style={styles.textInput}>{placeholder}</TextInput>
    </Screen>
  );
}

const styles = StyleSheet.create({
    textInput: {
      backgroundColor: "#f2f2f2"
  },
});
