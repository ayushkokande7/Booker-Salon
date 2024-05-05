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
                uri: 'https://s3-alpha-sig.figma.com/img/bb1d/ba88/4e2d6d9c201e5eb1e1f13dad437382c2?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IJundy4Up68EqyvUWggp1Vj4-G4cQc03CSN7LR3pMQeqVwgfITpeXk8I0zEED-qAEMvc8HXP14FB2tqQZUvcmhhrxojkXPb-D~CMnUy20r-Rd7kYYFy005eZtRMgQmG5xgXQvbV6SjTVP41oMTEmbwIcSl0qxOzXfXxXgCA78zDUYnjvbBeCzeXYIQDysBWJijGLWpmZWPM64vCU2Bgn3k4ETeqIIHtgbKGQjSE8Ah~sPKAKm3CYBCEBOyP1oIAaMqyGcsposYTm4wFa3yV0qAX7OY6VHTFXunC4QnSaNx0TpbILrZm6vEpMWoCDU55YHkTLU782Fpa6MU81XMPHBQ__',
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
