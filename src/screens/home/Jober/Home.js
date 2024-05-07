import {View, Image} from 'react-native';
import React from 'react';
import {Layout} from '../../../components/UI';
import {Text} from '../../../components/inputs';
import ShopToogle from '../../../components/UI/ShopToogle';
import UserCard from '../../../components/UI/UserCard';
import JoberTab from './JoberTab';
const Home = ({navigation}) => {
  return (
    <Layout>
      <View>
        <Image
          source={{
            uri: 'https://picsum.photos/536/354',
          }}
          style={{width: '100%', height: 200}}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 5,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{gap: 5}}>
            <Text
              size="large"
              style={{
                backgroundColor: '#ffffffc8',
                borderTopRightRadius: 10,
                paddingHorizontal: 5,
                borderBottomRightRadius: 10,
              }}>
              Shop Name
            </Text>
            <Text
              size="medium"
              style={{
                backgroundColor: '#ffffffc8',
                borderTopRightRadius: 10,
                paddingHorizontal: 5,
                borderBottomRightRadius: 10,
              }}>
              Shop ID: SP001
            </Text>
          </View>
        </View>
      </View>
      <ShopToogle />
      <JoberTab />
    </Layout>
  );
};

export default Home;
