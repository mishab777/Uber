import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from './slices/navSlice'


const data = [{
    id:"123",
    title:"Get a ride",
    image:"http://links.papareact.com/3pn",
    screen:"MapScreen"
},{
    id:"456",
    title:"Order food",
    image:"http://links.papareact.com/28w",
    screen:"EatScreen"
}]


const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
  return (
   <FlatList
   horizontal
   data={data}
   keyExtractor={(item)=> item.id}
   renderItem={({item})=>(
    <TouchableOpacity style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`} onPress={()=> navigation.navigate(item.screen)} disabled={!origin}>
        <View style={tw `${!origin && "opacity-20"}`}>
            <Image style={{width:120,height:120,resizeMode:"contain"}} source={{uri:item.image}}/>
        </View>
        <Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
<View style={{width:40,height:40,backgroundColor:"black",borderRadius:20,top:10,alignItems:"center",justifyContent:"center"}}>
    <Image style={{width:20,height:20}} source={require("./assets/right.png")}/>

</View>
    </TouchableOpacity>
   )}
   
   />
  )
}

export default NavOptions

const styles = StyleSheet.create({})