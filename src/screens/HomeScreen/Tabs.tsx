import React, { useState } from 'react';
import { Box, HStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

const TABS = [
  {
    name: 'All',
  },
  {
    name: 'Recent',
  },
  {
    name: 'Online',
  },
];

interface Tab {
  name:string
}

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('recent');

  const handleTab = (value:string) => {
    setActiveTab(value);
  };
  return (
    <HStack justifyContent={'space-evenly'} mb={5}>
      {TABS.map((tab:Tab, idx:number) => (
        <TouchableOpacity key={idx} onPress={() => handleTab(tab.name)}>
          <Box
            width={100}
            height={50}
            bg={
              activeTab.toLowerCase() == tab.name.toLowerCase()
                ? 'blue.400'
                : 'blue.100'
            }
            color={
              activeTab.toLowerCase() == tab.name.toLowerCase()
                ? 'white'
                : 'black'
            }
            borderRadius={25}
            justifyContent={'center'}
            alignItems={'center'}
            fontSize={16}
          >
            {tab.name}
          </Box>
        </TouchableOpacity>
      ))}
    </HStack>
  );
}
