import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from '../BottomNavigation';
import Home from '../../screens/home/Customer/Home';
import Shops from '../../screens/home/Customer/Shops';
import Profile from '../../screens/home/Customer/Profile';
import Booking from '../../screens/home/Customer/Booking';
import EditProfile from '../../screens/home/Customer/Profile/EditProfile';
import BookingHistory from '../../screens/home/Customer/Profile/BookingHistory';
import PaymentMethod from '../../screens/home/Customer/Profile/PaymentMethod';
import Favorites from '../../screens/home/Customer/Profile/Favorites';
import Notifications from '../../screens/home/Customer/Profile/Notifications';
import Support from '../../screens/home/Customer/Profile/Support';
import Settings from '../../screens/home/Customer/Profile/Settings';
import AboutUs from '../../screens/home/Customer/Profile/AboutUs';
import PrivacyPolicy from '../../screens/home/Customer/Profile/PrivacyPolicy';
import Shop from '../../screens/home/Customer/Shop';
import JoberDetails from '../../screens/home/Customer/Shop/JoberDetails';
import ScheduleBooking from '../../screens/home/Customer/Shop/ScheduleBooking';
import Nearby from '../../screens/home/Customer/Shop/Nearby';
const CustomerNavigation = () => {
  const Stack = createStackNavigator();
  const Tabs = [
    {
      icon: 'home',
      label: 'Home',
      component: Home,
    },
    {
      icon: 'store',
      label: 'Shops',
      component: Shops,
    },
    {
      icon: 'calendar-number-sharp',
      i: true,
      label: 'Booking',
      component: Booking,
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
        name="EditProfile"
        component={EditProfile}
        options={{title: 'Edit Profile'}}
      />
      <Stack.Screen
        name="Shop"
        component={Shop}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MyBookingHistory"
        component={BookingHistory}
        options={{title: 'Booking History'}}
      />
      <Stack.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{title: 'Payment Method'}}
      />
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{title: 'Favorite'}}
      />
      <Stack.Screen
        name="Notification"
        component={Notifications}
        options={{title: 'Notification'}}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{title: 'Privacy Policy'}}
      />
      <Stack.Screen
        name="Support"
        component={Support}
        options={{title: 'Support'}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{title: 'Settings'}}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{title: 'About Us'}}
      />
      <Stack.Screen
        name="JoberDetails"
        component={JoberDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScheduleBooking"
        component={ScheduleBooking}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Nearby"
        component={Nearby}
        options={{title: 'Nearby'}}
      />
    </Stack.Navigator>
  );
};

export default CustomerNavigation;
