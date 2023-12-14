import React from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {ShoppingListItem} from './ShoppingListItem';
import {GroceryItem} from '../groceries/GroceryItem';

type Props = {
  groceryItems: GroceryItem[];
};

export const ShoppingList = ({groceryItems}: Props): React.JSX.Element => (
  <FlatList
    data={groceryItems}
    renderItem={ShoppingListItem}
    keyExtractor={keyExtractor}
  />
);

const keyExtractor: FlatListProps<GroceryItem>['keyExtractor'] = item =>
  item.id;
