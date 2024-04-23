import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from '../BottomNavigation';
import {Home, Profile, Calculation} from '../../screens/home/Owner';
import AddJober from '../../screens/home/Owner/AddJober';
const OwnerNavigation = () => {
  const Stack = createStackNavigator();
  const Tabs = [
    {
      icon: 'home',
      label: 'Home',
      component: Home,
    },
    {
      icon: 'calculator',
      label: 'Calculation',
      component: Calculation,
    },
    {
      icon: 'account',
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
      <Stack.Screen
        name="AddJober"
        component={AddJober}
        options={{title: 'Add Jober'}}
      />
    </Stack.Navigator>
  );
};

export default OwnerNavigation;
