// RewardsPage.js
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from 'react';
import { Touchable } from 'react-native';
import Ring from './Ring';

const Rewards1 = ({ navigation }) => {

  function handleGoBack(){
    navigation.goBack();
  };

  return (
    <ScrollView>

      <View style={styles.container}>

        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Ionicons 
          name="chevron-back-outline" 
          size={36} 
          color="black"
          style={{marginHorizontal:15}}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Rewards Page</Text>


      </View>

      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', paddingTop: 60 }]}>

      <Ring size={275} strokeWidth={20} color="green" text="Your Text Here"/>

      </View>



      



    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    marginTop: 70,
    fontSize: 28,
    fontFamily: 'Nunito-Bold',
  },

  backButton : {
    position: 'absolute',
    top: 60,
    left: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },



});

export default Rewards1;
