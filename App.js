import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./Navigation/StackNavigator";
import { CartProvider } from "./Components/CartContext";
import { WishlistProvider } from "./Components/WishListContext";

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <StackNavigator></StackNavigator>
      </WishlistProvider>
    </CartProvider>
  );
}
