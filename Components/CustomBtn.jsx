import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomBtn = ({
  btnKind = "default",
  variant = "primary",
  size = "lg",
  title = "custom button",
  iconName,
}) => {
  const btnStyles = [
    styles.button,
    styles[btnKind],
    styles[variant],
    styles[size],
  ];

  const handlePress = () => {
    Alert.alert("Button Pressed", `You pressed the ${title} button`);
  };

  return (
    <TouchableOpacity style={btnStyles} onPress={handlePress}>
      <View style={styles.iconContainer}>
        {iconName && (
          <Icon
            name={iconName}
            size={20}
            color={styles[`${variant}Text`].color} // Access color directly
          />
        )}
        <Text style={[styles.text, styles[`${variant}Text`]]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginVertical: 5,
  },
  rounded: {
    borderRadius: 50,
  },
  outlined: {
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  default: {
    backgroundColor: "gray",
  },
  primary: {
    backgroundColor: "blue",
  },
  secondary: {
    backgroundColor: "green",
  },
  danger: {
    backgroundColor: "red",
  },
  success: {
    backgroundColor: "limegreen",
  },
  warning: {
    backgroundColor: "orange",
  },
  info: {
    backgroundColor: "dodgerblue",
  },
  facebook: {
    backgroundColor: "#3b5998",
  },
  sm: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  md: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  lg: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  primaryText: {
    color: "white",
  },
  secondaryText: {
    color: "white",
  },
  dangerText: {
    color: "white",
  },
  successText: {
    color: "white",
  },
  warningText: {
    color: "white",
  },
  infoText: {
    color: "white",
  },
  facebookText: {
    color: "white",
  },
  outlinedText: {
    color: "black",
  },
  text: {
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomBtn;
