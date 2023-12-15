import React, {useCallback, useState} from 'react';
import {FlatList, FlatListProps, ListRenderItemInfo} from 'react-native';
import {ShoppingListItem} from './ShoppingListItem';
import {GroceryItem} from '../groceries/GroceryItem';
import {AddShoppingListItem} from './AddShoppingListItem';
import {useQuery, useRealm} from '@realm/react';
import {RealmGroceryItem} from '../groceries/RealmGroceryItem';
import {realmGroceryItemToGroceryItem} from '../groceries/realmGroceryItemToGroceryItem';

export const ShoppingList = (): React.JSX.Element => {
  const realm = useRealm();
  const realmGroceryItems = useQuery<RealmGroceryItem>(
    RealmGroceryItem.schema.name,
  );

  const initialGroceryItems = realmGroceryItems.map(item =>
    realmGroceryItemToGroceryItem(item),
  );
  const [groceryItems, setGroceryItems] =
    useState<GroceryItem[]>(initialGroceryItems);
  const addGroceryItem = useCallback(
    (groceryItem: GroceryItem) => {
      try {
        realm.write(() =>
          realm.create(
            RealmGroceryItem.schema.name,
            groceryItem,
            Realm.UpdateMode.Modified,
          ),
        );
        setGroceryItems(items => [...items, groceryItem]);
      } catch (e) {
        console.warn('Unable to save new grocery item', e);
      }
    },
    [setGroceryItems, realm],
  );
  const removeGroceryItem = useCallback(
    (groceryItem: GroceryItem) => () => {
      try {
        realm.write(() => {
          const itemToDelete = realm.objectForPrimaryKey(
            RealmGroceryItem.schema.name,
            groceryItem._id,
          );
          realm.delete(itemToDelete);
        });
        setGroceryItems(items =>
          items.filter(item => item._id !== groceryItem._id),
        );
      } catch (e) {
        console.warn('Unable to delete grocery item', e);
      }
    },
    [setGroceryItems, realm],
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
  item._id.toString();
