import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "expo-vector-icons";

import Screen from "./Screen";
import colors from "../config/colors";

export default function AppTextInput({
  iconName,
  size = 20,
  placeholder,
  keyboardType,
  onChangeText,
}) {
  return (
    <View style={styles.container}>
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={size}
          color={colors.medium}
        ></MaterialCommunityIcons>
      )}
      <TextInput
        style={[styles.textInput, { fontSize: size }]}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      >
        {placeholder}
      </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  textInput: {
    marginLeft: 10,
    color: colors.medium,
  },
});
