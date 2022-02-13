import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Center from '../Components/Center';
import { Input} from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  mobileNo: Yup.string().max(10, 'Enter 10 digits mobile numbers').required(),
  password: Yup.string().required(),
  // validating password and confirm password with error message
  confirmPassword: Yup.string().required().oneOf([Yup.ref("password")],"Password and confirm password fields does not match."),
});

const RegisterScreen = () => {
  const handleSubmit = (data) => {
    console.log("Submitted data's are:", data)
  };
  return (
    <Center>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobileNo: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleSubmit}
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
          onChangeText={handleChange('mobileNo')}
          errorMessage={touched.mobileNo && errors.mobileNo}
          onBlur={handleBlur('mobileNo')}/>
          
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
          />
        </> 
          );        
        }}
      </Formik>
    </Center>
  );
};

export default RegisterScreen;
