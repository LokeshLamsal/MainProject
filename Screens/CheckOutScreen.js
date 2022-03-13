import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {foodStyles} from '../Styles/baseStyles'
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from "react-native-elements";



const validationSchema = Yup.object({
  address: Yup.string().required(),
  contact: Yup.string().max(10, "Please check your phone number.").required(),
});

const CheckOutScreen = ({ navigation: { navigate } }) => {
  const items = useSelector((store) =>store.cart.items);
  const totalPrice = items.reduce((acc, val) => acc + val.totalPrice, 0);
  
  return (
    <View style = {foodStyles.container}>
      <View>
      <Text style = {foodStyles.title, {fontSize: 25, fontWeight: "bold"}}>Total Price: ${totalPrice}</Text>
      </View>
      <Formik
        initialValues={{
          address: "",
          contact: "",
        }}
        onSubmit={(submissionData) => {
          navigate("Payment Screen", submissionData);
        }}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, handleBlur, touched, errors }) => {
          return (
            <>
              <Input
                label="Shipping address"
                placeholder="Eg: Tinkune ,Kathmandu"
                onChangeText={handleChange("address")}
                onBlur={handleBlur("address")}
                errorMessage={touched.address && errors.address}
              />
              <Input
                label="Mobile Number"
                placeholder="98-xxxxxxxx"
                onChangeText={handleChange("contact")}
                onBlur={handleBlur("contact")}
                errorMessage={touched.contact && errors.contact}
              />
              <Button title="Proceed to Payment" onPress={handleSubmit} />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({});
