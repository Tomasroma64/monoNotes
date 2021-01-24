import React, { useState, useEffect  } from 'react';
import { SafeAreaView, Text, TextInput, AsyncStorage, TouchableOpacity, View, StyleSheet } from 'react-native';

import styles from './styles';

export default function InputBox()  {

  const [textInputValue, setTextInputValue] = useState('');
  const [getValue, setGetValue] = useState('');

  const storageKey = "currentlyEditing"

  useEffect(() => {
    AsyncStorage.getItem(storageKey).then(
      (value) =>
        setTextInputValue(value)

    );
  },[]);

  const saveValueFunction = () => {
    AsyncStorage.setItem(storageKey, textInputValue);

    setTextInputValue('');

  };


  return (

        <TextInput
          placeholder="Notes will be saved automatically"
          value={textInputValue}
          onChangeText={(data) => {
            saveValueFunction()
            setTextInputValue(data)
          }}
          autofocus={true}
          multiline={true}
          textAlignVertical={"top"}
          underlineColorAndroid="transparent"
          style={styles.text}
        />

  );
};
