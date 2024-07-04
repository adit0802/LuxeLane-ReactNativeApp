import React, { useState, useContext, useEffect } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { ProfileContext } from "../Components/ProfileContext";
import { Avatar } from "react-native-elements";
import ImagePickerExample from "../Components/ImagePickerExample";

export default function EditProfileScreen({ navigation }) {
  const { profile, setProfile } = useContext(ProfileContext);
  const [name, setName] = useState(profile.name);
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl);

  useEffect(() => {
    setAvatarUrl(profile.avatarUrl);
  }, [profile.avatarUrl]);

  const handleSave = () => {
    setProfile({ ...profile, name, avatarUrl });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          size="xlarge"
          source={{ uri: avatarUrl }}
          containerStyle={styles.avatar}
        />
        <ImagePickerExample image={avatarUrl} setImage={setAvatarUrl} />
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  header: {
    paddingVertical: 16,
    backgroundColor: "#6200EE",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 24,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#914110",
  },
  form: {
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
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
  button: {
    backgroundColor: "#EFCFA0",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});
