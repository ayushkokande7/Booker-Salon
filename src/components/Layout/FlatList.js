import {FlatList} from 'react-native';
import {Text} from '../inputs';
import {View} from 'react-native';
const FlatListComponent = ({horizontal = false, comp: Comp, name}) => {
  return (
    <View style={{marginVertical: 10}}>
      <Text size="large" title={name} style={{padding: 10}} />
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
