import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

export default function LoginInput({
  input,
  onChangeText,
  onBlur,
  value,
  error,
}) {
  return (
    <View style={styles.inputView}>
      <Text style={styles.text}>{input}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        style={styles.textInput}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    marginBottom: 24,
  },
  text: {
    fontSize: 24,
  },
  textInput: {
    fontSize: 24,
    borderColor: "black",
    borderWidth: 1,
  },
});
