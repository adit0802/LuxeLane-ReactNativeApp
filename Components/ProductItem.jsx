import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { WishlistContext } from "./WishListContext";
import { CartContext } from "./CartContext";
export default function ProductItem({ item }) {
  const navigation = useNavigation();

  const [isPressed, setIsPressed] = useState(false);

  const onPress = () => {
    setIsPressed((prevState) => !prevState);
    if (isPressed) {
      wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: item });
    } else {
      wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: item });
    }
    setIsPressed(!isPressed);
  };
  const { cart, dispatch } = useContext(CartContext);

  const { dispatch: wishlistDispatch } = useContext(WishlistContext);
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const addToWishlist = (product) => {
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const removeFromWishlist = (product) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
  };

  return (
    <Pressable
      style={styles.container}
      accessible={true}
      onPress={() => {
        navigation.navigate("Info", {
          id: item.id,
          title: item.title,
          price: item.price,
          image: item.image,
        });
      }}
    >
      <Pressable onPress={onPress} style={styles.likebtn}>
        {isPressed ? (
          <AntDesign name="heart" size={22} color="red" />
        ) : (
          <AntDesign name="hearto" size={22} color="black" />
        )}
      </Pressable>

      <Image style={styles.img} source={{ uri: item?.image }} onPress></Image>
      <Text numberOfLines={2} style={{ width: 110, margin: 10 }}>
        {item?.title}
      </Text>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          ₹ {item?.price}
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {item?.rating?.rate} <Entypo name="star" size={18} color="green" />
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* <Pressable style={styles.btn}>
          <Text>Buy Now</Text>
        </Pressable> */}
        <Pressable style={styles.btn} onPress={() => addToCart(item)}>
          <FontAwesome name="cart-plus" size={20} color="black" />
          <Text style={{ fontWeight: "bold", marginLeft: 5, color: "black" }}>
            Add to Cart
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  img: {
    width: 145,
    height: 150,
    resizeMode: "contain",
  },
  container: {
    marginHorizontal: 12,
    marginVertical: 15,
  },
  btn: {
    padding: 10,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: "#D0B49F",
    flexDirection: "row",
    marginLeft: 18,
  },
  likebtn: {
    marginRight: 0,
    marginLeft: 124,
    marginTop: 0,
  },
});
