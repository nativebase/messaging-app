import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box } from 'native-base';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';

export default function Index() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Box flex={1} p={3} pt={5} bg={'white'}>
        <Box flex={1} bg={'white'} borderRadius={20} shadow={5}>
          <Header />
          <Content />
          <Footer />
        </Box>
      </Box>
    </SafeAreaView>
  );
}
