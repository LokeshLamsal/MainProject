import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeHomePage from '../Screens/RecipeHomePage';
import RecipeSearchPage from '../Screens/RecipeSearchPage';
import RecipeDetailScreen from '../Screens/RecipeDetailScreen';



const Stack = createNativeStackNavigator();
const RecipeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
            <Stack.Screen name ="Recipe Home Screen" component={RecipeHomePage} />
            <Stack.Screen name ="Recipe Search Screen" component={RecipeSearchPage} />
            <Stack.Screen name ="Recipe Detail Screen" component={RecipeDetailScreen} />
    </Stack.Navigator>
  );
};

export default RecipeStack;

