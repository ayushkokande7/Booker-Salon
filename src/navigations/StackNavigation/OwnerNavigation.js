import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from '../BottomNavigation';
import {Home, Profile, Calculation} from '../../screens/home/Owner';
import AddJober from '../../screens/home/Owner/AddJober';
import Jober from '../../screens/home/Owner/Jober';
import EditProfile from '../../screens/home/Owner/Profile/EditProfile';
import EditShop from '../../screens/home/Owner/Profile/EditShop';
import ChangePassword from '../../screens/home/Owner/Profile/ChangePassword';
import AddService from '../../screens/home/Owner/Profile/AddService';
import Service from '../../screens/home/Owner/Profile/Service';
import EditJober from '../../screens/home/Owner/Jober/EditJober';
import Bookings from '../../screens/home/Owner/Jober/Bookings';
import JoberReview from '../../screens/home/Owner/Jober/JoberReview';
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
      label: 'calc',
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
        name="Jober"
        component={Jober}
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
        options={({route}) => ({
          title: route.params?.data ? 'Edit Service' : 'Add Service',
        })}
      />
      <Stack.Screen
        name="Service"
        component={Service}
        options={{title: 'Services'}}
      />
      <Stack.Screen
        name="EditJober"
        component={EditJober}
        options={{title: 'Edit Jober'}}
      />
      <Stack.Screen
        name="JoberBookings"
        component={Bookings}
        options={{title: 'Jober Bookings'}}
      />
      <Stack.Screen
        name="JoberReview"
        component={JoberReview}
        options={{title: 'Jober Review'}}
      />
    </Stack.Navigator>
  );
};

export default OwnerNavigation;
