import {SafeAreaView, ScrollView, View} from 'react-native';

const Layout = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#ffffff',
          // paddingHorizontal: 8,
        }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
