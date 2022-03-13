import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FoodHomeScreen from '../Screens/FoodHomeScreen';
import SearchScreen from '../Screens/SearchScreen';
import SettingScreen from '../Screens/SettingScreen';
import { Ionicons } from '@expo/vector-icons'
import AppStack from './AppStack';
import RecipeHomePage from '../Screens/RecipeHomePage';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
        <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Food Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Search Page") {
            iconName = "search";
          } else if (route.name === "Setting Page") {
            iconName = focused ? "settings" : "settings";
          }

          return <Ionicons color={color} name={iconName} size={size} />;
        },
        tabBarActiveTintColor: "teal",
        tabBarInactiveTintColor: "black",
      })}
    >
            <Tab.Screen name ="Recipe Page" component={RecipeHomePage} />
            <Tab.Screen name ="Food Home" options={{ header: ()=> null}} component={AppStack} />
            <Tab.Screen name ="Search Page" component={SearchScreen} />
            <Tab.Screen name ="Setting Page" component={SettingScreen} />
        </Tab.Navigator>
  );
};

export default Tabs;


