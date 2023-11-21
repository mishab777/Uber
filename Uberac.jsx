import { StyleSheet, Text, View,TouchableWithoutFeedback,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Info from './Info';
import Security from './Security';

const Tab = createMaterialTopTabNavigator();

const Uberac = () => {
    const navigation = useNavigation();

    const handleback = ()=>{
        navigation.navigate("Account");
    }
   
  return (
    <View style={{flex:1,backgroundColor:"white",height:"100%"}}>
         <TouchableWithoutFeedback onPress={handleback}>
        <View style={{marginLeft:10,width:200,height:50,alignItems:"center",justifyContent:"space-evenly",flexDirection:"row"}}>
            <Image style={{width:20,height:20}} source={require("./assets/arrow.png")}/>
            <Text style={{color:"black",fontSize:18}}>Uber Account</Text>

        </View>
        </TouchableWithoutFeedback>
    <Tab.Navigator   tabBarOptions={{
        indicatorStyle: { backgroundColor: 'gray'},
      }}>
      <Tab.Screen name="info" component={Info} options={{tabBarLabel:'Account info'}}/>
      <Tab.Screen name="Security" component={Security} options={{tabBarLabel:'Security'}}/>
    </Tab.Navigator>
    </View>
  )
}

export default Uberac

const styles = StyleSheet.create({})