import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { foodStyles } from '../Styles/baseStyles'
import { Button } from 'react-native-elements'
import { useSelector } from "react-redux";
import { $axios } from '../Lib/axios';
import { useStripe } from '@stripe/stripe-react-native';
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/slices/CartSlice';

const PaymentScreen = ({ navigation: { navigate }, route }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  
  const checkoutInfo = route.params;
  const {
    auth: { user },
    cart: { items },
  } = useSelector((store) => store);

  const totalPrice = items.reduce((acc, val) => acc + val.totalPrice, 0);
  
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const getSecretKeyFromStripe = async () => {
    setLoading(true);
    try{
    const response = await $axios.post("/stripe/create-payment-intent", {
      totalPrice: totalPrice * 100,
    });
    return response.data.clientSecret;
    } catch(error){
      console.log(error.response);
    }finally{
      setLoading(false);
    }
  }
  const handlePayment = async () => {
    try {
      // Get the secret key from server & stripe
      const clientSecret = await getSecretKeyFromStripe();

      // Initialize the payment sheet
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
      });

      if (error) {
        console.log(error);
        setLoading(false);
      } else {
        // If initialization was successfull...
        console.log("successful initialization");

        // Now we can present the payment sheet
        const { error } = await presentPaymentSheet({ clientSecret });
        if (error) {
          console.log("Payment failed");
          setLoading(false);
        } else {
          // At this point, payment has been successfull...
          // So, we can create the order..
          await handleCompleteOrder(1);
          console.log("Payment successful");
        }
      }
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

 
  const handleCompleteOrder = async (paymentType) => {
    setLoading(true);
    try {
      const response = await $axios.post("/orders", {
        checkoutInfo,
        items,
        paymentType,
        totalPrice,
        user,
      });
      console.log(response.data);
      dispatch(clearCart());

      navigate("Success");
    } catch (error) {
      console.log(error.response);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={foodStyles.container}>
      <Text style={{
        fontWeight: "bold",
      }}>Please Choose Your Payment Method</Text>
      <View>
      <Button title="Pay Now" 
      style={{marginVertical: 10}}
      onPress = {handlePayment}
      loading={loading}
      />

      <Button title="Cash On Delivery"
      onPress={() => handleCompleteOrder(2)}
      loading={loading}
      /> 
      </View>

    </View>
  )
}

export default PaymentScreen

const styles = StyleSheet.create({})