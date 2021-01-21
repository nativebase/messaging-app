import React from 'react';
import { ScrollView } from 'react-native';
import {
  Box,
  HStack,
  Icon,
  Text,
  Input,
  Avatar,
  AvatarBadge,
  VStack,
} from 'native-base';

import { MEMBER } from './dummyData/member';

export default function Header() {
  return (
    <VStack
      flex={1}
      bg={'bg.100'}
      pt={10}
      pl={5}
      pr={5}
      pb={8}
      borderRadius={20}
      justifyContent={'space-between'}
    >
      <HStack justifyContent={'space-between'} mb={4}>
        <HStack alignItems={'center'}>
          <Box
            borderColor={'bg.100'}
            justifyContent={'center'}
            alignItems={'center'}
            h={8}
            w={8}
            backgroundColor={'white'}
            borderRadius={20}
            borderWidth={1}
          >
            <Icon
              type='FontAwesome'
              name='telegram'
              color={'bg.100'}
              size={6}
            />
          </Box>
          <Text pl={2} fontSize={18} color={'white'}>
            Telegarm
          </Text>
        </HStack>

        <Icon type='Ionicons' name='ios-menu-sharp' color={'white'} size={6} />
      </HStack>
      <Input
        variant='rounded'
        w='100%'
        type={'text'}
        InputLeftElement={
          <Box pl={3} pr={1}>
            <Icon type='FontAwesome' name='search' color={'black'} size={6} />
          </Box>
        }
        placeholder='Search Friend'
        borderColor={'white'}
        backgroundColor={'white'}
        mb={4}
      />
      <VStack>
        <Text fontSize={18} color={'white'} mb={2}>
          Pinned Contact
        </Text>
        <ScrollView horizontal={true}>
          <Icon
            type='Ionicons'
            name='add-circle-sharp'
            color={'white'}
            size={12}
          />
          {MEMBER.map((item, idx) => (
            <Avatar
              key={idx}
              name={item.name}
              source={{
                uri: item.uri,
              }}
              size={'md'}
            >
              {item.badge &&
                (item.status === 'online' ? (
                  <AvatarBadge bg={'green.500'} />
                ) : (
                  <AvatarBadge bg={'red.500'} />
                ))}
            </Avatar>
          ))}
        </ScrollView>
      </VStack>
    </VStack>
  );
}
