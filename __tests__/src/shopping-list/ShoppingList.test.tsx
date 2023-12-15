import 'react-native';
import React from 'react';
import Realm from 'realm';
import {it, expect} from '@jest/globals';
import {render} from '@testing-library/react-native';
import {GroceryItem} from '../../../src/groceries/GroceryItem';
import {ShoppingList} from '../../../src/shopping-list/ShoppingList';

const mockUseQuery = jest.fn()
const mockRealm = {
  write: jest.fn(),
  create: jest.fn(),
  delete: jest.fn(),
}

jest.mock('@realm/react', () => ({
  useQuery: mockUseQuery,
  useRealm: jest.fn(() => mockRealm),
}))

jest.mock('realm')

it('should render shopping list', () => {
  // Given
  const item0: GroceryItem = {
    _id: new Realm.BSON.ObjectId(),
    name: 'test name 0',
    quantity: 1,
  };
  const item1: GroceryItem = {
    _id: new Realm.BSON.ObjectId(),
    name: 'test name 1',
    quantity: 2,
  };
  jest.mocked(mockUseQuery).mockImplementationOnce(() => [item0, item1])

  const renderable = <ShoppingList />;

  // When
  const {toJSON} = render(renderable);

  // Then
  expect(toJSON()).toMatchSnapshot();
});
