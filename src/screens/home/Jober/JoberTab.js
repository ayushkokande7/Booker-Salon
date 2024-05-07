import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {Text} from '../../../components/inputs';
import FlatListComponent from '../../../components/Layout/FlatList';
import UserCard from '../../../components/UI/UserCard';
const JoberTab = () => {
  const [active, setActive] = useState(0);
  return (
    <>
      <View style={{flexDirection: 'row', gap: 2}}>
        <TouchableOpacity
          style={[
            styles.tab,
            {backgroundColor: active === 0 ? '#CB96A1' : '#FFCED8'},
          ]}
          onPress={() => setActive(0)}>
          <Text size="large" style={{fontWeight: 'bold'}}>
            Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            {backgroundColor: active === 1 ? '#CB96A1' : '#FFCED8'},
          ]}
          onPress={() => setActive(1)}>
          <Text size="large" style={{fontWeight: 'bold'}}>
            Next Day
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatListComponent Comp={<UserCard />} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default JoberTab;
