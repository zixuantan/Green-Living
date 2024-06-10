import React from 'react';
import { View, StyleSheet, ScrollView, TextInput } from 'react-native';

const MainPage = ({ navigation }) => {
  const handleChatbotNav = () => {
    navigation.navigate('Chatbot');
  };

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder='I want to buy some snacks...'
            onFocus={handleChatbotNav}
          />
        </View>
        <View>Helloooo</View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#A4F59D'
  },

  searchContainer: {
    padding: 10,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5
  },

  searchInput: {
    height: 40,
    paddingLeft: 8,
    textAlign: 'center',
    color: 'gray'
  }
});

export default MainPage;
