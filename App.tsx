/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {styles} from './src/styles';
import {Header} from './src/shopping-list/header';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <Header />
    </SafeAreaView>
  );
}

export default App;
