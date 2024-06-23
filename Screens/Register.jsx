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
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

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
              fontWeight: "bold",
              color: "#E4D4C8",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            Register your Account
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={styles.email}>
            <Ionicons
              name="person-sharp"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Enter Your Name"
              style={{
                marginVertical: 15,
                width: 250,
                fontSize: name ? 16 : 16,
              }}
            ></TextInput>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.email}>
            <MaterialIcons
              name="email"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter Your Email"
              style={{
                marginVertical: 15,
                width: 250,
                fontSize: email ? 16 : 16,
              }}
            ></TextInput>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.email}>
            <FontAwesome
              name="lock"
              size={24}
              color="black"
              style={{ marginLeft: 15 }}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Enter Your Password"
              style={{
                marginVertical: 15,
                width: 250,
                fontSize: password ? 16 : 16,
              }}
            ></TextInput>
          </View>
        </View>

        <View
          style={{
            marginTop: 15,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#FFFAE5" }}>Keep me Logged in</Text>
          <Text style={{ color: "#F1E2AD", fontWeight: "300" }}>
            Forgot Password?
          </Text>
        </View>
        <View style={{ marginTop: 70 }} />
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginTop: 10 }}
      >
        <Text style={{ color: "#FAF7F4", textAlign: "center", fontSize: 16 }}>
          Already have an account? SignIn
        </Text>
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
    marginTop: 70,
    width: 200,
    height: 150,
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