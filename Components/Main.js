import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import AuthStack from "../Navigations/AuthStack";
import Tabs from "../Navigations/Tabs";

const Main = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {loggedIn ? <Tabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Main;
