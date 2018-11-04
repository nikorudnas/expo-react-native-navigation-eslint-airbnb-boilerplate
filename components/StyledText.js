import React from 'react';
import { Text } from 'react-native';

export const MonoText = (props, { style }) => (
  <Text {...props} style={[style, { fontFamily: 'space-mono' }]} />
);

export default MonoText;
