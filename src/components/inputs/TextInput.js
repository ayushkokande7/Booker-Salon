import React from 'react';
import {View, TextInput} from 'react-native';
import {Text} from '../../components/inputs';
const MyTextInput = ({label, inputRef, value, keyboard = 'default', style}) => {
  return (
    <View style={{marginBottom: 10, gap: 5}}>
      <Text size="large" style={{marginLeft: 10}}>
        {label}
      </Text>
      <TextInput
        ref={inputRef}
        keyboardType={keyboard}
        value={value}
        onChangeText={text => (inputRef.current.value = text)}
        style={{
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderColor: '#b8b7b7',
          borderRadius: 50,
          paddingHorizontal: 15,
          fontSize: 17,
          ...style,
          elevation: 3,
        }}
      />
    </View>
  );
};

export default MyTextInput;
