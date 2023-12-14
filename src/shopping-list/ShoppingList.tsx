import React, {useCallback, useState} from 'react';
import {FlatList, FlatListProps, ListRenderItemInfo} from 'react-native';
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
  const removeGroceryItem = useCallback(
    (groceryItem: GroceryItem) => () =>
      setGroceryItems(items =>
        items.filter(item => item.id !== groceryItem.id),
      ),
    [setGroceryItems],
  );
  const ListHeaderCooponent = useCallback(
    () => <AddShoppingListItem addGroceryItem={addGroceryItem} />,
    [addGroceryItem],
  );
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<GroceryItem>) => (
      <ShoppingListItem
        item={item}
        removeGroceryItem={removeGroceryItem(item)}
      />
    ),
    [removeGroceryItem],
  );

  return (
    <FlatList
      data={groceryItems}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListHeaderComponent={ListHeaderCooponent}
    />
  );
};

const keyExtractor: FlatListProps<GroceryItem>['keyExtractor'] = item =>
  item.id;
