import React, { useState } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import Center from '../Components/Center';
import { Input, Image,Text } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { $axios } from "../Lib/axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { View } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { foodStyles } from '../Styles/baseStyles'


const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const LoginScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  const getLoggedInUser = async (token) => {
    try{
      const response = await $axios.get("/auth/user");
      return response.data;
    }catch(error){
      console.log(error.response.data);
    }
}

  

  const handleLogin = async (values) => {
    try{
      setLoading(true)
      const response = await $axios.post("/auth/login", values);
      
      const user = await getLoggedInUser(response.data.accessToken);
      await AsyncStorage.setItem("accessToken", response.data.accessToken); 
      dispatch(login({user}));

    }catch(error){
      console.log(error.response.data);
    }finally{
      setLoading(false)
    }
  }
  return (
    <Center>
      <Image source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6H11iEMC2NL3r7RCysadn6GW7_uOBZmYGd_4S6uo38Ei5FaKuWrfZRrPpqz9zqvYOfs&usqp=CAU"
      }}style={{
        width: 400,
        height: 250,
        marginTop: 2,
      }}containerStyle={{
        marginTop: -250,
        marginBottom: 50,
      }}
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
      >
        {({handleSubmit, handleChange, errors, touched, handleBlur}) => {
          return(
            <>          
          <Input 
          placeholder='lokesh@gmail.com' 
          label='E-mail' 
          onChangeText={handleChange('email')}
          errorMessage={touched.email && errors.email}
          onBlur={handleBlur('email')}/>
          
          <Input 
          placeholder='Secret' 
          secureTextEntry 
          label='Password' 
          onChangeText={handleChange('password')}
          errorMessage={touched.password && errors.password}
          onBlur={handleBlur('password')}/>
          
          <Button title="Login"
          onPress={handleSubmit}
          containerStyle={{
            width: '100%',
            marginTop: 11,
          }} buttonStyle={{
            backgroundColor: "#00539CFF",
          }}
          loading = {loading}
          />
          <Button title="Not a user ? Register Now." 
          type='clear'
          onPress={() =>{navigation.navigate("Register Page")}} 
          />
        </> 
          );        
        }}
      </Formik>
    </Center>
  );
};

export default LoginScreen;
