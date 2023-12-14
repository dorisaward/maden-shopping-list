/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {styles} from './src/styles';
import {Header} from './src/shopping-list/Header';
import {ShoppingList} from './src/shopping-list/ShoppingList';
import {groceries} from './src/groceries/groceries';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.background}>
      <Header />
      <ShoppingList initialGroceryItems={groceries} />
    </SafeAreaView>
  );
}

export default App;
