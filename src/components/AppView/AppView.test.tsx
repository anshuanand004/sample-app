import React from 'react';
import { shallow } from 'enzyme';
import AppView from './AppView';
import AppViewStatus from './AppViewStatus';
import RadioPanel from '../RadioPanel/RadioPanel';
import InfoPanel from '../InfoPanel/InfoPanel';

describe('AppView', () => {
  let container

  beforeEach(() => (container = shallow(<AppView/>)))

  it(' it should render a <div />', () => {
    expect(container.find('div').length).toEqual(1);
  });

  

  it(" it should render a Radio Panel", () => {
    expect(container.containsMatchingElement(<RadioPanel />)).toEqual(true)
  });

  it(" it should render a Information Panel", () => {
    expect(container.containsMatchingElement(<InfoPanel />)).toEqual(true)
  });

  it(" it should render a App View Status Panel", () => {
    expect(container.containsMatchingElement(<AppViewStatus />)).toEqual(true)
  });


});