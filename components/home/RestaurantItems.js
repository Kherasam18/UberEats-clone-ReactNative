import { View, Text, ProgressViewIOSComponent, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Divider } from 'react-native-elements/dist/divider/Divider';

export const localRestaurants = [
  {
    name: "Grill Master",
    image_url: "https://b.zmtcdn.com/data/pictures/5/20385335/ec2d63c8e43df9167cd87ef076758ca0_o2_featured_v2.jpg",
    categories: ["Cafe","Restaurant"],
    price: "$$",
    reviews: 95,
    rating: 4.7
  },
  {
    name: "Taste Buds",
    image_url:
      "https://b.zmtcdn.com/data/pictures/7/19016147/d390f0978e8904cc9cc4239b3b7622e9_o2_featured_v2.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "Vadilal",
    image_url:
      "https://b.zmtcdn.com/data/pictures/chains/6/19417626/cbaa80e5dd27d9d6cb546a94e33594cc_o2_featured_v2.jpg",
    categories: ["IceCream", "Shakes"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "Roll Express",
    image_url:
      "https://b.zmtcdn.com/data/pictures/3/19010243/32112dd95def5791177f7298abce0331_o2_featured_v2.jpg?output-format=webp",
    categories: ["Roll", "Beverages"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "Coffee Day",
    image_url:
      "https://b.zmtcdn.com/data/pictures/7/19008767/ba32c43e9d78bf9a9b61fe4bbc849c0a_o2_featured_v2.jpg?output-format=webp",
    categories: ["Italian", "Beverages"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
]

export default function RestaurantItems({ navigation, ...props }) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <View key={index}>
        <TouchableOpacity  activeOpacity={1} style={{ marginBottom: 10 }}
          onPress={() => navigation.navigate("RestaurantDetail", {
              name: restaurant.name, 
              image: restaurant.image_url,
              price: restaurant.price,
              reviews: restaurant.review_count,
              rating: restaurant.rating,
              categories: restaurant.categories,
            })
          }
        >
          <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
        <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20}}/>
        </View>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image 
      source ={{uri: props.image}}
      style={{ width: "100%", height: 240 }}/>
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
