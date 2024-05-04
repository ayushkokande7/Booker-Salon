import {View, Image} from 'react-native';
import React from 'react';
import {Text} from '../../../../components/inputs';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../../utils/Theme';
import TopNavigation from '../../../../navigations/TopNavigation';
import {Layout} from '../../../../components/UI';
import Services from '../../../../components/Layout/Services';
import Jober from './Jober';
import Pricing from './Pricing';
import Reviews from './Reviews';
import IconRound from '../../../../components/UI/IconRound';
const Index = ({navigation}) => {
  const tabs = [
    {
      name: 'Jober',
      icon: 'spray-bottle',
      component: <Jober />,
    },
    {
      name: 'Pricing',
      icon: 'tag-multiple',
      component: <Pricing />,
    },
    {
      name: 'Reviews',
      icon: 'message-alert',
      component: <Reviews />,
    },
  ];

  return (
    <Layout>
      <IconRound
        onPress={() => navigation.goBack()}
        icon="arrow-left"
        color="black"
        style={{
          position: 'absolute',
          left: 10,
          top: 10,
          zIndex: 1,
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderColor: '#bababa',
        }}
      />
      <View>
        <Image
          source={{uri: 'https://picsum.photos/536/354'}}
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
                backgroundColor: '#ffffffa5',
                borderTopRightRadius: 10,
                paddingHorizontal: 5,
                borderBottomRightRadius: 10,
              }}>
              Shop Name
            </Text>
            <Text
              size="medium"
              style={{
                backgroundColor: '#ffffffa7',
                borderTopRightRadius: 10,
                paddingHorizontal: 5,
                borderBottomRightRadius: 10,
              }}>
              Shop ID: SP001
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 3,
              backgroundColor: 'white',
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              paddingHorizontal: 5,
              paddingVertical: 3,
            }}>
            <Micon name="star" size={25} color={colors.yellow} />
            <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
              <Text size="medium" style={{fontWeight: 'bold'}}>
                4.5
              </Text>
              <Text size="medium">(36)</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{margin: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Micon name="map-marker" size={23} color={colors.iconFocus} />
            <Text size="medium" noOfLine={1}>
              Rz 45/333, new delhi 45/333
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 3, alignItems: 'center'}}>
            <Micon name="arrow-left-right" size={23} color={colors.primary} />
            <Text size="medium">5 Km</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text size="large">Services</Text>
            <Text size="medium">View All</Text>
          </View>
          <Services />
          <View></View>
        </View>
      </View>
      <TopNavigation tabs={tabs} />
    </Layout>
  );
};

export default Index;
