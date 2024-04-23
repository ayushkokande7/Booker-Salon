import {Layout} from '../../../components/UI';
import {View, Image} from 'react-native';
import ProfileCard from '../../../components/UI/ProfileCard';
import {Text} from '../../../components/inputs';
import {useDispatch} from 'react-redux';
import {showAlert} from '../../../redux/slices/alertSlice';
import {setUserLogout} from '../../../redux/slices/InitialSlice';
const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(
      showAlert({
        message: 'Are you sure you want to logout?',
        event: () => dispatch(setUserLogout()),
      }),
    );
  };
  return (
    <Layout>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={{width: 80, height: 80, borderRadius: 50}}
        />
        <Text size="large" style={{fontWeight: 'bold'}}>
          Ankit Budhori
        </Text>
        <Text size="medium">988998989</Text>
        <Text size="medium">Customer ID : CM001</Text>
      </View>
      <View
        style={{
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          padding: 20,
          elevation: 5,
        }}>
        <ProfileCard
          icon="account"
          title="Profile"
          color="#0762E9"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <ProfileCard
          icon="receipt"
          title="My Booking History"
          color="#FA7B44"
          onPress={() => navigation.navigate('MyBookingHistory')}
        />
        <ProfileCard
          icon="credit-card"
          title="Payment Methods"
          color="#D927F8"
          onPress={() => navigation.navigate('PaymentMethod')}
        />
        <ProfileCard
          icon="heart"
          title="Favorite's"
          color="#3CBCF4"
          onPress={() => navigation.navigate('Favorites')}
        />
        <ProfileCard
          icon="bell"
          title="Get Notification"
          color="#D1CB0D"
          onPress={() => navigation.navigate('GetNotification')}
        />
        <ProfileCard
          icon="shield-alert"
          title="Privacy Policy"
          color="#FA7B44"
          onPress={() => navigation.navigate('PrivacyPolicy')}
        />
        <ProfileCard
          icon="headset"
          title="Support"
          color="#3CD7BE"
          onPress={() => navigation.navigate('Support')}
        />
        <ProfileCard
          icon="cog"
          title="Settings"
          color="#0762E9"
          onPress={() => navigation.navigate('Settings')}
        />
        <ProfileCard
          icon="information"
          title="About Us"
          color="#D927F8"
          onPress={() => navigation.navigate('AboutUs')}
        />
        <ProfileCard
          icon="logout"
          title="Log Out"
          color="#3BBCF4"
          onPress={logout}
        />
      </View>
    </Layout>
  );
};

export default Profile;
