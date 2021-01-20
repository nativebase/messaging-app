import React from 'react';

import { Box, HStack, VStack, Avatar, AvatarBadge, Text, Icon } from "native-base";
import { ScrollView } from 'react-native';

const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9,]

export default function Index() {
    return (
        <ScrollView>
            {
                tempArray.map((item, idx) => (
                    < VStack pt={4} pb={4} key={idx} onTouchStart={() => console.warn(idx)}>
                        <HStack pl={5}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                        >
                            < Avatar
                                source={{
                                    uri: 'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
                                }}
                                name={'Native Base'}
                            >
                                <AvatarBadge
                                    bg={'red.500'}
                                />
                            </Avatar>
                            <VStack
                                pl={2}
                            >
                                <Text
                                    fontWeight={'bold'}
                                    fontSize={18}
                                >
                                    Zunaid
                                </Text>
                                <Text
                                    fontSize={16}
                                >
                                    Please leave your feedback
                                </Text>
                            </VStack>

                            <VStack
                                pl={2}
                                alignItems={"flex-end"}
                            >
                                <Text
                                    fontSize={14}
                                    pb={1}
                                >
                                    09:00PM
                                </Text>
                                <Box
                                    w={5}
                                    height={5}
                                    bg={'green.500'}
                                    borderRadius={30}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    color={'white'}
                                >
                                    2
                                </Box>
                            </VStack>
                            <Icon type="Entypo"
                                name="dots-two-vertical"
                                color={'bg.300'}
                                size={6}
                            />
                        </HStack>
                    </VStack >
                ))
            }
        </ScrollView >

    );
}