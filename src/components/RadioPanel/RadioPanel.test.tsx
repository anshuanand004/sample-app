import React from 'react';
import { shallow, mount } from 'enzyme';
import RadioPanel from '../RadioPanel/RadioPanel';
import Radio from '@material-ui/core/Radio';

describe('RadioPanel', () => {
    let container

    beforeEach(() => (container = shallow(<RadioPanel />)))

    it(' it should render a <div />', () => {
        expect(container.find('div').length).toEqual(1);
    });

    it(" it should render Radio Buttons", () => {
        expect(container.containsMatchingElement(<Radio />)).toEqual(true)
    });

    it('Test radio button onChange  event for Admin ', () => {
        const mockCallBack = jest.fn();
        const adminRole = "Admin";

        const wrapper = shallow((<RadioPanel selectEvent={mockCallBack} selectedRole={adminRole}></RadioPanel>));
        
        const radio = wrapper.find(".RadioAdmin");        
        radio.simulate('change');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it('Test radio button onChange  event for Admin ', () => {
        const mockCallBack = jest.fn();
        const mngrRole = "Manager";

        const wrapper = shallow((<RadioPanel selectEvent={mockCallBack} selectedRole={mngrRole}></RadioPanel>));
        
        const radio = wrapper.find(".RadioManager");        
        radio.simulate('change');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

});