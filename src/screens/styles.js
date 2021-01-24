import { StyleSheet, StatusBar } from 'react-native';

import { COLOR_PRIMARY, BORDER_RADIUS, FONT_BOLD } from './../styles/common';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR_PRIMARY,
    fontFamily: FONT_BOLD,
    marginTop:StatusBar.currentHeight,
    flex: 1,
  }
});
