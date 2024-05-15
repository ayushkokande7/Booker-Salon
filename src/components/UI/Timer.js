import {View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/Theme';
import {Text, Button} from '../inputs';

const Timer = () => {
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
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 10,
          marginBottom: 15,
        }}>
        <View
          style={{
            flex: 2,
            backgroundColor: colors.primary,
            padding: 10,
            alignItems: 'center',
            borderTopEndRadius: 50,
            borderBottomEndRadius: 50,
          }}>
          <Text size="large" style={{color: 'white'}}>
            Required Time
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.primary,
            padding: 10,
            alignItems: 'center',
            borderTopStartRadius: 50,
            borderBottomStartRadius: 50,
          }}>
          <Text size="large" style={{color: 'white'}}>
            Total Time
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 15,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            overflow: 'hidden',
            borderRadius: 40,
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: colors.secondary,
              padding: 5,
              width: '100%',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text size="large" style={{color: 'white', fontWeight: 'bold'}}>
              Hours
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => increaseTime('hour', true)}
            style={{
              backgroundColor: colors.primary,
              padding: 10,
              alignItems: 'center',
              width: 70,
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
              backgroundColor: colors.primary,
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              width: 70,
              marginVertical: 10,
            }}>
            <Micon name="minus-thick" size={30} color="white" />
            <Text size="large" style={{color: 'white'}}>
              1 Hr
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            overflow: 'hidden',
            borderRadius: 40,
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: colors.secondary,
              padding: 5,
              width: '100%',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Text size="large" style={{color: 'white', fontWeight: 'bold'}}>
              Minutes
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => increaseTime('minute', true)}
            style={{
              backgroundColor: colors.primary,
              padding: 10,
              alignItems: 'center',
              borderRadius: 10,
              width: 70,
            }}>
            <Micon name="plus-thick" size={30} color="white" />
            <Text size="large" style={{color: 'white'}}>
              10
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => increaseTime('minute', false)}
            style={{
              backgroundColor: colors.primary,
              padding: 10,
              borderRadius: 10,
              alignItems: 'center',
              width: 70,
              marginVertical: 10,
            }}>
            <Micon name="minus-thick" size={30} color="white" />
            <Text size="large" style={{color: 'white'}}>
              10
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            overflow: 'hidden',
            height: 110,
            borderRadius: 20,
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: colors.secondary,
              width: '100%',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              padding: 10,
            }}>
            <Text size="large" style={{fontWeight: 'bold', color: 'white'}}>
              Hr
            </Text>
            <Text size="large" style={{fontWeight: 'bold', color: 'white'}}>
              Min
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              backgroundColor: colors.primary,
              width: '100%',
              borderWidth: 3,
              borderColor: '#fff',
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              flex: 1,
              alignItems: 'center',
              padding: 10,
            }}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              {time.hour}
            </Text>
            <Text si style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              :
            </Text>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              {time.minute}
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 10, marginHorizontal: 10}}>
        <Button
          icon="timer-outline"
          title="Start"
          onPress={() => {}}
          style={{flex: 1}}
        />
        <Button
          icon="check-circle-outline"
          title="Complete"
          onPress={() => {}}
          style={{backgroundColor: colors.success, flex: 1}}
        />
      </View>
    </>
  );
};

export default Timer;
