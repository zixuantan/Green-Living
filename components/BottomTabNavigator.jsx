import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Dashboard1 from './Dashboard1';
import Ring from './Ring';
import Rewards1 from './Rewards1';
import Rewards2 from './Rewards2';
import MainPage from './MainPage';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
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
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }}
    >
      <Tab.Screen name='MainPage' component={MainPage} />
      <Tab.Screen name='Shopping' component={Dashboard1} />
      <Tab.Screen name='Dashboard' component={Dashboard1} />
      <Tab.Screen name='Camera' component={Ring} />
      <Tab.Screen name='Rewards' component={Rewards1} />
      <Tab.Screen name='Info' component={Rewards2} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;