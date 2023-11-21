import { StyleSheet, Text, View,TouchableWithoutFeedback,Image } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useNavigation } from '@react-navigation/native'
import MapView from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'


const Maplocation = () => {
    const navigation = useNavigation();

    const handleback = () =>{
        navigation.navigate("Home")
    }
  return (
    <View style={{backgroundColor:"white"}}>
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
            <View style={{height:640}}>
             <MapView
             style={{height:"100%",marginTop:20}}
             mapType='standard'
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      </View>
    </View>
  )
}

export default Maplocation

const styles = StyleSheet.create({})