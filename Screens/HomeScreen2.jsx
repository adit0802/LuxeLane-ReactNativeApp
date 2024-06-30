import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  Pressable,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Category from "../Components/Category";
import axios from "axios";
import ProductItem from "../Components/ProductItem";
import DisplayList from "../Components/DisplayList";

const HomeScreen2 = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log("error message", error);
      }
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View
          style={{
            backgroundColor: "#D0B49F",
            padding: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable style={styles.searchbar}>
            <AntDesign
              name="search1"
              size={22}
              color="black"
              style={{ marginLeft: 6 }}
            />
            <TextInput placeholder="Search LuxeLane" />
          </Pressable>
          <Feather name="mic" size={22} color="black" />
        </View>
        <View style={styles.separator} />
        <Category />
        <View style={styles.separator} />
        {/* <DisplayList></DisplayList> */}

        {/* <FlatList
          contentContainerStyle={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
          }}
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ProductItem item={item} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          scrollEnabled={true}
        /> */}
        <ScrollView contentContainerStyle={styles.itemContainer}>
          {products.map((item) => (
            <View key={item.id} style={styles.item}>
              <ProductItem item={item} />

              <View style={styles.separator} />
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 10 : 0,
    flex: 1,
    backgroundColor: "white",
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
  separator: {
    height: 1,
    backgroundColor: "black",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  item: {
    margin: 4, // Add margin or padding to separate items if needed
  },
});

export default HomeScreen2;
