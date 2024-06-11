import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from './CartContext';
import ExitImage from '../assets/exit.png';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name} (x{item.quantity})</Text>
      <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.pageContainer}>
      <Image source={ExitImage} style={styles.exitImage} />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      </TouchableOpacity>
      <View style={styles.cartListContainer}>
        <Text style={styles.header}>Shopping Cart</Text>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#A4F59D',
    paddingTop: 60,
  },
  cartListContainer: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 20,
    padding: 10,
    marginVertical:40,
    height: 580,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 10,
    backgroundColor: '#BEE3BA',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 5,
    opacity: 0,
  },
  exitImage: {
    top: 20,
    left: 20,
    height: 30,
    width: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,  // Adjust to avoid overlap with back button
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    flex: 1,
  },
  removeButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default CartPage;
