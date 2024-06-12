import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Button, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from './CartContext';
import SproutImage from '../assets/sprout.png';
import CartImage from '../assets/cart.png';

const ShoppingPage = ({ route }) => {
  const { cart, addToCart } = useContext(CartContext);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Map route.params.output to the products array
  const products = route.params.output.map((item, index) => ({
    id: index.toString(), // Ensure each item has a unique id
    name: item["Brand"],
    reward: "+10",
    details: `Carbon Footprint: ${item["Carbon Footprint"]} \n\n${item["Comparison to average"]}`,
  }));

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => { setSelectedItem(item); setModalVisible(true); }}>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.itemDetails}>
        <Text>{item.reward}</Text>
        <Image source={SproutImage} style={styles.sproutImage} />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.pageContainer}>
      <View style={styles.listContainer}>
        <Text style={styles.header}>Sure, here are the more sustainable options you can choose from!</Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
      <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('CartPage')}>
        <Image source={CartImage} style={styles.cartImage} />
        {totalCartItems > 0 && (
          <View style={styles.cartCountContainer}>
            <Text style={styles.cartCountText}>{totalCartItems}</Text>
          </View>
        )}
      </TouchableOpacity>
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{selectedItem.name}</Text>
              <Text style={styles.modalDetails}>{selectedItem.details}</Text>
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#A4F59D',
    paddingTop: 100,
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  listContainer: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 20,
    padding: 10,
    marginVertical: 20,
  },
  flatListContent: {
    paddingBottom: 30,  // Ensure content doesn't get cut off by the cart button
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    flex: 1,
  },
  itemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sproutImage: {
    width: 20,
    height: 20,
    marginLeft: 0,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#A4F59D',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#000',
    fontSize: 12,
  },
  cartButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#fff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cartImage: {
    height: 30,
    width: 30,
  },
  cartCountContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetails: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalReward: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ShoppingPage;