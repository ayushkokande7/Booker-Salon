import SwitchToggle from 'react-native-switch-toggle';
const Switch = () => {
  return (
    <SwitchToggle
      switchOn={false}
      onPress={() => {}}
      circleColorOff="#2b2b2b"
      circleColorOn="#015301"
      backTextLeft="off"
      backTextRight="off"
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
        left: 12,
        top: -10,
      }}
      backgroundColorOn="#4afa4d"
      backgroundColorOff="#ffffff"
      containerStyle={{
        width: 65,
        height: 30,
        borderRadius: 25,
        padding: 5,
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
