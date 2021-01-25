import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box } from 'native-base';

import Header from './Header';
import Tabs from './Tabs';
import Chat from './Chat';

export default function Index() {
  return (
    <SafeAreaView style={{flex:1}}>
      <Box flex={1} p={3} pt={5} bg={'white'}>
        <Box flex={1} bg={'white'} shadow={3} borderRadius={20}>
          <Header />
          <Box flex={2} bg={'white'} pt={5} borderRadius={20}>
            <Tabs />
            <Chat />
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
