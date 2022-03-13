import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Icon, Image } from "react-native-elements";
import { foodStyles } from '../Styles/baseStyles';
import { useDispatch } from 'react-redux';
import { decreaseQuantity } from '../redux/slices/CartSlice';
import { increaseQuantity } from '../redux/slices/CartSlice';
import { deleteItem } from '../redux/slices/CartSlice';


const CartItem = ({item}) => {
  const dispatch = useDispatch();
  return (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
      }}>
     {/* //Product details area */}
      <View  style={{
          flexDirection: "row",
          width: "40%",
        }}>
      <Image source={{
            uri: item.picture,
        }}
        style={{
            width: 100,
            height: 100,
            marginRight: 10,
        }} />
        
        <View>
          <Text style={foodStyles.title}>{item.name}</Text>
          <Text
                style={[
                  foodStyles.price,
                  {
                    marginVertical: 0,
                  },
                ]}
              >
               ${item.totalPrice}
              </Text>
        </View>
      </View>
      {/* Quantity area */}
      <View style={{
        flexDirection: "row",
        alignItems: "center",
      }}>
        <Button
          icon={<Icon name="delete" color="tomato" />}
          type="clear"
          onPress={() => {
            // Show confirmation dialog to ensure deletion process.
            Alert.alert(`${item.name} will be deleted!`, "Are you sure?", [
              {
                text: "Yes",
                // If use presses yes:
                onPress: () => {
                  dispatch(deleteItem(item.id));
                },
              },
              {
                text: "Cancel",
              },
            ]);
          }}
        />
        <Button title="+" onPress={() => dispatch(increaseQuantity(item.id))} />
        <Text style={{
          marginHorizontal: 5,
        }}>{item.quantity}</Text>
        <Button title="-" onPress={() => dispatch(decreaseQuantity(item.id))}/>
      </View>

      </View>
  )
}

export default CartItem

const styles = StyleSheet.create({})