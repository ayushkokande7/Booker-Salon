import React, {useState} from 'react';
import {FlatList, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Button, Text} from '../inputs';
import DatePicker from 'react-native-date-picker';
const SelectDate = () => {
  const startDate = new Date();
  const dates = Array.from(
    {length: 7},
    (_, i) => new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000),
  );

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = date => {
    setSelectedDate(date);
  };

  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View>
        <View style={styles.container}>
          <Text size="large" style={{color: 'white'}}>
            {selectedDate.toDateString()}
          </Text>
          <DateSelection
            dates={dates}
            selectedDate={selectedDate}
            onDateSelect={handleDateSelect}
          />
        </View>
        <View style={{backgroundColor: '#2E7EF6'}}>
          <View style={styles.timeContainer}>
            <Text size="large">Time</Text>
            <DatePicker
              mode="time"
              date={new Date()}
              style={{marginVertical: 10}}
            />
          </View>
        </View>
      </View>
      <Button title="Book Now" style={{marginHorizontal: 10}} />
    </View>
  );
};
const DateSelection = ({dates, selectedDate, onDateSelect}) => {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const renderDateCircle = ({item}) => (
    <TouchableOpacity
      style={[
        styles.dateCircle,
        {
          backgroundColor:
            item.toDateString() === selectedDate?.toDateString()
              ? '#ffffff'
              : '#ffffffad',
        },
      ]}
      onPress={() => onDateSelect(item)}>
      <View
        style={[
          styles.date,
          {
            backgroundColor:
              item.toDateString() === selectedDate?.toDateString()
                ? '#2E7EF6'
                : '#b6b5b5',
          },
        ]}>
        <Text
          size="large"
          style={{
            color:
              item.toDateString() === selectedDate?.toDateString()
                ? 'white'
                : 'black',
          }}>
          {item.getDate()}
        </Text>
      </View>
      <View style={styles.day}>
        <Text size="medium">{daysOfWeek[item.getDay()]}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={dates}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.toDateString()}
      renderItem={renderDateCircle}
      contentContainerStyle={{
        gap: 7,
        marginVertical: 10,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: '#2E7EF6',
    paddingVertical: 20,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    alignItems: 'center',
  },
  dateCircle: {
    borderRadius: 50,
    padding: 3,
    width: 50,
    height: 90,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '55%',
  },
  day: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeContainer: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default SelectDate;
