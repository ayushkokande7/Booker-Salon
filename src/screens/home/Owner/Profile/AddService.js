import {View, Image} from 'react-native';
import {Layout} from '../../../../components/UI';
import IconRound from '../../../../components/UI/IconRound';
import {Button, TextInput} from '../../../../components/inputs';
import {useDispatch} from 'react-redux';
import {showAlert} from '../../../../redux/slices/alertSlice';
const AddService = ({route}) => {
  const show = route.params?.data;
  const dispatch = useDispatch();
  const deleteService = () => {
    dispatch(
      showAlert({
        message: 'Are you sure you want to delete this service?',
        event: () => {},
      }),
    );
  };
  return (
    <Layout padding style={{justifyContent: 'space-between'}}>
      <View>
        <View style={{marginBottom: 20}}>
          <Image
            source={{
              uri: show?.image || 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={{width: '100%', height: 200}}
          />
          <IconRound
            icon="plus"
            style={{position: 'absolute', right: 10, bottom: 10}}
          />
        </View>
        <View>
          <TextInput label="Service Name" value={show?.name} />
          <TextInput
            keyboard="numeric"
            label="Service Price"
            value={show?.price}
          />
        </View>
      </View>
      {show ? (
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            gap: 10,
          }}>
          <Button
            onPress={deleteService}
            title="Delete Service"
            style={{backgroundColor: '#e12b2b', flex: 1}}
          />
          <Button title="Edit Service" style={{flex: 1}} />
        </View>
      ) : (
        <Button title="Add Service" />
      )}
    </Layout>
  );
};

export default AddService;
