import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { foodStyles } from '../Styles/baseStyles';
import { Ionicons } from "@expo/vector-icons";
import { Button, Image } from "react-native-elements";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';


const FoodDetailsScreen = ({route}) => {
  const state = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const food = route.params;

const handleAddToCart = () =>{
  const FoodToAdd = {
    id: Math.random(),
    name: food.name,
    pricePerItem: food.price,
    totalPrice: food.price,
    quantity: 1,
    image: food.pricture,
  };
  dispatch(addToCart(FoodToAdd));

  Alert.alert("Food successfully added to cart", "");
  };

  return (
    <ScrollView>
      <Image source={{
            uri: food.picture,
        }}
        resizeMode = "contain"
        style={{
            width: "100%",
            height: 250,
        }} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{food.name}</Text>
          <Button
          title="Add to cart"
          style= {styles.button}
          icon = {<Ionicons style={{marginRight: 10}} name="cart-outline" size ={25} color="white"/>}
          onPress = {handleAddToCart}
          iconPosition = "left"
          
          
          />
          <Text>{food.description}</Text>
          <Text style ={styles.price}>Rs.{food.price}</Text>
        </View>
    </ScrollView>
  );
};

export default FoodDetailsScreen;

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
