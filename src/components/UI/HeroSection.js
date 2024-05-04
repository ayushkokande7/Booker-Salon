import {View, TextInput, Image} from 'react-native';
import React from 'react';
import colors from '../../utils/Theme';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'react-native';
import {windowWidth} from '../../utils/Dimentions';
const HeroSection = () => {
  return (
    <View style={{marginVertical: 10, marginBottom: 20}}>
      <View
        style={{
          backgroundColor: colors.primary,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          padding: 15,
          height: 150,
        }}>
        <View>
          <Micon
            name="magnify"
            size={33}
            color="#808080d0"
            style={{position: 'absolute', left: 12, top: 10, zIndex: 1}}
          />
          <TextInput
            placeholder="Search"
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 50,
              height: 55,
              paddingHorizontal: 20,
              paddingLeft: 55,
              fontSize: 18,
            }}
          />
        </View>
      </View>
      <View
        style={{
          borderRadius: 40,
          width: '100%',
          height: 200,
          alignItems: 'center',
          marginTop: -65,
          backgroundColor: 'white',
          overflow: 'hidden',
        }}>
        <FlatList
          data={[1, 2, 3]}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{width: '100%', height: '100%'}}
          renderItem={({item}) => (
            <Image
              source={{
                uri: 'https://s3-alpha-sig.figma.com/img/f49a/d6c4/c3bcdc9d2f58f70c2078c82684db76c6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aAtf02X-6PKjMChvPG5B-7Sy46j2kVoSKUmgrTlZad~et8RF0koTGzxotdH5QOsA-PsxHKNb4XWT~8b-dTER8v65nT4LwJ7bjJfbzfkXyGiu9hLXBrabR535rC5~l1jtMOJY0X2JpFttuItRvXwVxqkBwdKmaI~jDoXm9CD8vJROwv8KQu6H9I-nfZv~MKTI8ylMIj17Rpf1YJfeyjoOb2lj6PWRG~m3KS6F0GczYbcFnCYc0PleEtrjY8iJAic-RFeM8X1qO8f6uWn~GiDHc2Z6dAOapC3a9YFPauFB8kU3OWq8-i1-hdOQxQO0sAkLLyjGNbKZR6LA~f9DwGS4lg__',
              }}
              style={{
                height: '100%',
                width: windowWidth(95),
                margin: 10,
                borderRadius: 40,
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

export default HeroSection;
