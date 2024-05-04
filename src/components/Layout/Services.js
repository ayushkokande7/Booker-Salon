import {View} from 'react-native';
import {Text} from '../inputs';
import {isDraft} from '@reduxjs/toolkit';
const Services = () => {
  const data = [
    {
      id: 1,
      name: 'Cleaning',
    },
    {
      id: 2,
      name: 'Cooking',
    },
    {
      id: 3,
      name: 'Cooking',
    },
    {
      id: 4,
      name: 'Cooking',
    },
    {
      id: 5,
      name: 'Cookingasdasd',
    },
    {
      id: 6,
      name: 'Co122122oking',
    },
  ];
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 7,
        justifyContent: 'flex-end',
        marginVertical: 10,
      }}>
      {data.map(item => {
        return (
          <View
            key={item.id}
            style={{
              padding: 7,
              borderWidth: 1,
              borderColor: '#494949',
              borderRadius: 10,
            }}>
            <Text size="medium">{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Services;
