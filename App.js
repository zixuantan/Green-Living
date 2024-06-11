import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Chatbot from './components/Chatbot';
import SignUp from './components/SignUp';
import Launch from './components/Launch'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" options={{headerShown: false}} component={Homepage} />
        <Stack.Screen name="Launch" options={{headerShown: false}} component={Launch} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUp} />
        <Stack.Screen name="Chatbot" options={{headerShown: false}} component={Chatbot} />
        <Stack.Screen name="Dashboard1" options={{headerShown: false}} component={Dashboard1} />
        <Stack.Screen name="Rewards1" options={{headerShown: false}} component={Rewards1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
