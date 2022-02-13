import {Text, Button, View,  height, TouchableOpacity, ImageBackground,StatusBar } from 'react-native'
import React from 'react'
import {Image} from 'react-native-elements';
import { ActivityIndicator } from "react-native";
import Center from '../Components/Center';

const GreetingScreen = ({navigation}) => {
        return(
          <>
            <Center>
            
            <Text style={{
                marginBottom: 700,
                fontWeight: "bold",
                fontSize: 16,
                marginLeft: 7
              }}>Welcome To Food Recipe And Food Delivery App</Text>

            {/* <Image
              source={{
              uri: "https://i.pinimg.com/474x/f3/70/7d/f3707de03e23027aff9f43a1afc5422a--stockphotos-medicinal-herbs.jpg",
              }}
                style={{
                width: 400,
                height: 500,
                }}
                  containerStyle={{
                  marginBottom: 800,
                  }}
                  PlaceholderContent={<ActivityIndicator size="large" />}
            /> */}

            <Button 
              title="Let's Start" 
              onPress={() =>{navigation.navigate("Login Page")}}
              containerStyle={{
                  width: '100%',
                  marginVertical: 10,
                  }}
                  />
            </Center>
            </>
            )}

export default GreetingScreen
