import {createStackNavigator} from '@react-navigation/stack';
import OnBoarding from '../../screens/auth/OnBoarding';
import Owner from '../../screens/auth/Owner';
import Jober from '../../screens/auth/Jober';
import Customer from '../../screens/auth/Customer';
import Home from '../../screens/home/Customer/Home';
import BottomNavigation from '../BottomNavigation';
const AuthNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="onboarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Owner"
        component={Owner}
        options={{title: 'Shop Owner'}}
      />
      <Stack.Screen
        name="Jober"
        component={Jober}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Customer"
        component={Customer}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
