import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../utils/Theme';
const BottomNavigation = ({route}) => {
  const {Tabs} = route.params;
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
        tabBarActiveBackgroundColor: 'blue',
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={props => (
        <BottomFabBar
          mode="default"
          focusedButtonStyle={{
            backgroundColor: colors.primary,
          }}
          {...props}
        />
      )}>
      {Tabs?.map((item, i) => (
        <Tab.Screen
          key={i}
          name={item.label}
          component={item.component}
          options={{
            tabBarIcon: ({focused}) => (
              <Micon
                name={item.icon}
                size={30}
                color={focused ? colors.iconFocus : colors.white}
              />
            ),
            tabBarLabel: item.label,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
