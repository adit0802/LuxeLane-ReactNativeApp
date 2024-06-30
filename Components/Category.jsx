import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";

export default function Category() {
  const categories = [
    {
      id: 1,
      name: "Watches",
      image:
        "https://images-cdn.ubuy.co.in/64fd2e38349d35789169f805-eeekit-classic-diamond-gold-watches-for.jpg",
    },
    {
      id: 2,
      name: "Bags",
      image:
        "https://sugarcrush.in/cdn/shop/files/sugarcrush-crystal-bridal-feather-luxury-bag-black-sugarcrush-3.jpg?v=1688787017&width=3712",
    },
    {
      id: 3,
      name: "Shoes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhQvqyD1UenFHC5WohN9w5esQyjyUEjsOcQ&s",
    },
    {
      id: 4,
      name: "Accessories",
      image:
        "https://madbrown.in/cdn/shop/files/2_67ea2f91-2810-4898-b46a-eaf1cb085adb.webp?v=1701861360",
    },
    {
      id: 5,
      name: "Bags",
      image:
        "https://sugarcrush.in/cdn/shop/files/sugarcrush-crystal-bridal-feather-luxury-bag-black-sugarcrush-3.jpg?v=1688787017&width=3712",
    },
    {
      id: 6,
      name: "Shoes",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfhQvqyD1UenFHC5WohN9w5esQyjyUEjsOcQ&s",
    },
  ];

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity key={category.id} style={styles.categoryItem}>
            <Image
              source={{ uri: category.image }}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  categoryContainer: {
    paddingVertical: 10,
    backgroundColor: "white",
  },
  categoryItem: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginBottom: 5,
  },
  categoryText: {
    color: "black",
    fontSize: 14,
  },
  image: {
    flex: 10,
  },
});
