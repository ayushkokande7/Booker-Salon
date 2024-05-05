import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from '../BottomNavigation';
import {Home, Profile, Calculation} from '../../screens/home/Jober';
import SetTime from '../../screens/home/Jober/SetTime';
import EditProfile from '../../screens/home/Owner/Profile/EditProfile';
const JoberNavigation = () => {
  const Stack = createStackNavigator();
  const Tabs = [
    {
      icon: 'home',
      label: 'Home',
      component: Home,
    },
    {
      icon: 'calculator',
      label: 'calculate',
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
        name="SetTime"
        component={SetTime}
        options={{title: 'Set Time'}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{title: 'Edit Profile'}}
      />
    </Stack.Navigator>
  );
};

export default JoberNavigation;
