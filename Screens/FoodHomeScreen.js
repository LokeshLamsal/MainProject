import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

const FoodHomeScreen = ({navigation}) => {
  return (   
    <View>   
      <Button 
      title="Go to food details screen" onPress={() =>{navigation.navigate("Food Details")}} />
    </View>
  );
};

export default FoodHomeScreen;


