import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Dashboard1 = ({ navigation }) => {
  function handleGoBack() {
    navigation.navigate('Rewards1');
  }

  function handleRewardsNav(){
    navigation.go
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons
            name='chevron-back-outline'
            size={36}
            color='black'
            style={{ marginHorizontal: 15 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Impact Dashboard</Text>
      </View>

      <View style={styles.contentContainer}>
        

        <View style={styles.rowContainer}>
          <Text>Your Carbon Footprint this month from Shopping:</Text>
          <Text>400kg CO2e</Text>
          <Text>That's 15% more than the average person!</Text>

        </View>

        <View style={styles.rowContainer}>
          <Text>You're fast approaching your monthly targeted</Text>
          <Text>resource use limit of</Text>
          <View style={{flexDirection: 'row'}}>
            <Text>2000L</Text>
            <Text>Water and</Text>
            <Text>150kWh</Text>
            <Text>Energy</Text>
          </View>
          <Text>Be mindful of your purchases!</Text>
  
        </View>

        <View style={styles.rowContainer}>
          <Text>You've helped to avoid</Text>
          <Text>20kg</Text>
          <Text>of waste</Text>
          <Text>(that's more than 50% of users!)</Text>
        </View>

        <View style={styles.rowContainer}>
          <Text>Your purchase-drive</Text>
          <Text>carbon footprint over time</Text>
 
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handleRewardsNav}>
          <Text style={styles.buttonText}>View my Rewards</Text>
        </TouchableOpacity>

  
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#A4F59D'
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    paddingBottom: 100
  },

  rowContainer: {
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 310,
    marginBottom: 40,
    paddingBottom: 100

  },

  title: {
    marginTop: 20,
    fontSize: 28,
    fontFamily: 'Nunito-Bold'
  },


  nextButton: {
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    borderRadius: 10,
    padding: 10,
    width: 250,
    marginTop: 70,
    alignItems: 'center',
    width: 300
  },

  buttonText: {
    fontSize: 17,
    fontWeight: '600'
  },

  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
    borderRadius: 5,
    paddingTop: 40
  }
});

export default Dashboard1;
