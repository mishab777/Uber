import { StyleSheet, Text, View,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Password = () => {
    const navigation = useNavigation();

    const handleback = ()=>{
        navigation.navigate("uberac")
    }
  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
       <TouchableWithoutFeedback onPress={handleback}>
        <View style={{marginLeft:10,width:200,height:50,alignItems:"center",justifyContent:"space-evenly",flexDirection:"row"}}>
            <Image style={{width:20,height:20}} source={require("./assets/arrow.png")}/>
            <Text style={{color:"black",fontSize:18}}>Uber Account</Text>

        </View>
        </TouchableWithoutFeedback>
        <View style={{width:180,alignItems:"center",justifyContent:"center",height:60}}>
            <Text style={{fontSize:23,color:"black",fontWeight:600,}}>New Password</Text>
        </View>
        <View style={{width:"100%",alignItems:"center",justifyContent:"center",height:60}}>
            <Text style={{fontSize:14,color:"black"}}>Your password must be atleast 8 characters long,and contain at least one letter and one digit</Text>
        </View>
        <View style={{marginLeft:15,width:"100%",justifyContent:"space-evenly",flexDirection:"column",alignItems:"flex-start",height:180}}>
          <Text style={{color:"black",fontSize:15}}>New password</Text>
          <View style={{width:"90%",height:50,backgroundColor:"#e3e3e3",borderRadius:7,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
          <TextInput style={{width:270,height:50,backgroundColor:"#e3e3e3",borderRadius:7,fontSize:16}} 
            />
            <TouchableOpacity>
              <Image style={{ width: 20, height: 20 }} source={require('./assets/eye.png')} />
            </TouchableOpacity>
          </View>
          <Text style={{color:"black",fontSize:15}}>Confirm new password</Text>
          <View style={{width:"90%",height:50,backgroundColor:"#e3e3e3",borderRadius:7,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
          <TextInput style={{width:270,height:50,backgroundColor:"#e3e3e3",borderRadius:7,fontSize:16}}  />
          
            <TouchableOpacity >
              <Image style={{ width: 20, height: 20 }} source={require('./assets/eye.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={{top:340,marginLeft:17,backgroundColor:"black",width:330,height:50,borderRadius:5,alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"white",fontSize:17,fontWeight:500}}>Update</Text>

        </TouchableOpacity>
    </View>
  )
}

export default Password

const styles = StyleSheet.create({})