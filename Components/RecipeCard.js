import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/core";


const RecipeCard = ({Recipe}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => {
      navigation.navigate("Recipe Detail Screen", Recipe);
    }}>
        <Image source={{
            uri: Recipe.picture,
        }}
        style={{
            width: "100%",
            height: 250,
        }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{Recipe.name}</Text>
        <Text numberOfLines={3}>{Recipe.ingredients}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RecipeCard

const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        marginTop: 10,
        marginVertical: 5,
        fontSize: 25,   
    },
    textContainer: {
        padding: 10,
        marginBottom: 1,
    },
    cardContainer: {
        width: "50%",
        flex: 1,
        borderColor: "teal",
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 5,
        marginHorizontal: 5, 
        overflow: "hidden",
    },
    price:{
         fontWeight: "bold",
         fontSize: 25,
         marginVertical: 10,
    }
})