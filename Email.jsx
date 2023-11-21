import { StyleSheet, Text, View,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Email = () => {
  const navigation = useNavigation();

  const handleback = () =>{
    navigation.navigate("uberac");
  }
  return (
    <View style={{backgroundColor:"white",height:"100%"}}>       
    <TouchableWithoutFeedback onPress={handleback}>
        <View style={{marginLeft:10,width:200,height:50,alignItems:"center",justifyContent:"space-evenly",flexDirection:"row"}}>
            <Image style={{width:20,height:20}} source={require("./assets/arrow.png")}/>
            <Text style={{color:"black",fontSize:18}}>Uber Account</Text>

        </View>
        </TouchableWithoutFeedback>
        <View style={{width:95,alignItems:"center",justifyContent:"center",height:60}}>
            <Text style={{fontSize:23,color:"black",fontWeight:600,}}>Email</Text>
        </View>
        <View style={{width:210,alignItems:"center",justifyContent:"center",height:20}}>
            <Text style={{fontSize:14,color:"black"}}>Personalize your experience</Text>
        </View>
        <View style={{height:50}}>

        </View>
        <TextInput style={{marginLeft:18,width:"90%",height:50,borderRadius:10,backgroundColor:"#e3e3e3"}} placeholder='name@example.com'/>
        <TouchableOpacity style={{top:460,marginLeft:17,backgroundColor:"black",width:330,height:50,borderRadius:10,alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"white",fontSize:17,fontWeight:500}}>Update</Text>
        </TouchableOpacity>
    </View>
  )
}
export default Email;

const styles = StyleSheet.create({})