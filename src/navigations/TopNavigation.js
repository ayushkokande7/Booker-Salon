import {View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {Text} from '../components/inputs';
import {Layout} from '../components/UI';
import Svg, {Path} from 'react-native-svg';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
const TopNavigation = ({tabs}) => {
  const [tab, setTabs] = useState(0);
  return (
    <Layout padding>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 10,
          marginBottom: 15,
        }}>
        {tabs.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => setTabs(index)}
              key={index}
              style={{
                flex: 1,
                backgroundColor: tab === index ? '#00368E' : '#0762E9',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                <Micon name={item.icon} size={25} color="white" />
                <Text size="large" style={{color: 'white'}}>
                  {item.name}
                </Text>
              </View>
              {tab === index && (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    width: 20,
                    height: 0,
                  }}>
                  <Svg
                    width={110}
                    height={60}
                    viewBox="0 0 110 60"
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Path
                      d="M24 12C12 12 18.6274 24 12 24C5.37258 24 12 12 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
                      fill="#00368E"
                    />
                  </Svg>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
      {tabs[tab].component}
    </Layout>
  );
};

export default TopNavigation;
