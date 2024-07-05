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
      name: "Men",
      image:
        "https://images.hugoboss.com/is/image/hugobosscsprod/240516_HBME_112_SU24_Tier3_BMO_021_1440x2304?%24large%24&align=0,-1&fit=crop,1&ts=1716548673749&qlt=80&wid=468&hei=782",
    },
    {
      id: 2,
      name: "Women",
      image:
        "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22669806/2023/4/6/a0b9772e-e2d4-4b5f-acc3-85f91dc7c4ec1680769432651Tops6.jpg",
    },
    {
      id: 3,
      name: "Jewelery",
      image:
        "https://images.meesho.com/images/products/16137747/042d4_512.webp",
    },
    {
      id: 4,
      name: "Girls",
      image:
        "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22549588/2023/3/29/6917d1df-f927-41cd-8501-bcddc0b2c80c1680033645620KidsOnBoardYellowPolkaDotPrintCrepeFitFlareDress1.jpg",
    },
    {
      id: 5,
      name: "Boys",
      image:
        "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/23622502/2023/9/22/5704f738-2681-4252-b403-c2ed5cb79f671695376354306-Alan-Jones-Boys-Colourblocked-Hooded-Sweatshirt-741169537635-1.jpg",
    },
    {
      id: 6,
      name: "Electronics",
      image:
        "https://i.pinimg.com/564x/5a/bd/9e/5abd9e90488ab0a183fe42f144599c1f.jpg",
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
    width: 80,
    height: 80,
    borderRadius: 10,
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
