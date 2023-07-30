import { Platform, SafeAreaView, StyleSheet, Text } from "react-native";
import React from "react";

export default function AppText(props) {
  return <Text style={styles.text}>{props.title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 25,
    ...Platform.select({
      android: {
        fontFamily: "Roboto",
      },
      ios: {
        fontFamily: "Arial",
      },
    }),
  },
});
