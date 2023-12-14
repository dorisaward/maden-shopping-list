import 'react-native';
import React from 'react';
import {it, expect} from '@jest/globals';
import renderer from 'react-test-renderer';
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
  const renderable = <ShoppingListItem {...otherProps} item={item} index={0} />;

  // When
  const {toJSON} = renderer.create(renderable);

  // Then
  expect(toJSON()).toMatchSnapshot();
});

const otherProps: Pick<ListRenderItemInfo<GroceryItem>, 'separators'> = {
  separators: {
    highlight: jest.fn(),
    unhighlight: jest.fn(),
    updateProps: jest.fn(),
  },
};
