import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Info = () => {

    const navigation = useNavigation();

    const handlename = () =>{
        navigation.navigate("name");
    }
    const handlenumber = () =>{
        navigation.navigate("phone");
    }
    const handlemail = () =>{
        navigation.navigate("email");
    }
  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
        <View style={{width:240,alignItems:"center",justifyContent:"center",height:100}}>
            <Text style={{fontSize:35,color:"black",fontWeight:600,}}>Account info</Text>
        </View>
        <View style={{marginLeft:20,height:80,width:80,alignItems:"center",justifyContent:"center",backgroundColor:"#e3e3e3",borderRadius:40}}>
          <Image style={{width:30,height:30}} source={require("./assets/obj.png")}/>

        </View>
        <View style={{width:150,alignItems:"center",justifyContent:"center",height:80}}>
            <Text style={{fontSize:25,color:"black",fontWeight:600,}}>Basic info</Text>
        </View>
        <TouchableOpacity onPress={handlename}>
        <View style={{marginLeft:20,width:"90%",height:80,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderBottomColor:"#d9d9d9",borderStyle:"solid",borderBottomWidth:1}}>
            <View style={{width:"80%",height:80,flexDirection:"column",justifyContent:"space-evenly",alignItems:"flex-start"}}>
            <Text style={{fontSize:16,color:"black",fontWeight:500,}}>Name</Text>
            <Text style={{fontSize:15}}>Muhammed Mishab</Text>
            </View>
            <Image style={{width:20,height:20}} source={require("./assets/right1.png")}/>

        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlenumber}>
        <View style={{marginLeft:20,width:"90%",height:80,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderBottomColor:"#d9d9d9",borderStyle:"solid",borderBottomWidth:1}}>
            <View style={{width:"80%",height:80,flexDirection:"column",justifyContent:"space-evenly",alignItems:"flex-start"}}>
            <Text style={{fontSize:16,color:"black",fontWeight:500,}}>Phone number</Text>
            <Text style={{fontSize:15}}>+91 9061988146</Text>
            </View>
            <Image style={{width:20,height:20}} source={require("./assets/right1.png")}/>

        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlemail}>
        <View style={{marginLeft:20,width:"90%",height:80,flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderBottomColor:"#d9d9d9",borderStyle:"solid",borderBottomWidth:1}}>
            <View style={{width:"80%",height:80,flexDirection:"column",justifyContent:"space-evenly",alignItems:"flex-start"}}>
            <Text style={{fontSize:16,color:"black",fontWeight:500,}}>Email</Text>
            <Text style={{fontSize:15}}>muhammedmishab002@gmail.com</Text>
            </View>
            <Image style={{width:20,height:20}} source={require("./assets/right1.png")}/>

        </View>
        </TouchableOpacity>
    </View>
  )
}

export default Info

const styles = StyleSheet.create({})