import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home/Main';
import OnBoarding from '../screens/auth/OnBoarding';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/Theme';
const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
        tabBarActiveBackgroundColor: colors.primary,
      }}
      tabBar={props => (
        <BottomFabBar
          mode="default"
          focusedButtonStyle={{
            backgroundColor: colors.primary,

            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
          }}
          {...props}
        />
      )}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Micon
              name="home"
              size={30}
              color={focused ? colors.iconFocus : colors.white}
            />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{
          tabBarIcon: ({focused}) => (
            <Micon
              name="home"
              size={30}
              color={focused ? colors.iconFocus : colors.white}
            />
          ),
          tabBarLabel: 'OnBoarding',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
