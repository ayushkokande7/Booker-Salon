import {View, Modal, TouchableOpacity} from 'react-native';
import {Text, Button} from '../inputs';
import {useSelector, useDispatch} from 'react-redux';
import {hideAlert} from '../../redux/slices/alertSlice';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import colors from '../../utils/Theme';
const Alert = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {isVisible, message, event, title, icon} = useSelector(
    state => state.alert,
  );
  const closeAlert = () => {
    dispatch(hideAlert());
  };
  const handleEvent = () => {
    event();
    closeAlert();
  };
  const handleNavigate = a => {
    if (a) navigation.navigate('BottomNavigation');
    else navigation.navigate('MyBookingHistory');
    closeAlert();
  };
  let seticon;
  if (icon == 'info') {
    seticon = 'information-outline';
  } else {
    seticon = 'check-circle-outline';
  }
  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent
      statusBarTranslucent
      onRequestClose={closeAlert}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.632)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#ffffff',
            padding: 15,
            borderRadius: 25,
            margin: 15,
            paddingHorizontal: 30,
            justifyContent: 'center',
          }}>
          <Micon
            name={seticon}
            size={90}
            color={icon == 'info' ? colors.primary : colors.iconFocus}
            style={{alignSelf: 'center'}}
          />
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            {title}
          </Text>
          {icon == 'info' ? null : (
            <Text
              size="large"
              style={{
                alignSelf: 'center',
                color: '#525252',
                marginVertical: 10,
              }}>
              For Your Booking
            </Text>
          )}
          <Text
            size="large"
            style={{marginVertical: 10, marginBottom: 30, textAlign: 'center'}}>
            {message}
          </Text>
          {icon == 'info' ? (
            <View style={{flexDirection: 'row', gap: 10}}>
              <Button title="No" onPress={closeAlert} style={{flex: 1}} />
              <Button title="Yes" onPress={handleEvent} style={{flex: 1}} />
            </View>
          ) : (
            <View>
              <Button
                title="Track My Booking"
                onPress={() => handleNavigate()}
              />
              <TouchableOpacity
                onPress={() => handleNavigate(1)}
                style={{marginBottom: 20, marginTop: 10}}>
                <Text
                  size="large"
                  style={{textAlign: 'center', color: colors.primary}}>
                  Back to Home
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default Alert;
