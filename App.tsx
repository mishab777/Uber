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
import Now from './Now';
import LandingPage from './Landing1';
import RideOptionsCard from './RideOptionsCard';
import Intercity2 from './Intercity2';
import Uberac from './Uberac';
import Name from './Name';
import Phone from './Phone';
import Email from './Email';
import Password from './Password';

export const App = () => {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#8ADCFC"/>
      <SafeAreaProvider>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="Landingpage" component={LandingPage} options={{headerShown:false}}/> */}
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Intercity" component={Intercity} />
      <Stack.Screen name="Ride" component={Ride} />
      <Stack.Screen name="Maplocation" component={Maplocation} />
      <Stack.Screen name="Travel" component={Travel} />
      <Stack.Screen name="Now" component={Now} />
      <Stack.Screen name="Intercity2" component={Intercity2} />
      <Stack.Screen name="uberac" component={Uberac} />
      <Stack.Screen name="name" component={Name} />
      <Stack.Screen name="phone" component={Phone} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="email" component={Email} />
      <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
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