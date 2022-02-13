import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import GreetingScreen from '../Screens/GreetingScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Greeting Page'>
        <Stack.Screen name ="Greeting Page" component={GreetingScreen} />
        <Stack.Screen name ="Login Page" component={LoginScreen} />
        <Stack.Screen name ="Register Page" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

