import { useEffect } from 'react';
import { View, Image } from 'react-native';
import { StyleSheet } from 'react-native';
const launchIcon = require('../utils/image.png');

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  tinyLogo: {
    width: 283,
    height: 202,
    left: 60,
    top: 250
  }
});

const Launch = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={launchIcon} />
    </View>
  );
};
export default Launch;
