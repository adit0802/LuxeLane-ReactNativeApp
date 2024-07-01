import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../assets/luxe.png")}
          style={styles.logo}
        ></Image>
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 16,
              color: "#E4D4C8",
              marginTop: 50,
              marginBottom: 30,
              fontStyle: "italic",
            }}
          >
            ' Where Luxury Meets Distinction ,
          </Text>
        </View>
        <View style={{ marginTop: 70 }} />
      </KeyboardAvoidingView>
      <TouchableOpacity style={{ marginTop: 10 }}>
        <Text
          style={{
            color: "#FAF7F4",
            textAlign: "center",
            fontSize: 16,
            marginTop: 20,
            marginBottom: 10,
          }}
          // onPress={() => navigation.navigate("CustomInputField")}
        >
          Know More
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0B0909",
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginTop: 250,
    width: 300,
    height: 200,
  },
  email: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#E0D7C7",
    marginTop: 30,
    borderRadius: 5,
    height: 50,
  },
  button: {
    width: 180,
    backgroundColor: "#D0B49F",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize1: 16,
    fontWeight: "bold",
  },
});
