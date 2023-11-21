import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Security = () => {
    const navigation = useNavigation();

    const topassword = ()=>{
        navigation.navigate("Password")
    }
  return (
    <View style={{height:"100%",backgroundColor:"white"}}>
       <View style={{width:160,alignItems:"center",justifyContent:"center",height:100}}>
            <Text style={{fontSize:35,color:"black",fontWeight:600,}}>Security</Text>
        </View>
        <View style={{width:235,alignItems:"center",justifyContent:"center",height:60}}>
            <Text style={{fontSize:25,color:"black",fontWeight:600,}}>Logging in to Uber</Text>
        </View>
        <TouchableOpacity onPress={topassword}>
        <View style={{marginLeft:20,width:"90%",height:80,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderBottomColor:"#d9d9d9",borderStyle:"solid",borderBottomWidth:1}}>
            <View style={{width:"80%",height:80,flexDirection:"column",justifyContent:"space-evenly",alignItems:"flex-start"}}>
            <Text style={{fontSize:16,color:"black",fontWeight:500,}}>Password</Text>
            </View>
            <Image style={{width:20,height:20}} source={require("./assets/right1.png")}/>

        </View>
        </TouchableOpacity>
    </View>
  )
}

export default Security

const styles = StyleSheet.create({})