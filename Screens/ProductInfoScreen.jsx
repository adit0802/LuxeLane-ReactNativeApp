import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Platform,
  Pressable,
  TextInput,
  Dimensions,
  ImageBackground,
  Text,
} from "react-native";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { CartContext } from "../Components/CartContext";
import { WishlistContext } from "../Components/WishListContext";

export default function ProductInfoScreen() {
  const route = useRoute();
  const width = Dimensions.get("window").width;
  const [isPressed, setIsPressed] = useState(false);

  const onPress = () => {
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

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };
  const addToWishlist = (product) => {
    wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
  };

  const removeFromWishlist = (product) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
  };
  const item = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.searchbar}>
          <AntDesign
            name="search1"
            size={22}
            color="black"
            style={{ marginLeft: 6 }}
          />
          <TextInput placeholder="Search LuxeLane" style={{ flex: 1 }} />
        </Pressable>
        <Feather name="mic" size={22} color="black" />
      </View>

      <View style={styles.sharebtn}>
        <Entypo name="share" size={22} color="black" />
      </View>

      <ImageBackground
        source={{ uri: item.image }}
        style={{ width, height: 300, marginTop: 25 }}
        resizeMode="contain"
      />

      <Pressable onPress={onPress} style={styles.likebtn}>
        {isPressed ? (
          <AntDesign name="heart" size={22} color="red" />
        ) : (
          <AntDesign name="hearto" size={22} color="black" />
        )}
      </Pressable>

      <View style={{ padding: 10 }}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>₹ {item.price}</Text>
      </View>

      <View style={styles.separator} />

      <View style={{ padding: 10 }}>
        <Text style={styles.descriptionTitle}>Description:</Text>
        <Text style={styles.descriptionText}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          laborum optio dolorem illum itaque labore nostrum mollitia
          exercitationem doloribus, sit corrupti quia animi tempora quaerat
          libero aliquam dolores recusandae. Enim. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Reprehenderit sunt sit eligendi minus
          dolore officia iusto exercitationem, illo nemo excepturi similique, ab
          tenetur consectetur, ad commodi laboriosam dolorem magnam explicabo.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta
          quaerat consequatur eligendi ratione, illum quae quos cum sint nobis
          numquam ipsam culpa, tenetur consequuntur dolorum placeat delectus
          porro harum.
        </Text>
      </View>

      <View style={styles.separator} />

      <View style={{ padding: 10 }}>
        <Text style={styles.totalPrice}>Total: ₹ {item.price}</Text>
        <Text style={styles.deliveryText}>
          Free Delivery Tomorrow by 3 PM Order within 18hrs 30 mins
        </Text>
      </View>

      <Text style={styles.inStockText}>IN STOCK</Text>

      <View style={styles.location}>
        <Entypo name="location-pin" size={22} color="black" />
        <Text style={styles.locationText}>Deliver to Aditya - 751006</Text>
      </View>

      <Pressable style={styles.btn} onPress={() => addToCart(item)}>
        <Text>Add to Cart</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={() => removeFromCart(item)}>
        <Text>Remove from Cart</Text>
      </Pressable>

      <View style={{ marginBottom: 60 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 45 : 0,
  },
  header: {
    backgroundColor: "#D0B49F",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 7,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 3,
    flex: 1,
    height: 35,
  },
  sharebtn: {
    width: 48,
    height: 48,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    position: "absolute",
    marginTop: 70,
    marginLeft: 330,
  },
  likebtn: {
    width: 48,
    height: 48,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    position: "absolute",
    top: 340,
    left: 10,
  },
  separator: {
    height: 1,
    // backgroundColor: "black",
    marginBottom: 5,
    // padding: 5,
    borderTopWidth: 1,
    borderColor: "#ddd",
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
  descriptionTitle: {
    fontWeight: "500",
    fontSize: 18,
  },
  descriptionText: {
    fontSize: 16,
  },
  totalPrice: {
    fontWeight: "500",
    fontSize: 18,
    marginVertical: 5,
  },
  deliveryText: {
    color: "#00CED1",
  },
  inStockText: {
    marginHorizontal: 10,
    fontWeight: "500",
    color: "green",
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
  btn: {
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: "#D0B49F",
  },
});
