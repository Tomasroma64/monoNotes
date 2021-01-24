import React from 'react';
import {
  Text,
} from 'react-native';

import styles from './styles';
const Title = (props) => (

    <Text style={styles.title}>{props.text}</Text>

)
export default Title;
