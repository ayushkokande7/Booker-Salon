import {Layout} from '../../../../components/UI';
import SwitchToggle from 'react-native-switch-toggle';
import {useState} from 'react';
const Settings = () => {
  const [switchOn, setSwitchOn] = useState(false);
  return (
    <Layout>
      <SwitchToggle
        switchOn={switchOn}
        onPress={() => {
          setSwitchOn(!switchOn);
        }}
        backTextLeft={!setSwitchOn ? 'a' : ''}
        backTextRight={setSwitchOn ? 'a' : ''}
      />
    </Layout>
  );
};

export default Settings;
