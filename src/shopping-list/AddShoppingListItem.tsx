import React, {useCallback, useState} from 'react';
import {GroceryItem} from '../groceries/GroceryItem';
import {View, TextInput, TouchableOpacity, Text, Alert} from 'react-native';
import {styles} from '../styles';
import uuid from 'react-native-uuid';

type Props = {
  addGroceryItem: (groceryItem: GroceryItem) => void;
};

export const AddShoppingListItem = ({
  addGroceryItem,
}: Props): React.JSX.Element => {
  const [newGroceryName, setNewGroceryName] = useState<string | undefined>(
    undefined,
  );
  const [newGroceryQuantity, setNewGroceryQuantity] = useState<number>(0);

  const setQuantity = useCallback(
    (text: string) => {
      try {
        const number = Number(text);
        setNewGroceryQuantity(number);
      } catch (e) {
        console.warn(`Could not cast string ${text} to number`, e);
      }
    },
    [setNewGroceryQuantity],
  );

  const saveGroceryItem = useCallback(() => {
    if (!newGroceryName) {
      Alert.alert('Please make sure your groceries have a name');
      return;
    }
    if (!newGroceryQuantity) {
      Alert.alert(`Please specify how much ${newGroceryName} you want.`);
      return;
    }
    addGroceryItem({
      name: newGroceryName,
      quantity: newGroceryQuantity,
      id: uuid.v4().toString(),
    });
    setNewGroceryQuantity(0);
    setNewGroceryName(undefined);
  }, [newGroceryName, newGroceryQuantity, addGroceryItem]);

  return (
    <View style={styles.shoppingListItem}>
      <TextInput
        placeholder="Name"
        value={newGroceryName}
        style={styles.shoppingListItemInput}
        onChangeText={setNewGroceryName}
      />
      <TextInput
        placeholder="Quantity"
        value={newGroceryQuantity.toString()}
        keyboardType="number-pad"
        style={styles.shoppingListItemInput}
        onChangeText={setQuantity}
      />
      <TouchableOpacity style={styles.saveText} onPress={saveGroceryItem}>
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
