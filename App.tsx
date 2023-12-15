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
import {RealmProvider} from '@realm/react';
import {realmConfig} from './src/realmConfig';

function App(): React.JSX.Element {
  return (
    <RealmProvider {...realmConfig}>
      <SafeAreaView style={styles.background}>
        <Header />
        <ShoppingList />
      </SafeAreaView>
    </RealmProvider>
  );
}

export default App;
