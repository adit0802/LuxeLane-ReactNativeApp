import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  onFocus,
  radius,
  width = "100%",
  keyboardType,
  maxLength,
}) => {
  return (
    <View style={{ width: width }}>
      <TextInput
        placeholder={placeholder}
        onChangeText={setValue}
        value={value}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        onFocus={onFocus}
        borderRadius={radius}
        maxLength={maxLength}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  CustomInput: {
    height: 40,
    marginBottom: 10,
    marginTop: 10,
    width: "84%",
    padding: 5,
    elevation: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  input: {
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    fontSize: 16,
  },
});
