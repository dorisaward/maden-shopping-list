import 'react-native';
import React from 'react';
import {it, expect} from '@jest/globals';
import {render} from '@testing-library/react-native';
import {Tickbox} from '../../../src/tickbox/Tickbox';

it.each<boolean>([true, false])('should render, given %p', ticked => {
  // Given
  const renderable = <Tickbox ticked={ticked} />;

  // When
  const {toJSON} = render(renderable);

  // Then
  expect(toJSON()).toMatchSnapshot();
});
