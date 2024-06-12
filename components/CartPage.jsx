import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from './CartContext';
import { Ionicons } from '@expo/vector-icons';

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
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons
            name='chevron-back-outline'
            size={36}
            color='black'
            style={{ marginHorizontal: 15 }}
          />
        </TouchableOpacity>
        <Text style={styles.header}>Shopping Cart</Text>
      </View>

      <View style={styles.cartListContainer}>
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
    backgroundColor: 'white',
    paddingTop: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    zIndex: 1,
    marginTop: -20
  },
  header: {
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
    color: 'black',
    flex: 1, // Take remaining space
    marginTop: 9
  },
  cartListContainer: {
    backgroundColor: 'rgba(213, 252, 207, 0.25)',
    margin: 16,
    borderRadius: 20,
    padding: 10,
    marginVertical: 40,
    height: 580,
    marginTop: 10
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    flex: 1,
  },
  removeButton: {
    backgroundColor: 'rgba(240, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'black'
  },
});

export default CartPage;
