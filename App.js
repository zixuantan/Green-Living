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

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './components/HomePage';
import Dashboard1 from './components/Dashboard1';
import Rewards1 from './components/Rewards1';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" options={{headerShown: false}} component={Homepage} />
        <Stack.Screen name="Dashboard1" options={{headerShown: false}} component={Dashboard1} />
        <Stack.Screen name="Rewards1" options={{headerShown: false}} component={Rewards1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






