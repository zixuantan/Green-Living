import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Scanner2() {
  const navigation = useNavigation();
  const route = useRoute();
  const { type, data } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scanned Data</Text>
      <Text>Type: {type}</Text>
      <Text>Data: {data}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
