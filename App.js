import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./Navigation/StackNavigator";
import { CartProvider } from "./Components/CartContext";
import { WishlistProvider } from "./Components/WishListContext";
import { ProfileProvider } from "./Components/ProfileContext";
import { ModalPortal } from "react-native-modals";
import { UserContext } from "./UserContext";

export default function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <ProfileProvider>
          <UserContext>
            <StackNavigator />
            <ModalPortal></ModalPortal>
          </UserContext>
        </ProfileProvider>
      </WishlistProvider>
    </CartProvider>
  );
}
