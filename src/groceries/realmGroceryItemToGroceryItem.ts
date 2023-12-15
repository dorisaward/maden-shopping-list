import {GroceryItem} from './GroceryItem';
import {RealmGroceryItem} from './RealmGroceryItem';

export const realmGroceryItemToGroceryItem = (
  realmGroceryItem: RealmGroceryItem,
): GroceryItem => ({
  _id: realmGroceryItem._id,
  name: realmGroceryItem.name,
  quantity: realmGroceryItem.quantity,
});
