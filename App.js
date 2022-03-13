import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Main from './Components/Main';
import {StripeProvider} from '@stripe/stripe-react-native'


const App = () => {
  return ( 
    <StripeProvider publishableKey="pk_test_51J5PCLHSkxfngDrUqtTztzDp33xG21gGY1hczEiexc3JAztaWWrH2xSEDWJhkP90eQ4PTzYJ39FMC5odm5RXW2BO00csoSKUPM">
      <Provider store = {store}>
        <Main />
      </Provider>
    </StripeProvider> 
  ); 
};

export default App;


