import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

export default function DisplayList({ numColumns }) {
  const products = [
    {
      id: 3,
      name: "Leather Clutch Bag",
      price: "₹ 85,000",
      description: "A luxury gold watch with a sleek design.",
      image:
        "https://images-cdn.ubuy.co.in/63400680a137e439d901c8ac-fake-designer-bags-v-womens-luxury.jpg",
    },
    {
      id: 4,
      name: "Gold Watch",
      price: "₹ 85,000",
      description: "A luxury gold watch with a sleek design.",
      image:
        "https://as1.ftcdn.net/v2/jpg/03/14/57/98/1000_F_314579839_nXJTh6yB12MNn8wbXWUAq5slrmfharEE.jpg",
    },
    {
      id: 5,
      name: "Jimmy Choo",
      price: "₹ 85,000",
      description: "A luxury gold watch with a sleek design.",
      image:
        "https://www.prettydesigns.com/wp-content/uploads/2014/02/18.jpg?is-pending-load=1",
    },
    {
      id: 6,
      name: "Jimmy Choo",
      price: "₹ 85,000",
      description: "A luxury gold watch with a sleek design.",
      image:
        "https://i.pinimg.com/736x/9e/2c/40/9e2c4095bc16789823d5ad54814a8e8b.jpg",
    },
    {
      id: 7,
      name: "Gold Watch",
      price: "₹ 85,000",
      description: "A luxury gold watch with a sleek design.",
      image:
        "https://i.pinimg.com/736x/63/06/f3/6306f3445216b6a7958e183ff6cfc91b.jpg",
    },
    {
      id: 8,
      name: "Luxury Bag",
      price: "₹ 85,000",
      description: "Argyle Quilted Pink Handbag Metal Decor Crossbody",
      image: "https://i.ebayimg.com/images/g/8joAAOSwVvRkemaE/s-l1200.webp",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        key={numColumns} // Add this line
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  productContainer: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: "white",
  },
  productImage: {
    width: "100%",
    height: 150,
    marginBottom: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
    marginVertical: 8,
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
  },
});
