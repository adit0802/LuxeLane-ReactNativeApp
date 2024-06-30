import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import DisplayList from "../Components/DisplayList";
import Category from "../Components/Category";

const HomeScreen = () => {
  const [numColumns, setNumColumns] = useState(1);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* <Image
          source={require("../assets/luxe3.png")}
          style={{ height: 25, width: 25, marginLeft: 25, marginTop: 10 }}
        /> */}
        <Image source={require("../assets/luxe2.png")} style={styles.logo} />
        <AntDesign
          name="search1"
          size={20}
          color="white"
          style={{ marginRight: 20, marginLeft: 130, marginTop: 12 }}
        />
        <AntDesign
          name="hearto"
          size={20}
          color="white"
          style={{ marginRight: 20, marginTop: 12 }}
        />
        <FontAwesome
          name="shopping-bag"
          size={20}
          color="white"
          style={{ marginRight: 10, marginTop: 12 }}
        />
      </View>

      <View style={styles.separator} />

      <ScrollView>
        <Category />
        <View style={styles.separator} />
        <DisplayList numColumns={numColumns} />
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => setNumColumns(1)}
        >
          <Text style={{ color: "white" }}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => setNumColumns(2)}
        >
          <Text style={{ color: "white" }}>2</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 110,
    height: 19,
    marginTop: 12,
    marginLeft: 25,
  },
  separator: {
    height: 1,
    backgroundColor: "gray",
    marginTop: 15,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "black",
  },
});

export default HomeScreen;
