import React, { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import Center from '../Components/Center';
import { Input} from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import axios from 'axios';
import { $axios } from "../Lib/axios";

import { Alert } from 'react-native';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  mobile: Yup.string().max(10, 'Enter 10 digits mobile numbers').required(),
  password: Yup.string().required(),
  // validating password and confirm password with error message
  confirmPassword: Yup.string().required().oneOf([Yup.ref("password")],"Password and confirm password fields does not match."),
});

const RegisterScreen = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Center>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={async (data, {resetForm, setFieldError}) => {
          setLoading(true)
          const apiData = {
            ...data, 
            name: `${data.firstName} ${data.lastName}`,
          };
          delete apiData.firstName;
          delete apiData.lastName;

          try {
            await $axios.post("/register", apiData);
            Alert.alert(
              "Successfully registered!",
              "Your registration was successful.",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }]
            );
          } catch(error){
            if (error.response.status === 409){
              setFieldError(
                "email",
                "The email you're trying to register already exists!"
              );
            }else{
              Alert.alert(
                "Alert",
                "An unknown error was occurred. Please contact admin or try again later!",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }]
              );            }           
          } finally{
            setLoading(false);
          }
        }}
        validationSchema={validationSchema}
      >
        {({handleSubmit, handleChange, errors, touched, handleBlur}) => {
          return(            
          <>          
          <Input 
          label='First Name' 
          onChangeText={handleChange('firstName')}
          errorMessage={touched.firstName && errors.firstName}
          onBlur={handleBlur('firstName')}/>
          
          <Input 
          label='Last Name' 
          onChangeText={handleChange('lastName')}
          errorMessage={touched.lastName && errors.lastName}
          onBlur={handleBlur('lastName')}/>
          
          <Input 
          label='E-mail' 
          onChangeText={handleChange('email')}
          errorMessage={touched.email && errors.email}
          onBlur={handleBlur('email')}/>
          
          <Input 
          label='Mobile Number' 
          onChangeText={handleChange('mobile')}
          errorMessage={touched.mobile && errors.mobile}
          onBlur={handleBlur('mobile')}/>
          
          <Input 
          label='Password'
          placeholder='Secret' 
          secureTextEntry
          onChangeText={handleChange('password')}
          errorMessage={touched.password && errors.password}
          onBlur={handleBlur('password')}/>

          <Input 
          label='Cofirm Password'
          placeholder='Secret' 
          secureTextEntry
          onChangeText={handleChange('confirmPassword')}
          errorMessage={touched.confirmPassword && errors.confirmPassword}
          onBlur={handleBlur('confirmPassword')}/> 
          
          <Button title="Register"
          onPress={handleSubmit}
          containerStyle={{
            width: '100%',
            marginTop: 11,
          }} buttonStyle={{
            backgroundColor: "#00539CFF",
            marginBottom: 150,
          }}
          loading={loading}
          />
        </> 
          );        
        }}
      </Formik>
    </Center>
  );
};

export default RegisterScreen;
