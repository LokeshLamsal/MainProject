import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Center from '../Components/Center';
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { Button } from 'react-native-elements';

const SettingScreen = ({navigation}) => {
  const dispatch = useDispatch()
  return (
    <Center>
      <Button title="Log Out" 
          type='clear'
          onPress={() => {dispatch(logout());
          }} 
          />
    </Center>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});
