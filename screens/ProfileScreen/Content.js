import React from 'react';
import { ScrollView } from 'react-native';
import { Box, VStack } from 'native-base';

import ChatImage from './ChatImage';
import ChatLeft from './ChatLeft';
import ChatRight from './ChatRight';

export default function Content() {
  return (
    <Box flex={7} bg={'white'} borderRadius={20}>
      <ScrollView>
        <VStack bg={'white'} pl={2} pr={2} pt={5} pb={2}>
          <ChatLeft chat={'text'} />
          <ChatRight chat={'text'} />
          <ChatImage />
          <ChatRight chat={'audio'} />
          <ChatLeft chat={'audio'} />
        </VStack>
      </ScrollView>
    </Box>
  );
}
