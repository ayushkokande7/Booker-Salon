import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from '../BottomNavigation';
import {Home, Profile, Calculation} from '../../screens/home/Owner';
import AddJober from '../../screens/home/Owner/AddJober';
import JoberDetails from '../../screens/home/Owner/JoberDetails';
import EditProfile from '../../screens/home/Owner/Profile/EditProfile';
import EditShop from '../../screens/home/Owner/Profile/EditShop';
import ChangePassword from '../../screens/home/Owner/Profile/ChangePassword';
import AddService from '../../screens/home/Owner/Profile/AddService';
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
        options={{title: 'Jober Details'}}
      />
      <Stack.Screen
        name="JoberDetails"
        component={JoberDetails}
        options={{title: 'Jober Details'}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{title: 'Edit Profile'}}
      />
      <Stack.Screen
        name="EditShop"
        component={EditShop}
        options={{title: 'Jober Shop'}}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{title: 'Change Password'}}
      />
      <Stack.Screen
        name="AddService"
        component={AddService}
        options={{title: 'Add Service'}}
      />
    </Stack.Navigator>
  );
};

export default OwnerNavigation;
