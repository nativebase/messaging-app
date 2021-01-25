import React from 'react';
import { Box, Icon, Input } from 'native-base';

export default function Footer() {
  return (
    <Box
      flex={1.3}
      bg={'white'}
      borderTopRadius={30}
      borderBottomRadius={20}
      shadow={5}
    >
      <Box
        pl={5}
        pr={5}
        mt={'auto'}
        mb={'auto'}
        justifyContent={'space-between'}
        alignItems={'center'}
        flexDirection={'row'}
      >
        <Box
          w={9}
          h={9}
          shadow={1}
          bg={'white'}
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius={20}
          borderColor={'#DEF3FE'}
        >
          <Icon type='Ionicons' name='attach' color={'black'} size={6} />
        </Box>
        <Input
          variant='rounded'
          w='70%'
          type={'text'}
          InputRightElement={
            <Box pl={3} mr={4}>
              <Icon type='Feather' name='smile' color={'black'} size={5} />
            </Box>
          }
          placeholder='Type your message...'
          borderColor={'blue.200'}
          backgroundColor={'blue.200'}
        />
        <Box
          w={9}
          h={9}
          shadow={1}
          bg={'white'}
          justifyContent={'center'}
          alignItems={'center'}
          borderRadius={20}
          borderColor={'#DEF3FE'}
        >
          <Icon type='Ionicons' name='mic' color={'black'} size={5} />
        </Box>
      </Box>
    </Box>
  );
}
