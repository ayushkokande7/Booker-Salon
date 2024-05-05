import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import Miconi from 'react-native-vector-icons/Ionicons';
import colors from '../utils/Theme';
import React, {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';
import Bottom from '../components/navigations/Bottom';
const BottomNavigation = ({route}) => {
  const {Tabs} = route.params;
  const Tab = createBottomTabNavigator();

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={props => <Bottom {...props} keyboardVisible={keyboardVisible} />}>
      {Tabs?.map((item, i) => (
        <Tab.Screen
          key={i}
          name={item.label}
          component={item.component}
          options={{
            tabBarIcon: ({focused}) =>
              item.i ? (
                <Miconi
                  name={item.icon}
                  size={25}
                  color={focused ? colors.iconFocus : colors.white}
                />
              ) : (
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
