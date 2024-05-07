import SwitchToggle from 'react-native-switch-toggle';
import {useState} from 'react';
const Switch = ({value}) => {
  const [switchOn, setSwitchOn] = useState(value);
  return (
    <SwitchToggle
      switchOn={switchOn}
      onPress={() => {
        setSwitchOn(!switchOn);
      }}
      dis
      circleColorOff="#2b2b2b"
      circleColorOn="#015301"
      backTextLeft={switchOn ? 'ON' : ''}
      backTextRight={switchOn ? '' : 'OFF'}
      textLeftStyle={{
        color: '#000000',
        fontSize: 15,
        position: 'absolute',
        left: 0,
        top: -10,
      }}
      textRightStyle={{
        color: '#000000',
        fontSize: 15,
        position: 'absolute',
        left: 5,
        top: -10,
      }}
      backgroundColorOn="#4afa4d"
      backgroundColorOff="#ffffff"
      containerStyle={{
        width: 65,
        height: 30,
        borderRadius: 25,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
      }}
      circleStyle={{
        width: 20,
        height: 20,
        borderRadius: 20,
      }}
    />
  );
};

export default Switch;
