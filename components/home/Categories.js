import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const items = [
    {
        image: require("../../assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../../assets/images/soft-drink.png"),
        text: "Soft Drinks"
    },
    {
        image: require("../../assets/images/bread.png"),
        text: "Bakery"
    },
    {
        image: require("../../assets/images/fast-food.png"),
        text: "Fast Foods"
    },
    {
        image: require("../../assets/images/deals.png"),
        text: "Deals"
    },
    {
        image: require("../../assets/images/coffee.png"),
        text: "Beverages"
    },
    {
        image: require("../../assets/images/desserts.png"),
        text: "Desserts"
    },
]

export default function Categories() {
  return (
    <View
    style={{
        marginTop: 5,
        paddingVertical: 10,
        paddingLeft: 8,
        backgroundColor: "#fff"
    }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {items.map((item, index) => (
        <View key={index} style={{alignItems: "center", marginRight: 30}}>
            <Image source={item.image}
                style={{
                    width: 50,
                    height: 40,
                    resizeMode: "contain"
                }}
            />
            <Text 
                style={{fontSize: 12, fontWeight: "600"}}
            >{item.text}</Text>
        </View>
        ))}
      </ScrollView>
      <Divider width={0.8}  />
    </View>
  )
}