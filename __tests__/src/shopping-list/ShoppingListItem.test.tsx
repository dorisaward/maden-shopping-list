import 'react-native';
import React from 'react';
import {it, expect} from '@jest/globals';
import {fireEvent, render} from '@testing-library/react-native';
import {ShoppingListItem} from '../../../src/shopping-list/ShoppingListItem';
import {GroceryItem} from '../../../src/groceries/GroceryItem';
import {ListRenderItemInfo} from 'react-native';

it('should render shopping list item', () => {
  // Given
  const item: GroceryItem = {
    id: 'test-id',
    name: 'test name',
    quantity: 100,
  };
  const renderable = (
    <ShoppingListItem
      {...otherProps}
      item={item}
      removeGroceryItem={jest.fn()}
    />
  );

  // When
  const {toJSON} = render(renderable);

  // Then
  expect(toJSON()).toMatchSnapshot();
});

it('should remove shopping list item', () => {
  // Given
  const item: GroceryItem = {
    id: 'test-id',
    name: 'test name',
    quantity: 100,
  };
  const removeGroceryItem = jest.fn();
  const renderable = (
    <ShoppingListItem
      {...otherProps}
      item={item}
      removeGroceryItem={removeGroceryItem}
    />
  );
  const {getByText} = render(renderable);

  // When
  fireEvent.press(getByText('Remove'));

  // Then
  expect(removeGroceryItem).toHaveBeenCalled();
});

const otherProps: Pick<ListRenderItemInfo<GroceryItem>, 'separators'> = {
  separators: {
    highlight: jest.fn(),
    unhighlight: jest.fn(),
    updateProps: jest.fn(),
  },
};
