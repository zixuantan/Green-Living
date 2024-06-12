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
import Ring from './Ring';

const Rewards1 = ({ navigation }) => {
  function handleGoBack() {
    navigation.goBack();
  }

  function handlePress() {
    navigation.navigate('Rewards2');
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
        <Text style={styles.title}>Rewards Page</Text>
      </View>

      <View style={styles.contentContainer}>
        <Ring size={275} strokeWidth={20} color='green' text='14 DAYS LEFT' />
        <Text marginTop={20}>Good job!</Text>
        <Text marginTop={10}>You've completed your ring for this month!</Text>
        <Text style={styles.thisMonth}>This Month</Text>

        <View style={styles.rowContainer}>
          <Text> 1. X Brand Shoes </Text>
          <Text> +5 </Text>
          <Image
            source={require('../utils/sprout.png')}
            style={{ width: 30, height: 30, marginLeft: -56 }}
          />
        </View>

        <View style={styles.rowContainer}>
          <Text> 2. Y Brand Shirt </Text>
          <Text> +3 </Text>
          <Image
            source={require('../utils/sprout.png')}
            style={{ width: 30, height: 30, marginLeft: -63 }}
          />
        </View>

        <View style={styles.rowContainer}>
          <Text> 3. Z Brand Bag </Text>
          <Text> +5 </Text>
          <Image
            source={require('../utils/sprout.png')}
            style={{ width: 30, height: 30, marginLeft: -67 }}
          />
        </View>

        <View style={styles.rowContainer}>
          <Text> 4. A Brand Food </Text>
          <Text> +2 </Text>
          <Image
            source={require('../utils/sprout.png')}
            style={{ width: 30, height: 30, marginLeft: -57 }}
          />
        </View>

        <View style={styles.rowContainer}>
          <Text> 5. B Brand Phone </Text>
          <Text> +6 </Text>
          <Image
            source={require('../utils/sprout.png')}
            style={{ width: 30, height: 30, marginLeft: -52 }}
          />
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={handlePress}>
          <Text style={styles.buttonText}>Redeem Sprouts</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white'
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
    backgroundColor: 'rgba(213, 252, 207, 0.25)',
    margin: 20,
    elevation: 5,
    paddingBottom: 100
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 250,
    marginTop: 20
  },

  title: {
    marginTop: 20,
    fontSize: 28,
    fontFamily: 'Nunito-Bold'
  },

  thisMonth: {
    marginTop: 40,
    fontSize: 25,
    marginLeft: -200,
    fontFamily: 'Nunito-Bold',
    fontWeight: '500',
    marginBottom: 20
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

export default Rewards1;
