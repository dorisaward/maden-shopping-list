import React, {useCallback, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {GroceryItem} from '../groceries/GroceryItem';
import {styles} from '../styles';
import {Tickbox} from '../tickbox/Tickbox';

type Props = {
  item: GroceryItem;
  removeGroceryItem: () => void;
};

export const ShoppingListItem = ({item, removeGroceryItem}: Props) => {
  const [ticked, setTicked] = useState<boolean>(false);
  const toggleTicked = useCallback(
    () => setTicked(value => !value),
    [setTicked],
  );
  return (
    <View
      style={ticked ? styles.shoppingListItemTicked : styles.shoppingListItem}>
      <TouchableOpacity onPress={toggleTicked}>
        <Tickbox ticked={ticked} />
      </TouchableOpacity>
      <Text style={styles.shoppingListItemText}>{item.name}</Text>
      <Text style={styles.shoppingListItemText}>{item.quantity}</Text>
      <TouchableOpacity style={styles.removeText} onPress={removeGroceryItem}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};
