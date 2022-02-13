import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Center from '../Components/Center';
import { Input, Image } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const LoginScreen = ({navigation}) => {
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
        onSubmit={(val) => console.log(val)}
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
          />
          <Button title="Not a user ? Register Now." 
          type='clear'
          onPress={() =>{navigation.navigate("Register Page")}} />
        </> 
          );        
        }}
      </Formik>
    </Center>
  );
};

export default LoginScreen;
