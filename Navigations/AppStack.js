import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodHomeScreen from '../Screens/FoodHomeScreen';
import FoodDetailsScreen from '../Screens/FoodDetailsScreen';
import CartScreen from '../Screens/CartScreen';
import { Icon, Badge} from "react-native-elements";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import CheckOutScreen from '../Screens/CheckOutScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import SuccessScreen from '../Screens/SuccessScreen';




const Stack = createNativeStackNavigator();
const AppStack = ({navigation}) => {
  const { items } = useSelector((state) => state.cart);
  return (
    <Stack.Navigator
    screenOptions={{
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Cart Screen");
          }}
        >
          <Icon name="cart-sharp" type="ionicon" />
          {items.length > 0 && (
            <Badge
              containerStyle={{
                position: "absolute",
                top: -6,
                right: -10,
              }}
              // Display whatever amount of items we have in cart:
              value={items.length}
              status="error"
            />
          )}
        </TouchableOpacity>
      ),
  
    }}>
            {/* <Stack.Screen name ="Login Page" component={LoginScreen} />
            <Stack.Screen name ="Register Page" component={RegisterScreen} />
            <Stack.Screen name ="Option" component={OptionScreen} />
            <Stack.Screen name ="Recipe" component={Recipe} /> */}
            <Stack.Screen name ="Food Home Page" component={FoodHomeScreen} />
            <Stack.Screen name ="Food Details" component={FoodDetailsScreen} />
            <Stack.Screen name ="Cart Screen" component={CartScreen} />
            <Stack.Screen name ="Checkout Screen" component={CheckOutScreen} />
            <Stack.Screen name ="Payment Screen" component={PaymentScreen} />
            <Stack.Screen name ="Success" component={SuccessScreen} />


        </Stack.Navigator>
  );
};

export default AppStack;

