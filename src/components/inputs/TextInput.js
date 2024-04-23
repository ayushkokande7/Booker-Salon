import React from 'react';
import {View, TextInput} from 'react-native';
import {Text} from '../../components/inputs';
const MyTextInput = ({label, inputRef, style}) => {
  return (
    <View>
      <Text size="large">{label}</Text>
      <TextInput
        ref={inputRef}
        onChangeText={text => (inputRef.current.value = text)}
        style={{
          backgroundColor: '#3DCEB8',
          padding: 15,
          fontSize: 17,
          ...style,
        }}
      />
    </View>
  );
};

export default MyTextInput;
