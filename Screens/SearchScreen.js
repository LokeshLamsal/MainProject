import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import { Input } from 'react-native-elements';
import { useState } from 'react';
import axios from 'axios';
import { $axios } from "../Lib/axios";

import { useSelector } from 'react-redux';
import FoodCard from '../Components/FoodCard';
import Center from '../Components/Center';


const SearchScreen = () => {
  const [query, setQuery] = useState("")

  const [loading, setLoading] = useState(false)
  const [foods, setFoods] = useState([])

  const token = useSelector(state => state.auth.token)

  const searchFood = async() => {
    try {
      setLoading(true)
      const response =await $axios.get(`/food-delivery/search/${query}`);
      setFoods(response.data)
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false)
    }
  }
  return (
    <View style= {styles.container}>
      <Input placeholder='Enter food name to search....' 
      keyboardType='web-search' 
      clearButtonMode='while-editing'
      onChangeText={val => setQuery(val)}
      onSubmitEditing={searchFood} />
  {
    loading ? (
    <Center>
    <ActivityIndicator size="large" />
    </Center>
    ) : foods.length === 0 ? (
        <Center>
          <Text>No products found</Text>
          </Center>
      ) : (
    <FlatList
    data={foods} 
    renderItem = {({item}) => <FoodCard food = {item} />}
    keyExtractor={item => item._id}
    numColumns={2}
    showsVerticalScrollIndicator ={false}
  />)

  }
  </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});
