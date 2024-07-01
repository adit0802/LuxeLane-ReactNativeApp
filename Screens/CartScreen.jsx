// CartScreen.js
import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CartContext } from "../Components/CartContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

export default function CartScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { cart, dispatch } = useContext(CartContext);

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const handleBuyNow = () => {
    navigation.navigate("Checkout");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Cart</Text>
        {cart.length === 0 ? (
          <Text style={styles.emptyText}>Oops! Your cart is empty</Text>
        ) : (
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.itemImage}
                  resizeMode="contain"
                />
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemPrice}>$ {item.price}</Text>
                <View style={styles.location}>
                  <Entypo name="location-pin" size={22} color="black" />
                  <Text style={styles.locationText}>
                    Deliver to Aditya - 751006
                  </Text>
                </View>

                <Button
                  title="Remove from Cart"
                  onPress={() => removeFromCart(item)}
                  color="#FF6347"
                />
              </View>
            )}
          />
        )}
      </ScrollView>
      {cart.length > 0 && (
        <TouchableOpacity style={styles.buyNowButton} onPress={handleBuyNow}>
          <Text style={styles.buyNowButtonText}>Buy Now</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
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
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  itemImage: {
    width: "100%",
    height: 200,
  },
  itemTitle: {
    fontSize: 18,
    marginBottom: 8,
    marginTop: 16,
  },
  itemPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    padding: 10,
  },
  locationText: {
    fontSize: 15,
    fontWeight: "500",
  },
  buyNowButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#FF6347",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  buyNowButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
