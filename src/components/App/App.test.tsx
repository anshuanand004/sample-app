import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App', () => {
  let container

  beforeEach(() => (container = shallow(<App/>)))

  it(' it should render a <div />', () => {
    expect(container.find('div').length).toEqual(1);
  });

});