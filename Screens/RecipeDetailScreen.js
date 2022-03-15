import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { foodStyles } from '../Styles/baseStyles';
import { Ionicons } from "@expo/vector-icons";
import { Button, Image } from "react-native-elements";
import { useDispatch, useSelector } from 'react-redux';


const RecipeDetailScreen = ({route}) => {
  const Recipe = route.params;



  return (
    <ScrollView>
      <Image source={{
            uri: Recipe.picture,
        }}
        resizeMode = "contain"
        style={{
            width: "100%",
            height: 250,
        }} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{Recipe.name}</Text>
          <Text style={{
              padding: 10,
              fontWeight: "bold",
          }}>Recipe for making {Recipe.name} are as follows: </Text>
          <Text>{Recipe.ingredients}</Text>

        </View>
    </ScrollView>
  );
};

export default RecipeDetailScreen;

const styles = StyleSheet.create({
  textContainer: {
    padding: 10,
  },
  title: foodStyles.title,
  price: foodStyles.price,
  button:{
    marginVertical: 20,
  }
  });
