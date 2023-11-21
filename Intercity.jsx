import { Image, ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Intercity = () => {
    const navigation = useNavigation();

    const handleride = ()=>{
        navigation.navigate("Intercity2");
    }
    const handleback = ()=>{
        navigation.navigate("Home");
    }
  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
        <View style={{width:"100%",height:450}}>
            <ImageBackground style={{width:"100%",height:"100%"}} source={require("./assets/uber1.webp")}>
                <TouchableOpacity onPress={handleback}>
                <View style={{backgroundColor:"white",width:50,height:50,borderRadius:30,alignItems:"center",justifyContent:"center",marginLeft:10,top:5}}>
                    <Image style={{width:25,height:25}} source={require("./assets/arrow.png")}/>

                </View></TouchableOpacity>
                <View style={{backgroundColor:"white",width:100,height:40,alignItems:"center",justifyContent:"center",borderRadius:20,left:250,bottom:40}}>
                    <Text style={{color:"black"}}>My activity</Text>

                </View>

            </ImageBackground>


        </View>
        <View style={{width:150,alignItems:"center",justifyContent:"center",height:60}}>
            <Text style={{color:"black",fontSize:50,fontFamily:'sans-serif-medium'}}>uber</Text>

        </View>
        <View style={{width:230,alignItems:"center",justifyContent:"center",height:63}}>
            <Text style={{color:"black",fontSize:50,fontFamily:'sans-serif-medium'}}>Intercity</Text>

        </View>
        <View style={{height:30}}>

        </View>
        <View style={{width:220,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:40}}>
        <Image style={{width:15,height:15}} source={require("./assets/road.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>For outstation travel</Text>

      </View>
      <View style={{width:300,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:40}}>
        <Image style={{width:15,height:15}} source={require("./assets/car.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Convenient and affordable trips</Text>

      </View>
      <TouchableOpacity onPress={handleride}>
        <View style={styles.get}>
            <Text style={{color:"white",fontSize:17,fontWeight:"bold"}}>Get Started</Text>
            <Image style={{width:20,height:20}} source={require("./assets/right.png")}/>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default Intercity

const styles = StyleSheet.create({
    get:{
        width:"90%",
        height:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        backgroundColor:"black",
        borderRadius:6,
        top:20,
        left:17
    }
})