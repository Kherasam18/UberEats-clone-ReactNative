import { View, Text, SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import BottomTabs from '../components/home/BottomTabs';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const YELP_API_KEY = "SuoWyqe-r2PI1kXLczkXpHmkhwvullBp0d_q_kRQ_2L1ph31pNxZci9UFKv7kY2guyphwapGMcWtyN9TVvhKiOUj49OCN9gFSqhM4UM_MtIlxP1O69e68k7w84G0Y3Yx";

export default function Home({ navigation }) {
    const[restaurantData, setRestaurantData] = useState(localRestaurants);
    const[city, setCity] = useState("San Fransico")
    const[activeTab, setActiveTab] = useState("Delivery")

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    
        const apiOptions = {
            headers: {
              Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };
        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
          setRestaurantData(
            json.businesses.filter((business) =>
              business.transactions.includes(activeTab.toLowerCase())
            )
          )
        );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);
    
return (
    <SafeAreaView style={styles.container}>
        <View style={{backgroundColor:"white", padding: 15}}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SearchBar cityHandler={setCity}/>
        </View>
        <Categories />
        <ScrollView showsHorizontalScrollIndicator={false}>
            <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
        </ScrollView>
        <Divider width={1.2} />
        <BottomTabs />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        marginTop:StatusBar.currentHeight
    }
});