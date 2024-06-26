import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UserProfileCard = ({ Icon, name, email }) => {
  return (
    <View style={styles.Container}>
      <View style={styles.avatarContainer}>
        <Icon name="person" size={75} />
      </View>
      {/* <View style={styles.infoContainer}>
        <Text style={styles.usernameText}>{name}</Text>
        <Text style={styles.secondaryText}>{email}</Text>
      </View> */}
    </View>
  );
};

export default UserProfileCard;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  avatarContainer: {
    display: "flex",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 10,
  },
  infoContainer: {
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: 10,
  },
  usernameText: {
    fontWeight: "bold",
    fontSize: 25,
  },
  secondaryText: {
    fontWeight: "bold",
    fontSize: 12,
  },
});
