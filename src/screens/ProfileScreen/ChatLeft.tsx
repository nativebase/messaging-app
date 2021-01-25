import React from 'react';
import {
  Box,
  HStack,
  Text,
  Icon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from 'native-base';

interface Props {
  chat:string
}
export default function ChatLeft(props:Props) {
  return (
    <>
      {props.chat === 'text' ? (
        <Box alignItems={'flex-start'} mb={5}>
          <HStack
            w={'85%'}
            justifyContent={'flex-start'}
            alignItems={'flex-end'}
          >
            <Box
              bg={'gray.100'}
              pl={5}
              pr={7}
              pt={4}
              pb={4}
              borderRightRadius={35}
              borderTopLeftRadius={30}
              color={'black'}
              fontWeight={'300'}
            >
              What does mean by IDK and TTYL?
            </Box>
            <Text fontSize={10}>6:30 AM</Text>
          </HStack>
        </Box>
      ) : (
        <Box mb={5} alignItems={'flex-start'}>
          <HStack
            w={'85%'}
            alignItems={'flex-end'}
            justifyContent={'flex-start'}
          >
            <Box
              bg={'gray.100'}
              pl={5}
              pr={7}
              pt={4}
              pb={4}
              borderRightRadius={35}
              borderTopLeftRadius={30}
              flexDirection='row'
              alignItems={'center'}
            >
              <Box w={'15%'}>
                <Box
                  w={6}
                  h={6}
                  bg={'blue.400'}
                  borderRadius={30}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Icon type='Ionicons' name='pause' color={'white'} size={4} />
                </Box>
              </Box>
              <Box w={'85%'} justifyContent={'center'}>
                <Slider defaultValue={45} colorScheme='red.200'>
                  <SliderTrack bg='blue.300'>
                    <SliderFilledTrack bg='blue.50' />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
            </Box>
            <Text fontSize={10}>10:30 AM</Text>
          </HStack>
        </Box>
      )}
    </>
  );
}
