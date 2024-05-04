import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Layout} from '../../../components/UI';
import {Text} from '../../../components/inputs';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';

const SetTime = () => {
  const [time, setTime] = useState({hour: 0, minute: 0});

  const increaseTime = (type, inc) => {
    if (inc) {
      if (type === 'hour') {
        setTime(prevTime => ({...prevTime, hour: prevTime.hour + 1}));
      } else if (type === 'minute') {
        setTime(prevTime => {
          const newMinute = prevTime.minute + 10;
          if (newMinute === 60) {
            return {hour: prevTime.hour + 1, minute: 0};
          }
          return {...prevTime, minute: newMinute};
        });
      }
    } else {
      if (type === 'hour' && time.hour > 0) {
        setTime(prevTime => ({...prevTime, hour: prevTime.hour - 1}));
      } else if (type === 'minute') {
        setTime(prevTime => {
          const newMinute = prevTime.minute - 10;
          if (newMinute < 0 && prevTime.hour > 0) {
            return {hour: prevTime.hour - 1, minute: 50};
          }
          if (newMinute < 0) return {hour: prevTime.hour, minute: 0};
          return {...prevTime, minute: newMinute};
        });
      }
    }
  };

  return (
    <Layout padding>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 5,
          marginBottom: 10,
        }}>
        <Image
          source={{uri: 'https://picsum.photos/536/354'}}
          style={{width: 120, height: 120, borderRadius: 100}}
        />
        <Text size="large" style={{fontWeight: 'bold'}}>
          Ankit
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 15,
        }}>
        <View
          style={{
            backgroundColor: '#98f072',
            paddingVertical: 20,
            borderRadius: 40,
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#eb2c2c',
              padding: 10,
              position: 'absolute',
              top: 0,
              right: 0,
            }}>
            <Text size="large">Hours</Text>
          </View>
          <TouchableOpacity
            onPress={() => increaseTime('hour', true)}
            style={{
              backgroundColor: '#3a5cf4',
              padding: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
            }}>
            <Micon name="plus-thick" size={30} color="white" />
            <Text size="large" style={{color: 'white'}}>
              1 Hr
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => increaseTime('hour', false)}
            style={{
              backgroundColor: '#3a5cf4',
              padding: 10,
              borderRadius: 10,
              paddingHorizontal: 20,
              marginTop: 10,
            }}>
            <Micon name="minus-thick" size={30} color="white" />
            <Text size="large" style={{color: 'white'}}>
              1 Hr
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#98f072', padding: 10, flex: 1}}>
          <Text size="large">Minutes</Text>
          <TouchableOpacity
            onPress={() => increaseTime('minute', true)}
            style={{backgroundColor: '#3a5cf4', padding: 10, borderRadius: 10}}>
            <Micon name="plus-thick" size={30} color="white" />
            <Text size="large" style={{color: 'white'}}>
              10
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => increaseTime('minute', false)}
            style={{
              backgroundColor: '#3a5cf4',
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}>
            <Micon name="minus-thick" size={30} color="white" />
            <Text size="large" style={{color: 'white'}}>
              10
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#98f072', padding: 10, flex: 1}}>
          <View style={{backgroundColor: '#3a5cf4', width: 100}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <Text size="large">Hr</Text>
              <Text size="large">Min</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Text size="large">{time.hour}</Text>
              <Text size="large">:</Text>
              <Text size="large">{time.minute}</Text>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default SetTime;
