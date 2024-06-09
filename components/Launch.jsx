import { View, Image } from 'react-native';
import { StyleSheet } from 'react-native';
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

const Launch = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require('../utils/image.png')} />
    </View>
  );
};
export default Launch;
