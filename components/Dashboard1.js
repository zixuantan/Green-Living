import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Dashboard1 = ({ navigation }) => {
  function handleGoBack() {
    navigation.goBack();
  }

  function handleRewardsNav() {
    navigation.navigate('Rewards1');
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
          <Image
            source={require('../utils/meter.png')}
            style={{ width: 150 * 1.25, height: 82.64 * 1.25, marginTop: 50 }}
          />
          <Text style={{ marginTop: 50, fontSize: 17 }}>
            Your Carbon Footprint from Shopping:
          </Text>
          <Text style={{ marginTop: 20, fontSize: 35, fontWeight: '600' }}>
            400kg CO2e
          </Text>
          <Text style={{ marginTop: 20, fontSize: 17 }}>this month</Text>
          <Text style={{ marginTop: 20, fontSize: 15 }}>
            That's 15% more than the average person!
          </Text>
        </View>

        <View style={styles.specialContainer}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 50,
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Image
              source={require('../utils/water.png')}
              style={{ width: 85, height: 126, marginLeft: 30 }}
            />
            <Image
              source={require('../utils/electricity.png')}
              style={{ width: 93, height: 126, marginRight: 30 }}
            />
          </View>

          <View style={{ alignItems: 'center' }}>
            <Text style={{ marginTop: 50, fontSize: 17 }}>
              You're fast approaching your monthly
            </Text>
            <Text style={{ marginTop: 10, fontSize: 17 }}>
              targeted resource use limit of
            </Text>

            <View style={{ flexDirection: 'row', marginTop: 40 }}>
              <Text style={{ fontSize: 17 }}>
                <Text style={{ fontSize: 30, fontWeight: '600' }}>2000L</Text>
                <Text style={{ fontSize: 30 }}> & </Text>

                <Text style={{ fontSize: 30, fontWeight: '600' }}>150kWh</Text>
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 2,
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ fontSize: 15 }}> Water </Text>
              <Text style={{ fontSize: 15 }}> Energy </Text>
            </View>

            <Text style={{ fontSize: 17, marginTop: 20 }}>
              Be mindful of your purchases!
            </Text>
          </View>
        </View>

        <View style={styles.rowContainer}>
          <Image
            source={require('../utils/bar.png')}
            style={{ width: 227, height: 40.13, marginTop: 40 }}
          />
          <Text style={{ marginTop: 30, fontSize: 20 }}>
            You've helped to avoid
          </Text>
          <Text style={{ marginTop: 15, fontSize: 40, fontWeight: '600' }}>
            20kg
          </Text>
          <Text style={{ marginTop: 10, fontSize: 20 }}>of waste</Text>
          <Text style={{ marginTop: 20 }}>
            (that's more than 50% of users!)
          </Text>
        </View>

        <View style={styles.rowContainer}>
          <Text style={{ marginTop: 20, fontSize: 25 }}>
            Your Purchase-Driven
          </Text>
          <Text style={{ fontSize: 25 }}>Carbon Footprint (CO2e)</Text>
          <Image
            source={require('../utils/linechart-frame-302.png')}
            style={{ width: 250 * 1.2, height: 200 * 1.2, marginTop: 40 }}
          />
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
    paddingTop: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    elevation: 5,
    // shadowColor: 'black',
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    paddingBottom: 60
  },

  rowContainer: {
    backgroundColor: 'rgba(213, 252, 207, 0.25)',
    borderRadius: 10,
    padding: 1,
    alignItems: 'center',
    width: 360,
    marginBottom: 40,
    paddingBottom: 30,
  },

  specialContainer: {
    backgroundColor: 'rgba(213, 252, 207, 0.3)',
    borderRadius: 10,
    padding: 1,
    width: 360,
    marginBottom: 40,
    paddingBottom: 20
  },

  title: {
    marginTop: 20,
    fontSize: 28,
    fontFamily: 'Nunito-Bold',
    color: 'black'
  },

  nextButton: {
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    borderRadius: 10,
    padding: 10,
    width: 250,
    marginTop: 20,
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
