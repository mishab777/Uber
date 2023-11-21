import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React, {useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'



const Now = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const navigation = useNavigation();

    const handleclose = () =>{
        navigation.navigate("Home");

    }
    useEffect(() => {
        const updateDateTime = () => {
          const now = new Date();
          const dateOptions = { weekday: 'short', day: 'numeric', month: 'short' };
          const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
    
          const formattedDate = now.toLocaleDateString('en-US', dateOptions);
          const formattedTime = now.toLocaleTimeString('en-US', timeOptions);
    
          setCurrentDate(formattedDate);
          setCurrentTime(formattedTime);
        };
    
        updateDateTime();
        const intervalId = setInterval(updateDateTime, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, []);

  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
        <TouchableOpacity onPress={handleclose}>
        <View style={{width:70,height:60,alignItems:"center",justifyContent:"center"}}>
            <Image style={{width:20,height:20}} source={require("./assets/delete.png")}/>

        </View>
        </TouchableOpacity>
        <View style={{width:"100%",height:100,alignItems:"center",justifyContent:"space-evenly",flexDirection:"column"}}>
            <Text style={{fontSize:34,fontWeight:"bold",color:"black"}}>When do you want</Text>
            <Text style={{fontSize:34,fontWeight:"bold",color:"black"}}>to be picked up?</Text>


        </View>
        <View style={{width:"100%",height:90,alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:18,color:"black"}}>{currentDate}</Text>

        </View>
        <View style={{width:"100%",height:80,alignItems:"center",justifyContent:"center"}}>
            <Text style={{fontSize:17,color:"black"}}>{currentTime}</Text>

        </View>
        <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:70,borderBottomColor:"#e8e6e6",borderBottomWidth:1,borderStyle:"dashed"}}>
        <Image style={{width:25,height:25}} source={require("./assets/time.png")}/>
        <View style={{width:"80%",alignItems:"flex-start"}}>
        <Text style={{fontSize:15}}>Choose your exact pickup time up to 90 days in advance</Text>
        </View>

      </View>
      <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:70,borderBottomColor:"#e8e6e6",borderBottomWidth:1,borderStyle:"dashed"}}>
        <Image style={{width:25,height:25}} source={require("./assets/glass.png")}/>
        <View style={{width:"80%",alignItems:"flex-start"}}>
        <Text style={{fontSize:15}}>Extra wait time included to meet your trip</Text>
        </View>

      </View>
      <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly",height:70,borderBottomColor:"#e8e6e6",borderBottomWidth:1,borderStyle:"dashed"}}>
        <Image style={{width:25,height:25}} source={require("./assets/cancel.png")}/>
        <View style={{width:"80%",alignItems:"flex-start"}}>
        <Text style={{fontSize:15}}>Cancel at no charge upto 60 minutes in advance</Text>
        </View>

      </View>
      <View style={{width:120,height:80,alignItems:"center",justifyContent:"center"}}>
        <Text style={{textDecorationLine:"underline",color:"black",fontSize:16,fontWeight:600}}>See terms</Text>

      </View>
      <View style={{height:82}}>

      </View>
      <TouchableOpacity style={{marginLeft:17,backgroundColor:"black",width:330,height:50,borderRadius:5,alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"white",fontSize:16,fontWeight:"600"}}>Set pickup time</Text>

        </TouchableOpacity>
    </View>
  )
}

export default Now

const styles = StyleSheet.create({})