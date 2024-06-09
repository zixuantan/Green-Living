// DashboardPage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard1 = () => {
  return (
    <View style={styles.container}>
      <Text>Dashboard Page</Text>
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

export default Dashboard1;
