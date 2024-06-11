import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  Button,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserInfo = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
        <Ionicons
          name='chevron-back-outline'
          size={36}
          color='black'
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/5a71/4866/6537c4366e364a3cfed32fbaedc30ae2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W3CZ6K0eAVDbNk3mjQhmb3tI-6Gnp-UACyogqgasQ7lnBjzZAraDyx~cEBBOju00~EC1NDT7rTPijzMmCfUsEiV0QN93enYGadKfFNDHGuR5MrISYnypaXQUjtQInoWk9~Bvre-rbltemF72PEulE-n11ZkB1FbUuKlvGFlJWE6z~J4o2~WSK4cTymtmTPZ~mwCryDvBWpxltdTQJA35l5T~N3~6zo0WG8hwEurSKlx3BxB05hhL2T~G0C3M2gPT64i6I93tbW6oxRwYswuCE9tfKz31uoVzICZGFRxpKL6hki9dSUY5ytGU8uuvwPX8pt20ICBiVnQt2Ed~Am27oA__'
          }}
          style={styles.profilePic}
        />
        <Text style={styles.name}>Christopher</Text>
        <Text style={styles.email}>Email: Christopher123@gmail.com</Text>
      </View>

      <View style={styles.accountDetails}>
        <Text style={styles.detailText}>Date joined: 6/2/2024</Text>
        <Text style={styles.detailText}>Total Purchases Made: 72</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Your Monthly Goals (Resource Use Limit)
        </Text>
        <Text style={styles.goalText}>Water (litres/month): </Text>
        <TextInput
          style={styles.goalText}
          keyboardType='numeric'
          placeholder='Enter Water Goal'
        />

        <Text style={styles.goalText}>Energy (kWh/month): </Text>
        <TextInput
          style={styles.goalText}
          keyboardType='numeric'
          placeholder='Enter Energy Goal'
        />
      </View>

      <Button title='Save Goals' onPress={() => alert('Goals saved')} />

      <Button
        title='Logout'
        onPress={handleLogout}
        style={styles.logoutButton}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B4F8C8',
    padding: 20
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 15
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginTop: 60,
    marginBottom: 20,
    width: '90%'
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  email: {
    fontSize: 16,
    color: '#555'
  },
  accountDetails: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    marginBottom: 20
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10
  },
  section: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  goalText: {
    fontSize: 16,
    marginBottom: 5
  },
  logoutButton: {
    marginTop: 20
  }
});

export default UserInfo;
