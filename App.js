import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./Navigation/StackNavigator";
import { CartProvider } from "./Components/CartContext";
export default function App() {
  return (
    <CartProvider>
      <StackNavigator></StackNavigator>
    </CartProvider>
  );
}
