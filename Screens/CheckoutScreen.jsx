import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { CartContext } from "../Components/CartContext";

export default function CheckoutScreen() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleGoToPayment = () => {
    Alert.alert(
      "Proceed to Payment",
      "This will take you to the payment screen."
    );
    // Navigation to payment screen logic goes here
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.infoContainer}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>$ {item.price}</Text>
              <Text style={styles.productQuantity}>
                Quantity: {item.quantity}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Text style={styles.totalPrice}>
          Total Price: ₹ {totalPrice.toFixed(2)}
        </Text>
        {/* <Button title="Go to Payment" onPress={handleGoToPayment} /> */}
        <TouchableOpacity style={styles.btn} onPress={handleGoToPayment}>
          <Text style={{ fontWeight: "bold" }}>Go to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  card: {
    flexDirection: "row",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  btn: {
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0B49F",
    flexDirection: "row",
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  productPrice: {
    fontSize: 19,
    marginTop: 8,
    fontWeight: "600",
  },
  productQuantity: {
    fontSize: 16,
    marginTop: 8,
  },
  footer: {
    marginBottom: 5,
    padding: 5,
    borderTopWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    flexDirection: "row",
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 50,
  },
});
