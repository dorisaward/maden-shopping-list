import React, {useCallback, useState} from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {ShoppingListItem} from './ShoppingListItem';
import {GroceryItem} from '../groceries/GroceryItem';
import {AddShoppingListItem} from './AddShoppingListItem';

type Props = {
  initialGroceryItems: GroceryItem[];
};

export const ShoppingList = ({
  initialGroceryItems,
}: Props): React.JSX.Element => {
  const [groceryItems, setGroceryItems] =
    useState<GroceryItem[]>(initialGroceryItems);
  const addGroceryItem = useCallback(
    (groceryItem: GroceryItem) =>
      setGroceryItems(items => [...items, groceryItem]),
    [setGroceryItems],
  );
  const ListHeaderCooponent = useCallback(
    () => <AddShoppingListItem addGroceryItem={addGroceryItem} />,
    [addGroceryItem],
  );

  return (
    <FlatList
      data={groceryItems}
      renderItem={ShoppingListItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={ListHeaderCooponent}
    />
  );
};

const keyExtractor: FlatListProps<GroceryItem>['keyExtractor'] = item =>
  item.id;
