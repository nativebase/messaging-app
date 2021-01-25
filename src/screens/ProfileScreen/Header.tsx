import React from 'react';
import { Box, HStack, Icon, Text, Avatar } from 'native-base';

export default function Header() {
  return (
    <Box flex={1.4} bg={'blue.400'} borderRadius={20}>
      <HStack
        pl={5}
        pr={5}
        mt={'auto'}
        mb={'auto'}
        justifyContent={'space-between'}
      >
        <HStack alignItems={'center'}>
          <Box mr={1}>
            <Icon
              type='Entypo'
              name='chevron-small-left'
              color={'white'}
              size={7}
            />
          </Box>

          <Avatar
            name='Abc'
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg',
            }}
            borderColor={'white'}
            borderWidth={1}
            size={'sm'}
          />
          <Text pl={2} fontSize={18} color={'white'} fontWeight={'500'}>
            Zunaid
          </Text>
        </HStack>

        <HStack justifyContent={'space-between'}>
          <Box pr={2}>
            <Icon type='FontAwesome' name='phone' color={'white'} size={5} />
          </Box>
          <Box pl={2}>
            <Icon type='Entypo' name='video-camera' color={'white'} size={5} />
          </Box>
          <Box pl={2}>
            <Icon
              type='Entypo'
              name='dots-three-vertical'
              color={'white'}
              size={5}
            />
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
}
