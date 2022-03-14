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
import Tabs from '../Navigations/Tabs';
import RecipeTabs from '../Navigations/RecipeTabs';

const Tab = createBottomTabNavigator();

const OptionTabs = () => {
  return (
        <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Food Recipe Section") {
            iconName = focused ? "pizza" : "pizza";
          } else if (route.name === "Food Delivery Section") {
            iconName = "fast-food-outline";
          } else if (route.name === "Setting Page") {
            iconName = focused ? "settings" : "settings";
          }

          return <Ionicons color={color} name={iconName} size={size} />;
        },
        tabBarActiveTintColor: "teal",
        tabBarInactiveTintColor: "black",
      })}
    >
            <Tab.Screen name ="Food Recipe Section" options={{ header: ()=> null}} component={RecipeTabs} />
            <Tab.Screen name ="Food Delivery Section" options={{ header: ()=> null}} component={Tabs} />
        </Tab.Navigator>
  );
};

export default OptionTabs;