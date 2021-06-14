import React from 'react';
import { shallow } from 'enzyme';
import { Filters } from '../../../src/features/home/Filters';

describe('home/Filters', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Filters {...props} />
    );

    expect(
      renderedComponent.find('.home-filters').length
    ).toBe(1);
  });
});
