import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Login Page'>
        <Stack.Screen name ="Login Page" component={LoginScreen} />
        <Stack.Screen name ="Register Page" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

