import React from 'react';
import Center from './Components/Center';
import AppStack from './Navigations/AppStack';
import Tabs from './Navigations/Tabs';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Navigations/AuthStack';


const App = () => {
  const loggedIn = false;
  return (  
      <NavigationContainer>
        {loggedIn ? <Tabs /> : <AuthStack />}
      </NavigationContainer>
  );
};

export default App;


