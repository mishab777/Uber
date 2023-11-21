import { StyleSheet, Text, View,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Phone = () => {
  const navigation = useNavigation();

  const handleback = () => {
    navigation.navigate('uberac');
  };
  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
       <TouchableWithoutFeedback onPress={handleback}>
        <View style={{marginLeft:10,width:200,height:50,alignItems:"center",justifyContent:"space-evenly",flexDirection:"row"}}>
            <Image style={{width:20,height:20}} source={require("./assets/arrow.png")}/>
            <Text style={{color:"black",fontSize:18}}>Uber Account</Text>

        </View>
        </TouchableWithoutFeedback>
        <View style={{width:190,alignItems:"center",justifyContent:"center",height:60}}>
            <Text style={{fontSize:23,color:"black",fontWeight:600,}}>Phone number</Text>
        </View>
        <View style={{width:210,alignItems:"center",justifyContent:"center",height:20}}>
            <Text style={{fontSize:14,color:"black"}}>Personalize your experience</Text>
        </View>
        <View style={{height:50}}>
        </View>
        <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:60}}>
          <View style={{width:80,alignItems:"center",justifyContent:"space-evenly",flexDirection:"row",height:50,backgroundColor:"#e3e3e3",borderRadius:10}}>
            <Image style={{width:30,height:20}} source={require("./assets/india.png")}/>
            <Image style={{width:10,height:10}} source={require("./assets/drop.png")}/>


          </View>
          <View style={{width:240,height:50,backgroundColor:"#e3e3e3",flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:10}}>
            <Text style={{color:"black"}}>+91</Text>
            <TextInput style={{width:200,backgroundColor:"#e3e3e3",height:40}} placeholder='Mobile number' keyboardType='number-pad'/>

          </View>

        </View>
        <Text style={{fontSize:12,marginLeft:15}}>A verification code will be sent to this number</Text>
        <TouchableOpacity style={{top:440,marginLeft:17,backgroundColor:"black",width:330,height:50,borderRadius:10,alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"white",fontSize:17,fontWeight:500}}>Update</Text>

        </TouchableOpacity>
    </View>
  )
}

export default Phone

const styles = StyleSheet.create({})