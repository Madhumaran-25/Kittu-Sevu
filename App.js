import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import DrawerNavigator from './screens/navigation/DrawerNavigator';
import { Provider } from 'react-redux';
import store from './Redux/store';

const App = () => {

  const Stack = createStackNavigator();
  
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='DrawerNavigator' component={DrawerNavigator}/>
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
