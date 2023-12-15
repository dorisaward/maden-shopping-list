import Realm, {ObjectSchema} from 'realm';

export class RealmGroceryItem extends Realm.Object<RealmGroceryItem> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  quantity!: number;
  static schema: ObjectSchema = {
    name: 'RealmGroceryItem',
    properties: {
      _id: 'objectId',
      name: 'string',
      quantity: 'int',
    },
    primaryKey: '_id',
  };
}
