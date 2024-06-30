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
  Alert,
} from "react-native";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("http://192.168.29.108:8000/Register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration Successful",
          "You have successfully registered. Please check your email for verification link."
        );
        setName("");
        setPassword("");
        setEmail("");
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message ||
          "An error occurred during registration";
        Alert.alert("Registration Error", errorMessage);
        console.log("Registration Failed", error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require("../assets/luxe.png")} style={styles.logo} />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>Register your Account</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="person-sharp"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Enter Your Name"
              style={styles.input}
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
            <MaterialIcons
              name="email"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter Your Email"
              style={styles.input}
            />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
            <FontAwesome
              name="lock"
              size={24}
              color="black"
              style={styles.icon}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry
              placeholder="Enter Your Password"
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.extraOptions}>
          <Text style={styles.extraText}>Keep me Logged in</Text>
          <Text style={styles.extraText}>Forgot Password?</Text>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginTop: 10 }}
      >
        <Text style={styles.signInText}>Already have an account? SignIn</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E4D4C8",
    marginTop: 30,
    marginBottom: 30,
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#E0D7C7",
    marginTop: 30,
    borderRadius: 5,
    height: 50,
  },
  icon: {
    marginLeft: 15,
  },
  input: {
    marginVertical: 15,
    width: 250,
    fontSize: 16,
  },
  extraOptions: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  extraText: {
    color: "#FFFAE5",
  },
  button: {
    width: 180,
    backgroundColor: "#D0B49F",
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    marginTop: 70,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  signInText: {
    color: "#FAF7F4",

    textAlign: "center",
    fontSize: 16,
  },
});
