import 'react-native';
import React from 'react';
import {it, expect} from '@jest/globals';
import renderer from 'react-test-renderer';
import {GroceryItem} from '../../../src/groceries/GroceryItem';
import {ShoppingList} from '../../../src/shopping-list/ShoppingList';

it('should render shopping list', () => {
  // Given
  const item0: GroceryItem = {
    id: 'test-id-0',
    name: 'test name 0',
    quantity: 1,
  };
  const item1: GroceryItem = {
    id: 'test-id-1',
    name: 'test name 1',
    quantity: 2,
  };
  const renderable = <ShoppingList groceryItems={[item0, item1]} />;

  // When
  const {toJSON} = renderer.create(renderable);

  // Then
  expect(toJSON()).toMatchSnapshot();
});
