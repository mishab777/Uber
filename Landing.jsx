import { StyleSheet, Text, View,Image,TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Landing = () => {
    const navigation = useNavigation();

    const handle =()=>{
        navigation.navigate("Home");
    }

  return (
    <View style={styles.main}>
                <StatusBar barStyle="light-content" backgroundColor="#306CEE"/>
        <Text style={{color:"white",fontSize:40,fontWeight:"500",letterSpacing:1}}>uber</Text>
        <Image style={{width:180,height:180}} source={require("./assets/safety.png")}/>
        <Text style={{color:"white",fontWeight:"bold",fontSize:35}}>Move with Safety</Text>
        <TouchableOpacity onPress={handle}>
        <View style={styles.get}>
            <Text style={{color:"white",fontSize:17}}>Get Started</Text>
            <Image style={{width:20,height:20}} source={require("./assets/right.png")}/>
        </View>
        </TouchableOpacity>
    </View>
  )
}

export default Landing

const styles = StyleSheet.create({
    main:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"space-evenly",
        backgroundColor:"#306CEE"
    },
    get:{
        width:"90%",
        height:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        backgroundColor:"black",
        borderRadius:6,
        top:70
    }
})