import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar({ cityHandler }) {
  return (
    <View style={{marginTop: 15, marginLeft: 5, flexDirection: "row"}}>
      <GooglePlacesAutocomplete 
      query={{ key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4"}}
      onPress={(data, details = null) =>{
        console.log(data.description);
        const city = data.description.split(",")[0];
        cityHandler(city);
      }}
        placeholder='Search'
        styles={{
            textInput: {
                backgroundColor: '#eee',
                marginTop: 7,
                borderRadius: 25,
                fontWeight: "600"
            },
            textInputContainer: {
                backgroundColor: "#eee",
                borderRadius: 50,
                flexDirection: "row",
                alignItems: "center",
                marginRight: 10
            }
        }}
        renderLeftButton={() => (
            <View style = {{ marginLeft: 10}}>
                <Ionicons name='location-sharp' size={24} />
            </View>
        )}
        renderRightButton={() => (
            <View 
                style={{
                    flexDirection: "row",
                    marginRight: 8,
                    backgroundColor: "white",
                    padding: 9,
                    borderRadius: 30,
                    alignItems: "center"
                }}>
                <TouchableOpacity>
                  <Text>Search</Text>
                </TouchableOpacity>
            </View>
        )}
      />
    </View>
  )
}