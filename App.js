import React from 'react';
import { extendTheme, NativeBaseProvider } from "native-base"

import HomeScreen from "./screens/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen"

import { newColorTheme } from "./utils/colorTheme";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const theme = extendTheme({ colors: newColorTheme })
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>



  );
}
