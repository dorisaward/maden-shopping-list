export type GroceryItem = {
  /**
   * Unique identifier for the grocery item
   */
  _id: Realm.BSON.ObjectId;

  /**
   * The human readable name for the grocery item
   */
  name: string;

  /**
   * The nummber of the groceries to display on the list
   */
  quantity: number;
};
