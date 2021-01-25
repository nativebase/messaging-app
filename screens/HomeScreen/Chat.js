import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import {
  Box,
  HStack,
  VStack,
  Avatar,
  AvatarBadge,
  Text,
  Icon,
  SlideFade,
} from 'native-base';
import { ScrollView } from 'react-native';

import { CHAT_USER } from './dummyData/chatUser';

export default function Index() {
  const [userName, setUserName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleUserRightMenuClick = (userName) => {
    setUserName(userName);
    setIsOpen(true);
  };

  const handleUserChatClick = () => {
    setUserName('');
    setIsOpen(false);
  };

  return (
    <ScrollView>
      {CHAT_USER.map((user, idx) => (
        <VStack pt={4} pb={4} key={idx}>
          <HStack pl={5} alignItems={'center'} justifyContent={'space-between'}>
            <TouchableOpacity onPress={() => handleUserChatClick()}>
              <HStack alignItems={'center'}>
                <Avatar
                  source={{
                    uri: user.uri,
                  }}
                  name={'Native Base'}
                  width={12}
                  height={12}
                >
                  {user.status === 'online' ? (
                    <AvatarBadge bg={'green.500'} />
                  ) : null}
                </Avatar>
                <VStack pl={2}>
                  <Text fontWeight={'bold'} fontSize={18}>
                    {user.name}
                  </Text>
                  <HStack alignItems={'center'}>
                    {user.showIcon ? (
                      <Icon
                        type={user.iconType}
                        name={user.iconName}
                        color={user.iconColor}
                        size={4}
                      />
                    ) : null}

                    <Text
                      fontSize={14}
                      pl={user.showIcon ? 1 : 0}
                      color={user.messageColor}
                      fontWeight={user.messageColor === 'black' ? '' : 'bold'}
                    >
                      {user.lastMessage.length > 26
                        ? user.lastMessage.substr(0, 25) + '...'
                        : user.lastMessage.substr(0, 25)}
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
            </TouchableOpacity>

            {user.name === userName ? (
              <SlideFade in={isOpen}>
                <HStack
                  h={12}
                  w={24}
                  pl={3}
                  pr={2}
                  color='white'
                  bg='blue.400'
                  borderLeftRadius={35}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                >
                  <Icon
                    type='FontAwesome'
                    name='phone'
                    color={'white'}
                    size={4}
                  />
                  <Icon
                    type='Entypo'
                    name='video-camera'
                    color={'white'}
                    size={4}
                  />
                  <Icon type='Feather' name='info' color={'white'} size={4} />
                </HStack>
              </SlideFade>
            ) : (
              <HStack>
                <VStack pl={2} alignItems={'flex-end'}>
                  <Text fontSize={14} pb={1}>
                    {user.time}
                  </Text>
                  {user.unreadMessage > 0 ? (
                    <Box
                      w={5}
                      height={5}
                      bg={'green.500'}
                      borderRadius={30}
                      justifyContent={'center'}
                      alignItems={'center'}
                      color={'white'}
                    >
                      {user.unreadMessage}
                    </Box>
                  ) : null}
                </VStack>
                <TouchableOpacity
                  onPress={() => handleUserRightMenuClick(user.name)}
                >
                  <Icon
                    type='Entypo'
                    name='dots-two-vertical'
                    color={'blue.100'}
                    size={6}
                  />
                </TouchableOpacity>
              </HStack>
            )}
          </HStack>
        </VStack>
      ))}
    </ScrollView>
  );
}
