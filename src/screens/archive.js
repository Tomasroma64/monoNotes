import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import Title from '../title/title';
import InputBox from '../inputBox/inputBox';

import styles from './styles';

export default function Archive() {

  return (
    <View style={styles.container}>
      <Title text="Note archive" />
    </View>
  );
}
