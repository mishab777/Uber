import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Hometab from './Hometab';
import Services from './Services';
import Account from './Account';
import Activity from './Activity';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
     <Tab.Screen name="Homtab" component={Hometab}  options={{
            tabBarLabel: 'Home',
            tabBarLabelStyle:{color:"black"},
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/home.png')} 
                style={{ width: 25, height: 25, tintColor: focused ? 'black' : 'gray' }}
              />
            ),
          }}/>
    <Tab.Screen name="Services" component={Services} options={{
            tabBarLabel: 'Services',
            tabBarLabelStyle:{color:"black"},
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/menu.png')} 
                style={{ width: 25, height: 25, tintColor: focused ? 'black' : 'gray' }}
              />
            ),
          }}/>
    <Tab.Screen name="Activity" component={Activity} options={{
            tabBarLabel: 'Activity',
            tabBarLabelStyle:{color:"black"},
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/activity.png')} 
                style={{ width: 25, height: 25,tintColor: focused ? 'black' : 'gray' }}
              />
            ),
          }}/>
    <Tab.Screen name="Account" component={Account} options={{
            tabBarLabel: 'Account',
            tabBarLabelStyle:{color:"black"},
            tabBarIcon: ({ focused }) => (
              <Image
                source={require('./assets/user.png')} 
                style={{ width: 25, height: 25,tintColor: focused ? 'black' : 'gray' }}
              />
            ),
          }}/>
  </Tab.Navigator>
  )
}

export default Home

const styles = StyleSheet.create({})