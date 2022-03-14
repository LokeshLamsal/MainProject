import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from '../Screens/SettingScreen';
import { Ionicons } from '@expo/vector-icons'
import RecipeStack from './RecipeStack';
import RecipeSearchPage from '../Screens/RecipeSearchPage';

const Tab = createBottomTabNavigator();

const RecipeTabs = () => {
  return (
        <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name === "Recipe Home") {
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
            <Tab.Screen name ="Recipe Home" options={{ header: ()=> null}} component={RecipeStack} />
            <Tab.Screen name ="Search Page" component={RecipeSearchPage} />
            <Tab.Screen name ="Setting Page" component={SettingScreen} />
        </Tab.Navigator>
  );
};

export default RecipeTabs;


