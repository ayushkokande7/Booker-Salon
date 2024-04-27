import React from 'react';
import {View, TextInput} from 'react-native';
import {Text} from '../../components/inputs';
const MyTextInput = ({label, inputRef, value, keyboard = 'default', style}) => {
  return (
    <View style={{marginBottom: 10}}>
      <Text size="large">{label}</Text>
      <TextInput
        ref={inputRef}
        keyboardType={keyboard}
        value={value}
        onChangeText={text => (inputRef.current.value = text)}
        style={{
          backgroundColor: '#3DCEB8',
          padding: 12,
          fontSize: 17,
          ...style,
          elevation: 3,
        }}
      />
    </View>
  );
};

export default MyTextInput;
