// CheckoutScreen.js
import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CartContext } from "../Components/CartContext";

export default function CheckoutScreen() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Checkout</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemPrice}>$ {item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.totalPrice}>
        Total Price: $ {totalPrice.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    marginBottom: 16,
  },
  itemTitle: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
  },
});
