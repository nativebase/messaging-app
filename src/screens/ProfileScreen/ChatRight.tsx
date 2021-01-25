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

export default function ChatRight(props:Props ) {
  return (
    <>
      {props.chat === 'text' ? (
        <Box alignItems={'flex-end'} mb={5}>
          <HStack w={'85%'} justifyContent={'flex-end'} alignItems={'flex-end'}>
            <Text fontSize={10}>6:30 AM</Text>
            <Box
              bg={'blue.300'}
              pl={7}
              pr={5}
              pt={4}
              pb={4}
              borderLeftRadius={35}
              borderTopRightRadius={30}
              color={'white'}
              fontWeight={'300'}
            >
              What does mean by IDK and TTYL? mean by IDK and TTYL? mean by IDK
              and TTYL?
            </Box>
          </HStack>
        </Box>
      ) : (
        <Box mb={5} alignItems={'flex-end'}>
          <HStack w={'85%'} alignItems={'flex-end'} justifyContent={'flex-end'}>
            <Text fontSize={10}>6:30 AM</Text>
            <Box
              bg={'blue.300'}
              pl={7}
              pr={5}
              pt={4}
              pb={4}
              borderLeftRadius={35}
              borderTopRightRadius={30}
              flexDirection='row'
              alignItems={'center'}
            >
              <Box w={'15%'}>
                <Box
                  w={6}
                  h={6}
                  bg={'white'}
                  borderRadius={30}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Icon
                    type='Ionicons'
                    name='play'
                    color={'blue.400'}
                    size={4}
                  />
                </Box>
              </Box>
              <Box w={'85%'} justifyContent={'center'}>
                <Slider defaultValue={0}>
                  <SliderTrack>
                    <SliderFilledTrack bg='blue.50' />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
            </Box>
          </HStack>
        </Box>
      )}
    </>
  );
}
