import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "expo-vector-icons";

import Screen from "./Screen";
import colors from "../config/colors";

export default function AppTextInput({
  iconName,
  radious = 25,
  size = 20,
  ...otherProps
}) {
  return (
    <View
      style={[styles.container, { borderRadius: radious, marginVertical: 20 }]}
    >
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={size}
          color={colors.medium}
        ></MaterialCommunityIcons>
      )}
      <TextInput
        style={[styles.textInput, { fontSize: size }]}
        {...otherProps}
      ></TextInput>
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
    width: "100%",
    marginLeft: 10,
    color: colors.medium,
  },
});
