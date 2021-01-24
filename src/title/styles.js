import { StyleSheet } from 'react-native';

import { COLOR_PRIMARY, COLOR_TEXT, FONT_BOLD } from './../styles/common';

export default StyleSheet.create({
  title: {
    backgroundColor: COLOR_PRIMARY,
    color: COLOR_TEXT,
    fontFamily: FONT_BOLD,
    borderRadius: 5,
    padding: 15,
    fontSize: 30,
  },
});
