import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useSelector } from "react-redux";
import AuthStack from "../Navigations/AuthStack";
import OptionTabs from "../Navigations/OptionTabs";
import Tabs from "../Navigations/Tabs";

const Main = () => {
  const { loggedIn, user } = useSelector((state) => state.auth);
  return (
    <NavigationContainer>
      {loggedIn ? <OptionTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Main;
