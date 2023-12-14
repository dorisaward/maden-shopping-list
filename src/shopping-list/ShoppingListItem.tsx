import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {GroceryItem} from '../groceries/GroceryItem';
import {styles} from '../styles';

type Props = {
  item: GroceryItem;
  removeGroceryItem: () => void;
};

export const ShoppingListItem = ({item, removeGroceryItem}: Props) => (
  <View style={styles.shoppingListItem}>
    <Text style={styles.shoppingListItemText}>{item.name}</Text>
    <Text style={styles.shoppingListItemText}>{item.quantity}</Text>
    <TouchableOpacity style={styles.removeText} onPress={removeGroceryItem}>
      <Text>Remove</Text>
    </TouchableOpacity>
  </View>
);
