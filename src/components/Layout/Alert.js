import {View, Modal, TouchableOpacity} from 'react-native';
import {Text, Button} from '../inputs';
import {useSelector, useDispatch} from 'react-redux';
import {hideAlert} from '../../redux/slices/alertSlice';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
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
            justifyContent: 'center',
          }}>
          <Micon
            name={seticon}
            size={80}
            color="#0762E9"
            style={{alignSelf: 'center'}}
          />
          <Text style={{fontWeight: 'bold', fontSize: 25, textAlign: 'center'}}>
            {title}
          </Text>
          <Text size="large" style={{marginVertical: 25, textAlign: 'center'}}>
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
                <Text size="large" style={{textAlign: 'center'}}>
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
