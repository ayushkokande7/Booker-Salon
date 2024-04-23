import {View, Modal} from 'react-native';
import {Text, Button} from '../inputs';
import {useSelector, useDispatch} from 'react-redux';
import {hideAlert} from '../../redux/slices/alertSlice';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
const Alert = () => {
  const dispatch = useDispatch();
  const {isVisible, message, event} = useSelector(state => state.alert);
  const closeAlert = () => {
    dispatch(hideAlert());
  };
  const handleEvent = () => {
    event();
    closeAlert();
  };
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
            padding: 10,
            borderRadius: 25,
            margin: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Micon name="information-outline" size={80} color="#0762E9" />
          <Text style={{fontWeight: 'bold', fontSize: 25}}>Confirmation</Text>
          <Text size="large" style={{marginVertical: 25}}>
            {message}
          </Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Button title="No" onPress={closeAlert} style={{flex: 1}} />
            <Button title="Yes" onPress={handleEvent} style={{flex: 1}} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Alert;
