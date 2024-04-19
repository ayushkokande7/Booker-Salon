import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from '../BottomNavigation';
import Home from '../../screens/home/Customer/Home';
import Shops from '../../screens/home/Customer/Shops';
import Profile from '../../screens/home/Customer/Profile';
import Booking from '../../screens/home/Customer/Booking';
const CustomerNavigation = () => {
  const Stack = createStackNavigator();
  const Tabs = [
    {
      icon: 'home',
      label: 'Home',
      component: Home,
    },
    {
      icon: 'star',
      label: 'Shops',
      component: Shops,
    },
    {
      icon: 'star',
      label: 'Booking',
      component: Booking,
    },
    {
      icon: 'star',
      label: 'Profile',
      component: Profile,
    },
  ];
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        initialParams={{Tabs}}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default CustomerNavigation;
