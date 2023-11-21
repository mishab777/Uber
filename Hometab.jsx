import { StyleSheet, Text, View,Image, TouchableWithoutFeedback,StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';

const Hometab = () => {
  const navigation = useNavigation();

  const handleintercity = () =>{
    navigation.navigate("Intercity");
  }
  const Ride = () =>{
    navigation.navigate("Ride");
  }
  const Travel = () =>{
    navigation.navigate("Travel");
  }
  const Seeall = () =>{
    navigation.navigate("Services");
  }
  const handlenow = () =>{
    navigation.navigate("Now");
  }

  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
              <StatusBar barStyle="dark-content" backgroundColor="white"/>
      <View style={styles.logo}>
        <Image style={{width:100,height:50}} source={require("./assets/ubertxt.png")}/>

      </View>
      <View style={styles.search}>
        <View style={styles.search2}>
          <Image style={{width:20,height:20}} source={require('./assets/sr.png')}/>
          <TouchableOpacity onPress={Ride}>
          <Text style={{fontSize:20,color:"black"}}>Where to?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlenow}>
          <View style={{width:100,height:35,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"white",borderRadius:20}}>
            <Image style={{width:20,height:20}} source={require("./assets/clock.png")}/>
            <Text style={{color:"black",fontSize:15}}>Now</Text>

          </View>
          </TouchableOpacity>
        </View>
<NavFavorites/>
      </View>
      <View style={{width:"85%",height:40,flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginLeft:25}}>
        <Text style={{fontWeight:"bold",fontSize:18,color:"black"}}>Suggestions</Text>
        <TouchableOpacity onPress={Seeall}>
        <Text>See all</Text>
        </TouchableOpacity>

      </View>
      <View style={{width:"100%",height:100,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
        <TouchableWithoutFeedback onPress={Ride}>
        <View style={{width:90,height:90,borderRadius:10,flexDirection:"column",backgroundColor:"white",justifyContent:"space-evenly",alignItems:"center",elevation:10}}>
          <Image style={{width:50,height:30}} source={require("./assets/ubercar.webp")}/>
          <Text style={{fontSize:12}}>Ride</Text>

        </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={handleintercity}>
        <View style={{width:90,height:90,borderRadius:10,flexDirection:"column",backgroundColor:"white",justifyContent:"space-evenly",alignItems:"center",elevation:10}}>
          <Image style={{width:50,height:30}} source={require("./assets/intercity.webp")}/>
          <Text style={{fontSize:12}}>Intercity</Text>

        </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={Travel}>
        <View style={{width:90,height:90,borderRadius:10,flexDirection:"column",backgroundColor:"white",justifyContent:"space-evenly",alignItems:"center",elevation:10}}>
          <Image style={{width:50,height:30}} source={require("./assets/travel.webp")}/>
          <Text style={{fontSize:12}}>Travel</Text>

        </View>
        </TouchableWithoutFeedback>

      </View>
      <View style={{width:"100%",height:240,alignItems:"center",justifyContent:"center"}}>
        <Image style={{width:"90%",borderRadius:10,height:180}} source={require("./assets/banner2.png")}/>
      </View>
    </View>
  )
}

export default Hometab

const styles = StyleSheet.create({
  logo:{
    height:60,
    width:130,
    alignItems:"center",
    justifyContent:"center"
  },
  search:{
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    height:80,
  },
  search2:{
    height:50,
    width:"90%",
    alignItems:"center",
    justifyContent:"space-evenly",
    flexDirection:"row",
    borderRadius:30,
    backgroundColor:"#e3e3e3"
  }
})