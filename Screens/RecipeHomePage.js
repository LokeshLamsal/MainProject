import { StyleSheet, Text, View as View, Button, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { $axios } from '../Lib/axios';
import { useSelector } from 'react-redux';
import RecipeCard from '../Components/RecipeCard';



const RecipeHomePage = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { token} = useSelector((state) => state.auth);
  const [Recipe, setRecipe] = useState([]);
  const fetchRecipe = async () =>{
    setRefreshing(true)
    try {
      const response = await $axios.get("/recipe");
      setRecipe(response.data);
    } catch (error) {
      console.log(error.response.data);    
    }finally{
      setRefreshing(false)
    }
  };
  useEffect(() =>{
    fetchRecipe();
  }, []);

  return (   
    <View>   
      <FlatList
      data={Recipe} 
      renderItem = {({item}) => <RecipeCard Recipe = {item} />}
      keyExtractor={item => item._id}
      numColumns={2}
      showsVerticalScrollIndicator ={false}
      
      refreshing={refreshing}
        onRefresh={fetchRecipe}/>

    </View>
  );
};

export default RecipeHomePage;


