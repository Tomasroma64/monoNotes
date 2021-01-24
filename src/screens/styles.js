import { StyleSheet } from 'react-native';

import { COLOR_PRIMARY, BORDER_RADIUS, FONT_BOLD } from './../styles/common';

export default StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS,
    backgroundColor: COLOR_PRIMARY,
    padding: 15,
    fontFamily: FONT_BOLD,
    flex: 1,

    marginTop:20,
  }
});
