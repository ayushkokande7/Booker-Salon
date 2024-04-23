import {FlatList} from 'react-native';
import {Text} from '../inputs';
import {View} from 'react-native';
const FlatListComponent = ({horizontal = false, Comp, name}) => {
  return (
    <View style={{marginVertical: 10}}>
      {name && (
        <Text size="large" style={{padding: 10}}>
          {name}
        </Text>
      )}

      <FlatList
        data={[1, 2, 3]}
        renderItem={({item}) => Comp}
        keyExtractor={(item, i) => i}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default FlatListComponent;
