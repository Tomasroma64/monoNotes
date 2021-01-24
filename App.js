import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Write from './src/screens/write'
import Archive from './src/screens/archive'
import { COLOR_PRIMARY, COLOR_SECONDARY, COLOR_TEXT } from './src/styles/common';

import * as React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useFonts } from 'expo-font';


const Tab = createBottomTabNavigator();

export default function App() {

  const [loaded] = useFonts({
    RobotoMonoRegular: require('./assets/fonts/RobotoMono-Regular.ttf'),
    RobotoMonoItalic: require('./assets/fonts/RobotoMono-Italic.ttf'),
    RobotoMonoBold: require('./assets/fonts/RobotoMono-Bold.ttf'),

  });

  if (!loaded) {
    return null;
  }
  return (
      <NavigationContainer>
      <StatusBar backgroundColor={COLOR_PRIMARY} />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Write') {
                return (
                  <Icon
                    name={focused ? 'ios-add-circle' : 'ios-add'}
                    size={size}
                    color={color}
                    />
                );
              } else if (route.name === 'Read') {
                return (
                  <Icon
                    name={focused ? 'ios-list-box' : 'ios-list'}
                    size={size}
                    color={color}
                  />
                );
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: COLOR_TEXT,
            inactiveTintColor: 'gray',
            showLabel: false,
            style: {
              backgroundColor: COLOR_SECONDARY,
            },
          }}
        >
          <Tab.Screen name="Write" component={WriteScreen}/>
          <Tab.Screen name="Read" component={ArchiveScreen} />
        </Tab.Navigator>
      </NavigationContainer>

  );
}

const containerStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function WriteScreen(){
  return <Write />
}

function ArchiveScreen() {
  return <Archive />
}
