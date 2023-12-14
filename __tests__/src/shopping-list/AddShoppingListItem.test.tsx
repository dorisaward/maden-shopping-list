import 'react-native';
import React from 'react';
import {it, expect} from '@jest/globals';
import {AddShoppingListItem} from '../../../src/shopping-list/AddShoppingListItem';
import {render, fireEvent} from '@testing-library/react-native';
import {Alert} from 'react-native';

it('should render add shopping list item', () => {
  // Given
  const addGroceryItem = jest.fn();
  const renderable = <AddShoppingListItem addGroceryItem={addGroceryItem} />;

  // When
  const {toJSON} = render(renderable);

  // Then
  expect(toJSON()).toMatchSnapshot();
});

it('should call add grocery item', () => {
  // Given
  const addGroceryItem = jest.fn();
  const renderable = <AddShoppingListItem addGroceryItem={addGroceryItem} />;
  const {getByText, getByPlaceholderText} = render(renderable);

  const groceryName = 'test name';
  fireEvent(getByPlaceholderText('Name'), 'onChangeText', groceryName);

  const groceryQuantity = 3;
  fireEvent(getByPlaceholderText('Quantity'), 'onChangeText', groceryQuantity.toString());

  // When
  fireEvent.press(getByText('Save'));

  // Then
  expect(addGroceryItem).toBeCalledWith({
    id: expect.any(String),
    name: groceryName,
    quantity: groceryQuantity,
  });
});

it('should not call add grocery item, given no name', () => {
  // Given
  jest.spyOn(Alert, 'alert');
  const addGroceryItem = jest.fn();
  const renderable = <AddShoppingListItem addGroceryItem={addGroceryItem} />;
  const {getByText} = render(renderable);

  // When
  fireEvent.press(getByText('Save'));

  // Then
  expect(Alert.alert).toBeCalledWith(
    'Please make sure your groceries have a name',
  );
});

it('should not call add grocery item, given no quantity', () => {
  // Given
  jest.spyOn(Alert, 'alert');
  const addGroceryItem = jest.fn();
  const renderable = <AddShoppingListItem addGroceryItem={addGroceryItem} />;
  const {getByText, getByPlaceholderText} = render(renderable);

  const groceryName = 'test name';
  fireEvent(getByPlaceholderText('Name'), 'onChangeText', groceryName);

  // When
  fireEvent.press(getByText('Save'));

  // Then
  expect(Alert.alert).toBeCalledWith(
    `Please specify how much ${groceryName} you want.`,
  );
});
