// WishlistScreen.js
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { WishlistContext } from "../Components/WishListContext";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WishList() {
  const { wishlist, dispatch } = useContext(WishlistContext);

  const removeFromWishlist = (product) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>WishList</Text>
      {wishlist.length === 0 ? (
        <Text style={styles.emptyText}>Oops! Your Wishlist is empty</Text>
      ) : (
        <FlatList
          data={wishlist}
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
                <Pressable
                  style={styles.btn}
                  onPress={() => removeFromWishlist(item)}
                >
                  <Text style={styles.btnText}>Remove from Wishlist</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  emptyText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
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
  btn: {
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D0B49F",
  },
  btnText: {
    color: "black",
    fontWeight: "bold",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
