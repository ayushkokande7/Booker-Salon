import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
export default function TopNavigation({tabs}) {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'red',
        tabBarLabelStyle: {
          fontSize: 17,
          fontWeight: 'bold',
          textTransform: 'none',
        },
        tabBarStyle: {
          backgroundColor: 'blue',
          elevation: 3,
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'red',
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
