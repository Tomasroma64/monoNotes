import React, { Component } from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

export default function InputBox() {

  return (
    <TextInput
      style={styles.text}
      autofocus={true}
      multiline={true}
      textAlignVertical={"top"}
	  placeholder="Insert your text!"
    />
  );
}
