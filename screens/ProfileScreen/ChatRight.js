import React from 'react';
import PropTypes from 'prop-types';
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

export default function ChatRight({ chat }) {
  return (
    <>
      {chat === 'text' ? (
        <Box alignItems={'flex-end'} mb={5}>
          <HStack w={'85%'} justifyContent={'flex-end'} alignItems={'flex-end'}>
            <Text fontSize={10}>6:30 AM</Text>
            <Box
              bg={'bg.chatRightColor'}
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
              bg={'bg.chatRightColor'}
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
                    color={'bg.header'}
                    size={4}
                  />
                </Box>
              </Box>
              <Box w={'85%'} justifyContent={'center'}>
                <Slider defaultValue={0}>
                  <SliderTrack>
                    <SliderFilledTrack bg='bg.sliderFilledColor' />
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

ChatRight.propTypes = {
  chat: PropTypes.string,
};
