import { View, Text, SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import About from '../components/restaurentDetail/About';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import MenuItems from '../components/restaurentDetail/MenuItems';
import ViewCart from '../components/restaurentDetail/ViewCart';

export default function RestaurantDetail({route, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <About route={route}/>
        </View>
        <Divider width={1.8} style={{marginVertical:20}} />
        <MenuItems restaurantName={route.params.name} />
        <ViewCart navigation={navigation} restaurantName={route.params.name} />
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