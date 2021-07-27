import { shallow } from 'enzyme';
import React from 'react';
import InfoPanel from '../InfoPanel/InfoPanel';

describe('InfoPanel', () => {
    let container

    beforeEach(() => (container = shallow(<InfoPanel />)))

    it(' it should render a <div />', () => {
        expect(container.find('div').length).toEqual(1);
    });
});