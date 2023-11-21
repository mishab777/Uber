import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from './NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination, setOrigin } from './slices/navSlice';
import { useDispatch } from 'react-redux';


const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={tw `p-5`}>
        <Image source={{uri:"http://links.papareact.com/gzs"}} style={{width:100,height:100,resizeMode:'contain'}}/>
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
        styles={{container:{flex:0},textInput:{fontSize:18}}}
        placeholder='Where From?'
        query={{key:'AIzaSyA_l_K_OuqpSIrYiULGz22Vbe4votSkqvM',language:'en'}}
        nearbyPlacesAPI='GooglePlacesSearch'
        minLength={2}
        debounce={400}
        fetchDetails={true}
        
        />
        <NavOptions/>
      </View>
      </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})