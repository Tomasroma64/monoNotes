import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function Home() {

  const [loaded] = useFonts({
     RobotoMono: require('../assets/fonts/RobotoMono-Regular.ttf'),
   });

   if (!loaded) {
     return null;
   }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'RobotoMono', fontSize: 30 }}>
      Take notes :D
      </Text>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
