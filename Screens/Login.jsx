import React, { useEffect, useState } from "react";
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
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");
        if (token) {
          navigation.replace("Main");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    checkLoginStatus();
  }, []);

  const navigation = useNavigation();

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://192.168.29.108:8000/Login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.replace("Main");
      })
      .catch((error) => {
        if (!email.includes("@")) {
          setErrorMessage("Invalid email address");
          return;
        }
        if (password.length < 6) {
          setErrorMessage("Password must be at least 6 characters long");
          return;
        }
        console.log(error);
      });
  };

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
            Login into your Account
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
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
                fontSize: email ? 16 : 16,
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
      <View>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </View>

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Register")}
        style={{ marginTop: 10 }}
      >
        <Text style={{ color: "#FAF7F4", textAlign: "center", fontSize: 16 }}>
          Don't have an account? SignUp
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
  error: {
    color: "red",
    marginBottom: 12,
  },
});
