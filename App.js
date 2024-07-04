import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./Navigation/StackNavigator";
import { CartProvider } from "./Components/CartContext";
import { WishlistProvider } from "./Components/WishListContext";
import { ProfileProvider } from "./Components/ProfileContext";

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <ProfileProvider>
          <StackNavigator></StackNavigator>
        </ProfileProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
