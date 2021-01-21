import React, { useState } from 'react';
import { Box, HStack } from "native-base";
import { TouchableOpacity } from "react-native";

const TABS = [
    {
        name: 'All'
    },
    {
        name: 'Recent'
    },
    {
        name: 'Online'
    },
]

export default function Tabs() {
    const [activeTab, setActiveTab] = useState('recent')

    const handleTab = (value) => {
        setActiveTab(value)
    }
    return (
        <HStack justifyContent={'space-evenly'} mb={5}>
            {
                TABS.map((tab, idx) => (
                    <TouchableOpacity
                        key={idx}
                        onPress={() => handleTab(tab.name)}
                    >
                        <Box
                            w={100} h={50}
                            bg={activeTab.toLowerCase() == tab.name.toLowerCase() ? 'bg.100' : 'bg.300'}
                            color={activeTab.toLowerCase() == tab.name.toLowerCase() ? 'white' : 'black'}
                            borderRadius={25} justifyContent={"center"}
                            alignItems={"center"} fontSize={16}
                        >
                            {tab.name}
                        </Box>
                    </TouchableOpacity>
                ))
            }
        </HStack>
    );
}