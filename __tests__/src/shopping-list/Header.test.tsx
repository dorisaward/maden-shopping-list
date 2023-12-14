import 'react-native';
import React from 'react';
import {it, expect} from '@jest/globals';
import {render} from '@testing-library/react-native';
import {Header} from '../../../src/shopping-list/header';

it('should render header', () => {
  // Given
  const renderable = <Header />;

  // When
  const {toJSON} = render(renderable);

  // Then
  expect(toJSON()).toMatchSnapshot();
});
