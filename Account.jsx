import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Account = () => {
  const navigation = useNavigation();

  const handleuber = ()=>{
    navigation.navigate("uberac")
  }
  return (
    <View style={{backgroundColor:"white"}}>
      <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:'space-evenly',height:100}}>
        <View style={{width:"70%",height:80,alignItems:"flex-start"}}>
          <Text style={{fontSize:30,fontWeight:"bold",color:"black"}}>Muhammed Mishab</Text>
        </View>
        <View style={{height:60,width:60,alignItems:"center",justifyContent:"center",backgroundColor:"#e3e3e3",borderRadius:30}}>
          <Image style={{width:30,height:30}} source={require("./assets/obj.png")}/>

        </View>

      </View>
      <View style={{width:"100%",height:140,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",backgroundColor:"white"}}>
        <View style={{width:90,height:90,borderRadius:10,flexDirection:"column",backgroundColor:"#ECECEC",justifyContent:"space-evenly",alignItems:"center",}}>
          <Image style={{width:25,height:25}} source={require("./assets/help.png")}/>
          <Text style={{fontSize:12}}>Help</Text>

        </View>
        <View style={{width:90,height:90,borderRadius:10,flexDirection:"column",backgroundColor:"#ECECEC",justifyContent:"space-evenly",alignItems:"center",}}>
          <Image style={{width:25,height:25}} source={require("./assets/pay.png")}/>
          <Text style={{fontSize:12}}>Payment</Text>

        </View>
        <View style={{width:90,height:90,borderRadius:10,flexDirection:"column",backgroundColor:"#ECECEC",justifyContent:"space-evenly",alignItems:"center"}}>
          <Image style={{width:25,height:25}} source={require("./assets/activity.png")}/>
          <Text style={{fontSize:12}}>Activity</Text>

        </View>

      </View>
      <View style={{width:"100%",height:120,justifyContent:"center",alignItems:"center"}}>
        <View style={{width:"90%",height:"85%",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",backgroundColor:"#ECECEC",borderRadius:10}}>
          <View style={{width:"70%",height:"70%",flexDirection:"column",justifyContent:"space-evenly",alignItems:"flex-start"}}>
            <Text style={{color:"black",fontSize:15}}>You have multiple promos</Text>
            <Text style={{fontSize:12}}>we'll automatically apply the one that saves you the most</Text>

          </View>
          <Image style={{width:50,height:50}} source={require("./assets/discount.png")}/>

        </View>
      </View>
      <View style={{width:150,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("./assets/settings.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Settings</Text>

      </View>
      <View style={{width:160,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("./assets/email.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Messages</Text>

      </View>
      <View style={{width:160,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("./assets/gift.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Send a gift</Text>

      </View>
      <View style={{width:280,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("./assets/wallet.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Earn by driving or delivering</Text>

      </View>
      <View style={{width:180,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("./assets/case.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Business Hub</Text>

      </View>
      <TouchableOpacity onPress={handleuber}>
      <View style={{width:240,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("./assets/user.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Manage Uber account</Text>

      </View>
      </TouchableOpacity>
      <View style={{width:130,flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:50}}>
        <Image style={{width:15,height:15}} source={require("./assets/ex.png")}/>
        <Text style={{color:"black",fontSize:15,fontWeight:600}}>Legal</Text>

      </View>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})