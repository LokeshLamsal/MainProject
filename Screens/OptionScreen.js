import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

const OptionScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{
              textAlign: 'center',
              fontWeight: "bold",
              fontSize: 20,
              borderBottomWidth:2,
              paddingRight: 10,
              paddingTop: 10,
            }}>Please select one option !!
      </Text>
      <Button 
      title="Recipe Section" 
      onPress={() =>{
        navigation.navigate("Recipe Home")
      }}
      />
      
      <Button title="Food Delivery Section" 
      onPress={() =>{
        navigation.navigate("Food Home")}}/>
    </View>
  );
};

export default OptionScreen;

const styles = StyleSheet.create({});
