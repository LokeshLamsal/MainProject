import { StyleSheet, Text, View as View, Button, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { $axios } from '../Lib/axios';
import { useSelector } from 'react-redux';
import FoodCard from '../Components/FoodCard';



const RecipeHomePage = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { token} = useSelector((state) => state.auth);
  const [foods, setFoods] = useState([]);
  const fetchFoods = async () =>{
    setRefreshing(true)
    try {
      const response = await $axios.get("/recipe");
      setFoods(response.data);
    } catch (error) {
      console.log(error.response.data);    
    }finally{
      setRefreshing(false)
    }
  };
  useEffect(() =>{
    fetchFoods();
  }, []);

  return (   
    <View>   
      <FlatList
      data={foods} 
      renderItem = {({item}) => <FoodCard food = {item} />}
      keyExtractor={item => item._id}
      numColumns={2}
      showsVerticalScrollIndicator ={false}
      
      refreshing={refreshing}
        onRefresh={fetchFoods}/>

    </View>
  );
};

export default RecipeHomePage;


