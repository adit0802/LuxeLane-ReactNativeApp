import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function CustomInputField() {
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validatInput = (value) => {
    setText(value);
    setIsValid(value.trim().length > 0);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, !isValid && styles.invalidInput]}
        placeholder="Enter Text"
        value={text}
        onChangeText={validatInput}
      />
      {!isValid && <Text>this field cannot be empty</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  invalidInput: {},
});
