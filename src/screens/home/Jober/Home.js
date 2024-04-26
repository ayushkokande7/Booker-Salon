import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Layout} from '../../../components/UI';
import {Button, Text} from '../../../components/inputs';

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
        <Text
          size="medium"
          style={{position: 'absolute', bottom: 5, right: 5, color: 'white'}}>
          Shop ID- SP001
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#aba8a8',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{backgroundColor: '#6262ef'}}>
          <Text size="medium">Shop</Text>
        </View>
        <View style={{backgroundColor: '#6f6fea'}}>
          <Text size="medium">Shop</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 5,
          marginVertical: 5,
          alignItems: 'center',
        }}>
        <Text
          size="large"
          style={{
            backgroundColor: '#27dd2e',
            padding: 10,
            paddingHorizontal: 10,
            borderBottomRightRadius: 50,
            borderTopRightRadius: 50,
          }}>
          1
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#aba8a8',
            borderTopStartRadius: 50,
            borderBottomStartRadius: 50,
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image
              source={{uri: 'https://picsum.photos/536/354'}}
              style={{width: 60, height: 60, borderRadius: 50}}
            />
            <Text size="large">Ankit</Text>
          </View>
          <Text size="medium">2:30pm</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SetTime')}
            style={{
              padding: 13,
              backgroundColor: '#00FF01',
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
            }}>
            <Text size="large">Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Home;
