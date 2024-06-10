import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Chatbot from './components/Chatbot';
import SignUp from './components/SignUp';
import Launch from './components/Launch';
// import Scanner1 from './components/Scanner1';
// import Scanner2 from './components/Scanner2';
import BottomTabNavigator from './components/BottomTabNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Launch'>
        <Stack.Screen
          name='Launch'
          options={{ headerShown: false }}
          component={Launch}
        />
        <Stack.Screen
          name='Login'
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name='SignUp'
          options={{ headerShown: false }}
          component={SignUp}
        />
        <Stack.Screen
          name='Chatbot'
          options={{ headerShown: false }}
          component={Chatbot}
        />
        <Stack.Screen
          name='Main'
          options={{ headerShown: false }}
          component={BottomTabNavigator}
        />
        {/* <Stack.Screen
          name='Scanner1'
          options={{ headerShown: false }}
          component={Scanner1}
        />
        <Stack.Screen
          name='Scanner2'
          options={{ headerShown: false }}
          component={Scanner2}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
