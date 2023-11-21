import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Services = () => {
  return (
    <View style={{backgroundColor:"white"}}>
    <View style={{width:160,height:80,alignItems:"center",justifyContent:"center"}}>
      <Text style={{color:"black",fontSize:35,fontWeight:"600"}}>Services</Text>

    </View>
    <View style={{width:260,height:50,alignItems:"center",justifyContent:"center"}}>
      <Text style={{fontSize:20,fontWeight:"600",color:"black"}}>Go anywhere,get anything</Text>

    </View>
    <View style={{width:"100%",height:100,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
        <View style={{width:90,height:90,borderRadius:10,flexDirection:"column",backgroundColor:"white",justifyContent:"space-evenly",alignItems:"center",elevation:10}}>
          <Image style={{width:50,height:40}} source={require("./assets/ubercar.webp")}/>
          <Text style={{fontSize:12}}>Ride</Text>

        </View>
        <View style={{width:90,height:90,borderRadius:10,flexDirection:"column",backgroundColor:"white",justifyContent:"space-evenly",alignItems:"center",elevation:10}}>
          <Image style={{width:50,height:40}} source={require("./assets/intercity.webp")}/>
          <Text style={{fontSize:12}}>Intercity</Text>

        </View>
        <View style={{width:90,height:90,borderRadius:10,flexDirection:"column",backgroundColor:"white",justifyContent:"space-evenly",alignItems:"center",elevation:10}}>
          <Image style={{width:50,height:40}} source={require("./assets/travel.webp")}/>
          <Text style={{fontSize:12}}>Travel</Text>

        </View>

      </View>
      
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})