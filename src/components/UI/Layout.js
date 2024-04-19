import {SafeAreaView, ScrollView, View} from 'react-native';

const Layout = ({children, padding = false, style}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: '#ffffff',
          paddingHorizontal: padding ? 8 : 0,

          ...style,
        }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
