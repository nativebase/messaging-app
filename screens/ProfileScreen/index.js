import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { Box, } from "native-base";

export default function Index() {
    return (
        <SafeAreaView flex={1}>
            <Box flex={1} p={3} pt={5} bg={"white"} >
                <Box flex={1} bg={'bg.100'} borderRadius={20}>
                </Box>

            </Box>
        </SafeAreaView>
    );
}