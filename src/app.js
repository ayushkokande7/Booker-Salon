import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import AuthNavigation from './navigations/StackNavigation/AuthNavigation';
import CustomerNavigation from './navigations/StackNavigation/CustomerNavigation';
import OwnerNavigation from './navigations/StackNavigation/OwnerNavigation';
import JoberNavigation from './navigations/StackNavigation/JoberNavigation';
import {useSelector} from 'react-redux';
import Alert from './components/Layout/Alert';
const App = () => {
  const {userType} = useSelector(state => state.initial);
  const renderNavigation = () => {
    switch (userType) {
      case null:
        return <AuthNavigation />;
      case 'customer':
        return <CustomerNavigation />;
      case 'owner':
        return <OwnerNavigation />;
      case 'jober':
        return <JoberNavigation />;
      default:
        return <AuthNavigation />;
    }
  };
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor="#ffffffff" />
      <NavigationContainer>
        {renderNavigation()}
        <Alert />
      </NavigationContainer>
    </>
  );
};

export default App;
