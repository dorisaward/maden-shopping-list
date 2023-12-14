import React from 'react';
import {ListRenderItem, Text, View} from 'react-native';
import {GroceryItem} from '../groceries/GroceryItem';
import {styles} from '../styles';

export const ShoppingListItem: ListRenderItem<GroceryItem> = ({item}) => (
  <View style={styles.shoppingListItem}>
    <Text style={styles.shoppingListItemText}>{item.name}</Text>
    <Text style={styles.shoppingListItemText}>{item.quantity}</Text>
  </View>
);
