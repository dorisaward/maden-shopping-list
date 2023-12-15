import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  ticked: boolean;
};

export const Tickbox = ({ticked}: Props): React.JSX.Element => (
  <View style={tickStyles.box} testID='tickbox'>
    {ticked && (
      <>
        <View style={tickStyles.stem} />
        <View style={tickStyles.kick} />
      </>
    )}
  </View>
);

const tickStyles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  stem: {
    transform: 'rotate(45deg)',
    position: 'absolute',
    width: 1,
    height: 16,
    backgroundColor: 'black',
    left: 12,
    top: 0,
  },
  kick: {
    transform: 'rotate(315deg)',
    position: 'absolute',
    width: 1,
    height: 8,
    left: 4,
    top: 8,
    backgroundColor: 'black',
  },
});
