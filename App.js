import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/home'
import styles from './src/screens/styles'


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
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Write') {
                return (
                  <Icon name="md-checkmark-circle" size={32} color="green" />
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
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Write" component={HomeScreen}/>
          <Tab.Screen name="Read" component={SettingsScreen} />
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


function HomeScreen() {
  return (
    <Home />
  );
}



function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Icon name="md-checkmark-circle" size={32} color="green" />
      <Text>Settings!</Text>
    </View>
  );
}
