import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Image } from "react-native-elements";
import { foodStyles } from '../Styles/baseStyles';
import CartItem from '../Components/CartItem';
import { useSelector } from 'react-redux';
import Center from '../Components/Center';

const CartScreen = ({navigation}) => {
  const {items} = useSelector((state)=> state.cart);
  return (
    <View style={styles.container}>
      {items.length === 0 ? (
        <Center>
          <Text>Your cart is empty. Add Foods and come back here.</Text>
        </Center>
      ) : (
        <>
         <ScrollView style={styles.scrollContainer}>
      {
        items.map((item) => (<CartItem key = {item.id} item = {item}/>))
      }
      </ScrollView>
      {/* Total price */}
      <View style={styles.totalPriceContainer}>
        <Text style={foodStyles.title}>Total Price</Text>
        <Text style={[
          foodStyles.price,
          {
            marginVertical: 0,
          },
          ]}
          >
          ${items.reduce((acc, val) => acc + val.totalPrice, 0)}
          </Text>
        
      </View>
      <Button
          title="Checkout"
          onPress={() => navigation.navigate("Checkout Screen")}
        />
         </>)
    }
    
    
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  totalPriceContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 250,
    justifyContent: "space-between",
  },
})