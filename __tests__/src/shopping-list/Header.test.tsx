import 'react-native';
import React from 'react';
import {it, expect} from '@jest/globals';
import renderer from 'react-test-renderer';
import {Header} from '../../../src/shopping-list/header';

it('should render header', () => {
  // Given
  const renderable = <Header />;

  // When
  const {toJSON} = renderer.create(renderable);

  // Then
  expect(toJSON()).toMatchSnapshot();
});
