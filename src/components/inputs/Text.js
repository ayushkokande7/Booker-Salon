import {Text} from 'react-native';
import React from 'react';

const TextComponent = ({size, title, style, noOfLine}) => {
  let Tsize;
  if (size === 'large') {
    Tsize = 20;
  } else if (size === 'medium') {
    Tsize = 16;
  } else if (size === 'small') {
    Tsize = 12;
  }
  return (
    <Text
      numberOfLines={noOfLine}
      style={[{fontSize: Tsize, color: 'black'}, style]}>
      {title}
    </Text>
  );
};

export default TextComponent;
