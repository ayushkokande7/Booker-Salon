import {createStackNavigator} from '@react-navigation/stack';
import Main from '../../screens/home/Main';
import BottomNavigation from '../BottomNavigation';
const CustomerNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  );
};

export default CustomerNavigation;
