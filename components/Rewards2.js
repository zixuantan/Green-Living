import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Rewards2 = ({ navigation }) => {
  function handleGoBack() {
    navigation.goBack();
  }

  function returnHome() {
    navigation.navigate('Home');
  }

  const [sprouts, setSprouts] = useState(2000); // Initial number of sprouts
  const [vouchers5, setVouchers5] = useState(0); // Counter for $5 vouchers
  const [vouchers10, setVouchers10] = useState(0); // Counter for $10 vouchers
  const [redeemed, setRedeemed] = useState(0); // Total monetary value of vouchers redeemed

  const redeemVoucher = (amount, sproutsRequired) => {
    if (sprouts >= sproutsRequired) {
      setSprouts(sprouts - sproutsRequired);
      setRedeemed(redeemed + amount);
    } else {
      alert('Not enough sprouts!');
    }
  };

  const subtractVouchers = (amount, sproutsRequired, voucherType) => {
    if (voucherType === 5) {
      if (vouchers5 > 0) {
        setVouchers5(vouchers5 - 1);
        setSprouts(sprouts + sproutsRequired);
        setRedeemed(redeemed - amount);
      }
    } else if (voucherType === 10) {
      if (vouchers10 > 0) {
        setVouchers10(vouchers10 - 1);
        setSprouts(sprouts + sproutsRequired);
        setRedeemed(redeemed - amount);
      }
    }
  };

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
        <View style={styles.rowContainer}>
          <Image
            source={require('../utils/sprout.png')}
            style={{ width: 30, height: 30 }}
          />
          <Text style={{ fontSize: 25, fontWeight: '200' }}>
            {' '}
            {sprouts} sprouts
          </Text>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 150 }}
        >
          <View style={{ marginRight: 100 }}>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>$5 eVoucher</Text>
            <Text style={{ fontSize: 20, fontWeight: '200' }}>200 sprouts</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(211, 211, 211, 0.3)',
              borderRadius: 10,
              padding: 2,
              width: 100,
              marginRight: 5
            }}
          >
            <TouchableOpacity
              style={{
                minWidth: 30,
                minHeight: 30,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => subtractVouchers(5, 200, 5)}
            >
              <Text style={{ fontSize: 20 }}>-</Text>
            </TouchableOpacity>
            <View
              style={{
                height: '100%',
                width: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                marginHorizontal: 5
              }}
            />
            <TouchableOpacity
              style={{
                minWidth: 30,
                minHeight: 30,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => {
                setVouchers5(vouchers5 + 1);
                redeemVoucher(5, 200);
              }}
              disabled={sprouts < 200}
            >
              <Text style={{ fontSize: 20 }}>+</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginRight: 5,
              marginLeft: 5
            }}
          >
            {vouchers5}
          </Text>
        </View>

        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}
        >
          <View style={{ marginRight: 90 }}>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>
              $10 eVoucher
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '200' }}>350 sprouts</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(211, 211, 211, 0.3)',
              borderRadius: 10,
              padding: 2,
              width: 100,
              marginRight: 5
            }}
          >
            <TouchableOpacity
              style={{
                minWidth: 30,
                minHeight: 30,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => subtractVouchers(10, 350, 10)}
            >
              <Text style={{ fontSize: 20 }}>-</Text>
            </TouchableOpacity>
            <View
              style={{
                height: '100%',
                width: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                marginHorizontal: 5
              }}
            />
            <TouchableOpacity
              style={{
                minWidth: 30,
                minHeight: 30,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={() => {
                setVouchers10(vouchers10 + 1);
                redeemVoucher(10, 350);
              }}
              disabled={sprouts < 350}
            >
              <Text style={{ fontSize: 20 }}>+</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginRight: 5,
              marginLeft: 5
            }}
          >
            {vouchers10}
          </Text>
        </View>

        <View
          style={{
            height: 1,
            backgroundColor: 'black',
            width: '90%',
            marginTop: 60
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 50,
            marginRight: 240
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: '600' }}>Total </Text>
          <Text style={{ fontSize: 17, fontWeight: '200' }}>${redeemed}</Text>
        </View>

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.buttonText}>Get eVouchers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.homeButton} onPress={returnHome}>
          <Text style={styles.buttonText}>Return Home </Text>
          <AntDesign name='home' size={24} color='black' />
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
    backgroundColor: 'rgba(211, 211, 211, 0.3)',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 280,
    marginTop: 20,
    justifyContent: 'center'
  },

  title: {
    marginTop: 20,
    fontSize: 28,
    fontFamily: 'Nunito-Bold'
  },

  nextButton: {
    backgroundColor: 'rgba(211, 211, 211, 0.3)',
    borderRadius: 10,
    padding: 10,
    width: 250,
    marginTop: 70,
    alignItems: 'center',
    width: 300
  },

  homeButton: {
    backgroundColor: 'rgba(211, 211, 211, 0.3)',
    borderRadius: 10,
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
    width: 260,
    flexDirection: 'row',
    justifyContent: 'center'
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

export default Rewards2;
