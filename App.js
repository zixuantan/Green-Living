// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//test

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./components/HomePage";
import Dashboard1 from "./components/Dashboard1";
import Rewards1 from "./components/Rewards1";
import Login from "./components/Login";
import Chatbot from "./components/Chatbot";
import SignUp from './components/SignUp';
import Launch from './components/Launch';
import UserInfo from './components/UserInfo'

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
        <Stack.Screen name="UserInfo" options={{headerShown: false}} component={UserInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
