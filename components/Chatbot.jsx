import React, { useContext } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity
} from 'react-native';
import main from '../services/Bot';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CartContext } from './CartContext'; // Import CartContext

const Chatbot = ({ navigation }) => {
  const { cart } = useContext(CartContext); // Use CartContext
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSubmission = async (event) => {
    event.preventDefault();
    const output = await main(event.nativeEvent.text);
    navigation.navigate('ShoppingPage', { output: output });
  };

  const handleGoBack = () => {
    navigation.navigate('Main'); // Navigate to the Main page
  };

  const handleCartPress = () => {
    navigation.navigate('CartPage'); // Navigate to the CartPage
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      alignItems: 'center',
      padding: 20
    },
    topContainer: {
      marginTop: 50,
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    icons: {
      width: 60,
      height: 60
    },
    cart: {
      width: 30,
      height: 30
    },
    exit: {
      width: 30,
      height: 30
    },
    middleContainer: {
      marginTop: 150,
      alignItems: 'center'
    },
    clickContainer: {
      display: 'flex',
      flexDirection: 'row'
    },
    input: {
      width: '90%',
      marginTop: 150,
      borderRadius: 12,
      padding: 10,
      backgroundColor: '#f0f0f0'
    },
    clickable: {
      width: '45%',
      margin: 5,
      borderRadius: 20,
      padding: 10,
      backgroundColor: '#f0f0f0',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    badgeContainer: {
      position: 'absolute',
      top: -4,
      right: -12,
      backgroundColor: 'red',
      borderRadius: 8,
      width: 16,
      height: 16,
      justifyContent: 'center',
      alignItems: 'center'
    },
    badgeText: {
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold'
    }
  });

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={styles.container}
      extraScrollHeight={100}
    >
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons
            name='chevron-back-outline'
            size={36}
            color='black'
            style={{ marginHorizontal: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCartPress}>
          <View>
            <Image style={styles.cart} source={require('../assets/cart.png')} />
            {totalCartItems > 0 && (
              <View style={styles.badgeContainer}>
                <Text style={styles.badgeText}>{totalCartItems}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainer}>
        <Image style={styles.icons} source={require('../utils/tree.png')} />
        <Text
          style={{
            marginTop: 15,
            fontSize: 18,
            marginBottom: 25,
            color: '#179E24'
          }}
        >
          What do you want to buy today?
        </Text>
      </View>
      <View style={styles.clickContainer}>
        <Pressable style={styles.clickable}>
          <Text style={{ color: '#179E24' }}>Shoes</Text>
          <Image style={styles.icons} source={require('../utils/shoe.png')} />
        </Pressable>
        <Pressable style={styles.clickable}>
          <Text style={{ color: '#179E24' }}>Shirt</Text>
          <Image style={styles.icons} source={require('../utils/shirt.png')} />
        </Pressable>
      </View>
      <View style={styles.clickContainer}>
        <Pressable style={styles.clickable}>
          <Text style={{ color: '#179E24' }}>Food</Text>
          <Image style={styles.icons} source={require('../utils/food.png')} />
        </Pressable>
        <Pressable style={styles.clickable}>
          <Text style={{ color: '#179E24' }}>Phone</Text>
          <Image style={styles.icons} source={require('../utils/phone.png')} />
        </Pressable>
      </View>
      <TextInput
        onSubmitEditing={handleSubmission}
        style={styles.input}
        placeholder='I want to buy some snacks...'
      />
    </KeyboardAwareScrollView>
  );
};

export default Chatbot;
