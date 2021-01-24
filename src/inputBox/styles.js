import { StyleSheet } from 'react-native';

import { COLOR_SECONDARY, COLOR_TEXT, FONT_REGULAR, BORDER_RADIUS } from './../styles/common';

export default StyleSheet.create({
  text: {
    color: COLOR_TEXT,
    backgroundColor: COLOR_SECONDARY,
    fontFamily: FONT_REGULAR,
    borderRadius: BORDER_RADIUS,
    margin: 15,
    marginTop: 0,
    padding: 10,
    fontSize: 18,
    flex: 1,

  },
});
