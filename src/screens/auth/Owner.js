import {View} from 'react-native';
import {useRef} from 'react';
import {Button, Text, TextInput} from '../../components/inputs';
import {Layout} from '../../components/UI';
const Owner = () => {
  const nameInputRef = useRef();
  return (
    <Layout>
      <Text
        size="large"
        title="Please Log in/Sign up"
        style={{alignSelf: 'center'}}
      />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
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
            <Text
              size="medium"
              title="Didn't receive the OTP?"
              style={{color: 'blue'}}
            />
          </View>
        </View>
        <View style={{marginBottom: 10}}>
          <Text size="large" title="Log in/Sign up" />
          <Button title="Log in" />
        </View>
      </View>
    </Layout>
  );
};

export default Owner;
