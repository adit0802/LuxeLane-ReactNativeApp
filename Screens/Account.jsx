import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileContext } from "../Components/ProfileContext";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function AccountScreen() {
  const { profile } = useContext(ProfileContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Avatar
          rounded
          size="large"
          source={{ uri: profile.avatarUrl }}
          containerStyle={styles.avatar}
        />
        <Text style={styles.name}>{profile.name}</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Account")}
        >
          <Icon name="account-circle" type="material" size={24} />
          <Text style={styles.menuItemText}>My Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("Wishlist")}
        >
          <Icon name="favorite" type="material" size={24} />
          <Text style={styles.menuItemText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="settings" type="material" size={24} />
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Icon name="help-outline" type="material" size={24} />
          <Text style={styles.menuItemText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("EditProfile")}
        >
          <Icon name="edit" type="material" size={24} />
          <Text style={styles.menuItemText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
          <Icon name="logout" type="material" size={24} />
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  avatar: {
    marginBottom: 16,
    width: 150,
    height: 150,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  menu: {
    marginTop: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuItemText: {
    marginLeft: 16,
    fontSize: 18,
  },
});
