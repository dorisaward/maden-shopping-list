import Realm from 'realm';
import {RealmGroceryItem} from './groceries/RealmGroceryItem';

export const realmConfig: Realm.Configuration = {
  schema: [RealmGroceryItem],
};
