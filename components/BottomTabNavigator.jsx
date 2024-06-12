import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard1 from './Dashboard1';
import Rewards1 from './Rewards1';
import MainPage from './MainPage';
import Scanner1 from './Scanner1';
import CartPage from './CartPage';
import UserInfo from './UserInfo';
import { CartContext } from './CartContext';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const { cart } = useContext(CartContext);

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Shopping':
              iconName = 'cart';
              break;
            case 'Dashboard':
              iconName = 'analytics';
              break;
            case 'Camera':
              iconName = 'camera';
              break;
            case 'Rewards':
              iconName = 'gift';
              break;
            case 'Info':
              iconName = 'information-circle';
              break;
            default:
              iconName = 'home';
          }

          return (
            <View>
              <Ionicons name={iconName} size={size} color={color} />
              {route.name === 'Shopping' && totalCartItems > 0 && (
                <View style={styles.badgeContainer}>
                  <Text style={styles.badgeText}>{totalCartItems}</Text>
                </View>
              )}
            </View>
          );
        },
        tabBarActiveTintColor: '#179E24',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name='Home' component={MainPage} />
      <Tab.Screen name='Shopping' component={CartPage} />
      <Tab.Screen name='Dashboard' component={Dashboard1} />
      <Tab.Screen name='Camera' component={Scanner1} />
      <Tab.Screen name='Rewards' component={Rewards1} />
      <Tab.Screen name='Info' component={UserInfo} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
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

export default BottomTabNavigator;
