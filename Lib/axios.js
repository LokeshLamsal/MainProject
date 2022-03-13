import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const $axios = axios.create({
  baseURL: "https://food-api-production.herokuapp.com/api",

})

$axios.interceptors.request.use(async (config) => {
  const accessToken = await AsyncStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});