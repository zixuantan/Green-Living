import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard1')} />
      <Button title="Go to Rewards" onPress={() => navigation.navigate('Rewards1')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Homepage;