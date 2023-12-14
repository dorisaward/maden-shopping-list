import {Text, View} from 'react-native';
import {styles} from '../styles';
import React from 'react';

export const Header = (): React.JSX.Element => (
  <View style={styles.background}>
    <Text style={styles.headerText}>Mayden Shopping List</Text>
  </View>
);
