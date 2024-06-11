import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title='Go to Dashboard'
        onPress={() => navigation.navigate('Dashboard1')}
      />
      <Button
        title='Go to Rewards'
        onPress={() => navigation.navigate('Rewards1')}
      />
      <Button
        title='Go to Launch Page'
        onPress={() => navigation.navigate('Launch')}
      />
      <Button
        title='Go to Login'
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title='Go to Sign Up'
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button
        title='Go to Chatbot'
        onPress={() => navigation.navigate('Chatbot')}
      />
      <Button
        title='Go to Scanner'
        onPress={() => navigation.navigate('Scanner1')}
      />
      <Button
        title='Go to UserInfo'
        onPress={() => navigation.navigate('UserInfo')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Homepage;
