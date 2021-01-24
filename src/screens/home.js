import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Title from '../title/title';
import InputBox from '../inputBox/inputBox';

import styles from './styles';

export default function Home() {

  return (
    <View style={styles.container}>
      <Title text="Write a new note: " />
      <InputBox />
    </View>
  );
}
