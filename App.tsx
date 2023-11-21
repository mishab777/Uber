import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './MapScreen';
import EatScreen from './EatScreen';
import Landing from './Landing';
import Hometab from './Hometab';
import Home from './Home';
import Intercity from './Intercity';
import Ride from './Ride';
import Maplocation from './Maplocation';
import Travel from './Travel';

export const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#8ADCFC"/>
      <SafeAreaProvider>
      <Stack.Navigator>
      <Stack.Screen name="Landing" component={Landing} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Intercity" component={Intercity} options={{headerShown:false}}/>
      <Stack.Screen name="Ride" component={Ride} options={{headerShown:false}}/>
      <Stack.Screen name="Maplocation" component={Maplocation} options={{headerShown:false}}/>
      <Stack.Screen name="Travel" component={Travel} options={{headerShown:false}}/>
      {/* <Stack.Screen name="EatScreen" component={EatScreen} options={{headerShown:false}}/> */}
    </Stack.Navigator>
      </SafeAreaProvider>
      </NavigationContainer>
      </Provider>


  )
}

export default App

const styles = StyleSheet.create({
  first:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  }
})