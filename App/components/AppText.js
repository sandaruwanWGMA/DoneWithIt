import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function AppText({children, style}) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "black",
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
