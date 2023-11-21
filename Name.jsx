import { StyleSheet, Text, View ,Image,TouchableWithoutFeedback,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'


const Name = () => {
  
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleback = () => {
    navigation.navigate('uberac');
  };

  const handleClearFirstName = () => {
    setFirstName('');
  };

  const handleClearLastName = () => {
    setLastName('');
  };
  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
        <TouchableWithoutFeedback onPress={handleback}>
        <View style={{marginLeft:10,width:200,height:50,alignItems:"center",justifyContent:"space-evenly",flexDirection:"row"}}>
            <Image style={{width:20,height:20}} source={require("./assets/arrow.png")}/>
            <Text style={{color:"black",fontSize:18}}>Uber Account</Text>

        </View>
        </TouchableWithoutFeedback>
        <View style={{width:90,alignItems:"center",justifyContent:"center",height:60}}>
            <Text style={{fontSize:25,color:"black",fontWeight:600,}}>Name</Text>
        </View>
        <View style={{marginLeft:10,width:"95%",alignItems:"flex-start",justifyContent:"center",height:60}}>
            <Text style={{fontSize:15}}>This is the name you would like other people to use when referring to you</Text>
        </View>
        <View style={{marginLeft:15,width:"100%",justifyContent:"space-evenly",flexDirection:"column",alignItems:"flex-start",height:180}}>
          <Text style={{color:"black",fontSize:15}}>First Name</Text>
          <View style={{width:"90%",height:45,backgroundColor:"#e3e3e3",borderRadius:7,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
          <TextInput style={{width:280,height:45,backgroundColor:"#e3e3e3",borderRadius:7,fontSize:16}} value={firstName}
            onChangeText={(text) => setFirstName(text)}/>
          {firstName !== '' && (
            <TouchableOpacity onPress={handleClearFirstName}>
              <Image style={{ width: 20, height: 20 }} source={require('./assets/clear.png')} />
            </TouchableOpacity>
          )}
          </View>
          <Text style={{color:"black",fontSize:15}}>Last Name</Text>
          <View style={{width:"90%",height:45,backgroundColor:"#e3e3e3",borderRadius:7,flexDirection:"row",justifyContent:"space-evenly",alignItems:"center"}}>
          <TextInput style={{width:280,height:45,backgroundColor:"#e3e3e3",borderRadius:7,fontSize:16}}  value={lastName}
            onChangeText={(text) => setLastName(text)}/>
          {lastName !== '' && (
            <TouchableOpacity onPress={handleClearLastName}>
              <Image style={{ width: 20, height: 20 }} source={require('./assets/clear.png')} />
            </TouchableOpacity>
          )}
          </View>
        </View>
        <TouchableOpacity style={{bottom:-120,marginLeft:17,backgroundColor:"black",width:330,height:50,borderRadius:5,alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"white",fontSize:17,fontWeight:500}}>Update</Text>

        </TouchableOpacity>
    </View>
  )
}

export default Name

const styles = StyleSheet.create({})