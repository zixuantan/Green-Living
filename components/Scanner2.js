import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';


const Scanner2 = ({ route }) => {
  const { receiptData } = route.params;
  const navigation = useNavigation(); // Access navigation object

  function returnHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.thankyouContainer}>
      <Text style={styles.title}>Thank you for making</Text>
      <Text style={styles.title}>the right choices!</Text>
      </View>
      <FlatList
        data={receiptData.items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style= {{fontSize: 25, fontWeight: '200'}}>{item.name}</Text>
            <Text style={{fontSize: 25, fontWeight: '200'}}>{item.points}
            <Image
            source={require('../utils/sprout.png')}
            style={{ width: 30, height: 30 }}
          />
          </Text>
          </View>
        )}
      />
      <View style={{alignItems:'center'}}> 

      <TouchableOpacity style={styles.homeButton} onPress={returnHome}>
          <Text style={styles.buttonText}>Return Home </Text>
          <AntDesign name='home' size={24} color='black' />
        </TouchableOpacity>


      </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  thankyouContainer:{
    alignItems: 'center',
    marginTop: 120, 
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '200',
  },
  item: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeButton: {
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
    width: 260,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Scanner2;

