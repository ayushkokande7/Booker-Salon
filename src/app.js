import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AuthNavigation from './navigations/StackNavigation/AuthNavigation';
const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="#ffffffff" />
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </>
  );
};

export default App;
