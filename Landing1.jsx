import React, { useEffect } from 'react';
import { View, Text, StatusBar } from 'react-native';

const LandingPage = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 2000); 

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:"black"}}>
        <StatusBar backgroundColor='black' barStyle='light-content'/>
      <Text>Landing Page</Text>
    </View>
  );
};

export default LandingPage;
