import { Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useNavigation } from '@react-navigation/native'


const Ride = () => {
    const navigation = useNavigation();

    const handleback = ()=>{
        navigation.navigate("Home")
    }
    const handlemap = ()=>{
        navigation.navigate("Maplocation")
    }

  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
        <TouchableWithoutFeedback onPress={handleback}>
        <View style={{width:60,height:50,alignItems:"center",justifyContent:"center"}}>
            <Image style={{width:20,height:20}} source={require("./assets/arrow.png")}/>

        </View>
        </TouchableWithoutFeedback>
            <GooglePlacesAutocomplete
                    enablePoweredByContainer={false}
                    styles={{container:{marginLeft:50,flex:0,width:"70%",backgroundColor:"white"},textInput:{fontSize:18,height:40,borderWidth:1,borderColor:"gray"}}}
                    placeholder='Enter pickup location'
                    query={{key:'AIzaSyA_l_K_OuqpSIrYiULGz22Vbe4votSkqvM',language:'en'}}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    minLength={2}
                    debounce={400}
                    fetchDetails={true}
            />
            <GooglePlacesAutocomplete
             enablePoweredByContainer={false}
             styles={{container:{flex:0,width:"70%",backgroundColor:"white",marginLeft:50,},textInput:{fontSize:18,height:40,borderWidth:1,borderColor:"gray"}}}
             placeholder='Where to?'
             query={{key:'AIzaSyA_l_K_OuqpSIrYiULGz22Vbe4votSkqvM',language:'en'}}
             nearbyPlacesAPI='GooglePlacesSearch'
             minLength={2}
             debounce={400}
             fetchDetails={true}
            />

        <View style={{width:200,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:60,borderBottomColor:"#e8e6e6",borderBottomWidth:1,borderStyle:"dashed"}}>
        <Image style={{width:15,height:15}} source={require("./assets/star.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Saved places</Text>

      </View>
      <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:60,borderBottomColor:"#e8e6e6",borderBottomWidth:1,borderStyle:"dashed"}}>
        <Image style={{width:15,height:15}} source={require("./assets/pin.png")}/>
        <View style={{flexDirection:"column",width:"70%",height:"100%",justifyContent:"space-evenly",alignItems:"flex-start"}}>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Nilambur - Malappuram Road</Text>
        <Text style={{color:"black",fontSize:12,}}>Janathapadi,Tee Pee Building</Text>
        </View>

      </View>
      <TouchableWithoutFeedback onPress={handlemap}>
      <View style={{width:240,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:60}}>
        <Image style={{width:15,height:15}} source={require("./assets/map.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Set location on map</Text>

      </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Ride

const styles = StyleSheet.create({})