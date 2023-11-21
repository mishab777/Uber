import { StyleSheet, Text, View,TouchableWithoutFeedback,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination,setOrigin } from './slices/navSlice'
import { useDispatch } from 'react-redux';
import MapView,{Marker} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import { selectOrigin } from './slices/navSlice'


const Intercity2 = () => {

    const origin = useSelector(selectOrigin);


  const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleback = ()=>{
        navigation.navigate("Intercity");
    }
    const handleback2 = ()=>{
        navigation.navigate("Maplocation");
    }
  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
        <TouchableWithoutFeedback onPress={handleback}>
        <View style={{marginLeft:10,width:200,height:50,alignItems:"center",justifyContent:"space-between",flexDirection:"row"}}>
            <Image style={{width:20,height:20}} source={require("./assets/arrow.png")}/>
            <Text style={{color:"black",fontSize:18}}>Plan your ride</Text>

        </View>
        </TouchableWithoutFeedback>
        <GooglePlacesAutocomplete
             onPress={(data, details = null)=>{
              dispatch(
                setOrigin({
                location:details.geometry.location,
                description:data.description
              }))
              dispatch(setDestination(null));
              }}
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
            onPress={(data, details = null)=>{
              dispatch(
                setDestination({
                location: details.geometry.location,
                description: data.description,
              })
              );
              navigation.navigate('RideOptionsCard')
            }}
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
      <TouchableWithoutFeedback onPress={handleback2}>
      <View style={{width:240,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:60}}>
        <Image style={{width:15,height:15}} source={require("./assets/map.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Set location on map</Text>

      </View>
      </TouchableWithoutFeedback>
      <View style={{width:"100%",height:445}}>
      <MapView
  style={tw`flex-1`}
  mapType='standard'
  initialRegion={
    origin?.location
      ? {
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }
      : {
          latitude: 0,
          longitude: 0, 
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }
  }
>
  {origin?.location && (
    <Marker
      coordinate={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
      }}
    />
  )}
</MapView>


      </View>
    </View>
  )
}

export default Intercity2

const styles = StyleSheet.create({})