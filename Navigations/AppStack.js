import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import OptionScreen from '../Screens/OptionScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import Recipe from '../Screens/Recipe';
import FoodHomeScreen from '../Screens/FoodHomeScreen';
import FoodDetailsScreen from '../Screens/FoodDetailsScreen';
import CheckOutScreen from '../Screens/CheckOutScreen';

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
        <Stack.Navigator initialRouteName="Login Page">
            {/* <Stack.Screen name ="Login Page" component={LoginScreen} />
            <Stack.Screen name ="Register Page" component={RegisterScreen} />
            <Stack.Screen name ="Option" component={OptionScreen} />
            <Stack.Screen name ="Recipe" component={Recipe} /> */}
            <Stack.Screen name ="Food Home Page" component={FoodHomeScreen} />
            <Stack.Screen name ="Food Details" component={FoodDetailsScreen} />
            <Stack.Screen name ="Check Out" component={CheckOutScreen} />
        </Stack.Navigator>
  );
};

export default AppStack;

