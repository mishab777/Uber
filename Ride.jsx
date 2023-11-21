import { Image, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useNavigation } from '@react-navigation/native'
import { selectDestination, setDestination,setOrigin } from './slices/navSlice'
import { useDispatch } from 'react-redux';
import MapView,{Marker} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { useSelector } from 'react-redux'
import { selectOrigin } from './slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { createStackNavigator } from '@react-navigation/stack'
import NavigateCard from './NavigateCard'
import RideOptionsCard from './RideOptionsCard';




const Ride = () => {

  const Stack = createStackNavigator();

  const destination = useSelector(selectDestination);

  const origin = useSelector(selectOrigin);

  const mapRef = useRef(null);

useEffect(()=>{
  if(!origin || !destination)return;

  mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
    edgePadding: {top:50,right:50,bottom:50,left:50},
  });


},[origin,destination])
  
    

  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
      <View style={{height:"50%"}}>
     <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='NaviagteCard' component={NavigateCard}/>
      <Stack.Screen name='RideOptionsCard' component={RideOptionsCard}/>
     </Stack.Navigator>
     </View>
      <View style={{width:"100%",height:"50%"}}>
      <MapView
      ref={mapRef}
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
  {origin && destination && (
    <MapViewDirections
    origin={origin.description}
    destination={destination.description}
    apikey='AIzaSyA_l_K_OuqpSIrYiULGz22Vbe4votSkqvM'
    strokeWidth={3}
    strokeColor='black'

    />
  )}
  {origin?.location && (
    <Marker
      coordinate={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
      }}
      title='Origin'
      description={origin.description}
      identifier='origin'
    />
  )}
  {destination?.location && (
    <Marker
      coordinate={{
        latitude: destination.location.lat,
        longitude: destination.location.lng,
      }}
      title='Destination'
      description={destination.description}
      identifier='destination'
    />
  )}
</MapView>


      </View>
    </View>
  )
}

export default Ride

const styles = StyleSheet.create({})