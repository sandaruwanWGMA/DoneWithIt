import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import Screen from "./Screen";

export default function Icon({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={iconColor}
      ></MaterialCommunityIcons>
    </View>
  );
}

const styles = StyleSheet.create({});
