import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';
import { UserPointsContext } from '../hooks/userPointsContext';

export default function Scanner1() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation(); // Access navigation object
  const { setUserPoints } = useContext(UserPointsContext);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    if (!type || !data) {
      console.error('Invalid barcode scan data');
      return;
    }
    setScanned(true);

    try {
      const response = await fetch(data); // Fetch JSON data from the URL
      const receiptData = await response.json();
      // Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      setUserPoints((prevPoints) => prevPoints + 10); // Increase user points by 10
      navigation.navigate('Scanner2', { receiptData }); // Navigate to the Scanner2 page with the fetched data
    } catch (error) {
      console.error('Error fetching receipt data:', error);
      Alert.alert('Error', 'Failed to fetch receipt data.');
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.centeredContainer}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons
            name='chevron-back-outline'
            size={36}
            color='black'
            style={{ marginHorizontal: 15 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>QR Scanner</Text>
      </View>

      <View style={styles.instructionsContainer}>
        <Text style={{ fontSize: 25, fontWeight: '200' }}>
          Please align the QR Code
        </Text>
        <Text style={{ fontSize: 25, fontWeight: '200' }}>on your receipt</Text>
      </View>

      <View style={styles.scannerWrapper}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={styles.scannerContainer}
        />
      </View>
      {scanned && (
        <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  scannerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -150
  },
  scannerContainer: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
    borderRadius: 5,
    zIndex: 10,
    marginTop: 30
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    position: 'relative'
  },
  instructionsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100
  }
});
