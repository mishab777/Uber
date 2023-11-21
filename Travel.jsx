import { StyleSheet, Text, View,Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const Travel = () => {
  return (
    <View style={{backgroundColor:"white"}}>
        <View style={{
            width:180,
            height:60,
            flexDirection:"row",
            alignItems:'center',
            justifyContent:"space-evenly"
        }}>
            <Image style={{width:22,height:22}} source={require("./assets/arrow.png")}/>
            <Text style={{fontSize:18,color:"black"}}>Uber Travel</Text>

        </View>
        <Image style={{width:"100%",height:200}} source={{uri:'https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/03/eyJwYXRoIjoicG9zdG1hdGVzXC9maWxlXC92ZENIdm9zcWNOYkRFWEZFRzNCMy5haSJ9_postmates_OuG2_1GcJdco4_NStoOgBIXfhgJhKbR5WarlfI0kQI4-1024x351.png'}}/>
        <View style={{width:"100%",height:60,alignItems:"center",justifyContent:"center"}}>
        <Text style={{textAlign:"center",fontSize:25,color:"black",fontFamily:"sans-serif-medium"}}>Meet your travel assistant</Text>
        </View>
        <View style={{width:"100%",height:60,alignItems:"center",justifyContent:"center",padding:6}}>
            <Text style={{fontSize:15,letterSpacing:1}}>Gather and track all of your travel details automatically in one place with uber travel</Text>
        </View>
        <View style={{width:"100%",flexDirection:"row",alignItems:"center",height:280,}}>
            <View style={{width:"20%",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:40,height:40,borderRadius:20,backgroundColor:"black",alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"white"}}>1</Text>

                </View>
                <View style={{width:2,height:50,backgroundColor:"black"}}>

                </View>
                <View style={{width:40,height:40,borderRadius:20,backgroundColor:"black",alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"white"}}>2</Text>

                </View>
                <View style={{width:2,height:50,backgroundColor:"black"}}>

                </View>
                <View style={{width:40,height:40,borderRadius:20,backgroundColor:"black",alignItems:"center",justifyContent:"center"}}>
                    <Text style={{color:"white"}}>3</Text>

                </View>


            </View>
            <View style={{width:"80%",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}}>
                <View style={{width:"90%",height:80,flexDirection:"column",justifyContent:"space-evenly",alignItems:"flex-start"}}>
                    <Text style={{color:"black",fontSize:15}}>Link your email</Text>
                    <Text style={{fontSize:13}}>We'll import all your travel bookings from the past 90 days</Text>


                </View>
                <View style={{width:"90%",height:80,flexDirection:"column",justifyContent:"space-evenly",alignItems:"flex-start"}}>
                    <Text style={{color:"black",fontSize:15}}>Review your trip details</Text>
                    <Text style={{fontSize:13}}>we'll oragnize all your trips,so you can quickly review and manage them</Text>


                </View>
                <View style={{width:"90%",height:80,flexDirection:"column",justifyContent:"space-evenly",alignItems:"flex-start"}}>
                    <Text style={{color:"black",fontSize:15}}>Get 10% cash back</Text>
                    <Text style={{fontSize:13}}>Save when you book an eligible ride</Text>


                </View>

            </View>

        </View>
        <TouchableOpacity style={{marginLeft:17,backgroundColor:"black",width:330,height:45,borderRadius:5,alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"white",fontSize:15}}>Link email</Text>

        </TouchableOpacity>
        <TouchableWithoutFeedback>
        <View style={{height:50,width:"100%",alignItems:"center",justifyContent:'center'}}>
            <Text style={{color:"black",fontSize:16}}>Continue without linking</Text>
        </View>
        </TouchableWithoutFeedback>
    </View>
  )
}

export default Travel

const styles = StyleSheet.create({})