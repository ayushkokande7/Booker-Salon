import {View} from 'react-native';
import {useRef} from 'react';
import {Button, Text, TextInput} from '../../components/inputs';
import {Layout} from '../../components/UI';
import {useDispatch} from 'react-redux';
import {setUserLogin} from '../../redux/slices/InitialSlice';
const Jober = () => {
  const nameInputRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setUserLogin({userType: 'jober', user: {name: 'Ankit'}}));
  };
  return (
    <Layout padding>
      <Text size="large" style={{alignSelf: 'center'}}>
        Please Log in/Sign up
      </Text>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <TextInput
            label="Shop ID"
            inputRef={nameInputRef}
            style={{
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              marginBottom: 15,
            }}
          />
          <TextInput
            label="Name"
            inputRef={nameInputRef}
            style={{
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              marginBottom: 15,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              marginBottom: 15,
            }}>
            <View style={{flex: 1}}>
              <TextInput
                label="Mobile No."
                inputRef={nameInputRef}
                style={{borderTopRightRadius: 50, borderBottomRightRadius: 50}}
              />
            </View>
            <Button title="OTP" style={{width: 100}} />
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <View style={{flex: 1}}>
                <TextInput
                  label="Enter OTP"
                  inputRef={nameInputRef}
                  style={{
                    borderTopRightRadius: 50,
                    borderBottomRightRadius: 50,
                  }}
                />
              </View>
              <Button title="Verify" style={{width: 100}} />
            </View>
            <Text size="medium" style={{color: 'blue'}}>
              Didn't receive the OTP?
            </Text>
          </View>
        </View>
        <View style={{marginBottom: 10}}>
          <Text size="large">Log in/Sign up</Text>
          <Button title="Log in" onPress={handleSubmit} />
        </View>
      </View>
    </Layout>
  );
};

export default Jober;
