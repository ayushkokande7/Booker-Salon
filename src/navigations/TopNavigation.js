import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
export default function TopNavigation({tabs}) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#c6c6c6',
        tabBarLabelStyle: {
          fontSize: 17,
          fontWeight: 'bold',
          textTransform: 'none',
        },
        tabBarStyle: {
          backgroundColor: 'blue',
        },

        tabBarIndicatorStyle: {
          backgroundColor: '#f4125d',
          height: 3,
        },
      }}>
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          initialParams={tab.data}
        />
      ))}
    </Tab.Navigator>
  );
}
