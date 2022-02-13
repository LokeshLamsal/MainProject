import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const FoodDetailsScreen = ({navigation}) => {
  return (
    <View>
      <Button 
      title="Go to Check out screen" 
      onPress={() =>{
        navigation.navigate("Check Out")
        }} 
      />
    </View>
  );
};

export default FoodDetailsScreen;

const styles = StyleSheet.create({});
