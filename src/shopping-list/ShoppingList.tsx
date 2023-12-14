import React, { useState } from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {ShoppingListItem} from './ShoppingListItem';
import {GroceryItem} from '../groceries/GroceryItem';

type Props = {
  initialGroceryItems: GroceryItem[];
};

export const ShoppingList = ({
  initialGroceryItems,
}: Props): React.JSX.Element => {
const [groceryItems, setGroceryItems] = useState<GroceryItem[]>(initialGroceryItems)

  return (
    <FlatList
      data={groceryItems}
      renderItem={ShoppingListItem}
      keyExtractor={keyExtractor}
    />
  );
};

const keyExtractor: FlatListProps<GroceryItem>['keyExtractor'] = item =>
  item.id;
