import React, { useContext } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  Image
} from 'react-native';
import { UserPointsContext } from '../hooks/userPointsContext';

const treeIcon = require('../utils/tree.png');
const sproutIcon = require('../utils/sprout.png');

const MainPage = ({ navigation }) => {
  const { userPoints } = useContext(UserPointsContext);

  const handleChatbotNav = () => {
    navigation.navigate('Chatbot');
  };

  const ProgressBar = ({ userPoints }) => {
    return (
      <>
        <Text style={{ marginTop: 40, fontWeight: '400', color: 'black' }}>
          Level 1
        </Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBarContainer}>
            <View
              style={[styles.progressBarInner, { width: `${userPoints}%` }]}
            />
          </View>
          <Image source={sproutIcon} />
        </View>
        <Text style={{ color: 'black' }}>
          {100 - userPoints} points to the next level
        </Text>
      </>
    );
  };

  const Table = () => {
    return (
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Shopping Carbon Footprint</Text>
          <Text style={styles.tableCell}>120 kg CO2</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Monthly Water Consumption</Text>
          <Text style={styles.tableCell}>300 liters</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Monthly Electricity Usage</Text>
          <Text style={styles.tableCell}>150 kWh</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Waste Avoided</Text>
          <Text style={styles.tableCell}>50 kg</Text>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder='I want to buy some snacks...'
          onFocus={handleChatbotNav}
        />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={treeIcon}
          // style={{ width: 227, height: 40.13, marginTop: 40 }}
        />
        {/* help adjust thanks */}
        <Text
          style={{
            fontSize: 20,
            marginVertical: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'black'
          }}
        >
          Christopher's
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: -10,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'black'
          }}
        >
          Environmental Impact
        </Text>
        <ProgressBar userPoints={userPoints} />
        {/* <Table /> */}
      </View>

      <View style={styles.contentContainer2}>
        <Table />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#d5fccf'
  },

  searchContainer: {
    padding: 10,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    // shadowColor: 'black',
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    marginTop: 80
  },

  searchInput: {
    height: 40,
    paddingLeft: 8,
    textAlign: 'center',
    color: 'gray'
  },

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    elevation: 10,
    // shadowColor: 'green',
    // shadowOpacity: 0.3,
    // shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    paddingBottom: 60,
    marginTop: -10
  },

  contentContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    elevation: 10,
    // shadowColor: 'black',
    // shadowOpacity: 0.3,
    // shadowRadius: 10,
    // shadowOffset: { width: 0, height: 5 },
    paddingBottom: 30,
    marginTop: -10
  },

  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10
  },

  progressBarContainer: {
    flex: 1,
    height: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10
  },

  progressBarInner: {
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 10
  },

  table: {
    width: '100%',
    marginTop: 30
  },

  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },

  tableCell: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '400',
    color: 'black'
  }
});

export default MainPage;
