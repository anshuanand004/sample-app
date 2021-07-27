
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { fetchZellerCustomer } from '../../webclient/WebClient';
import AppView from './AppView';

jest.mock('../../webclient/WebClient', () => {
    return {
        fetchZellerCustomer: jest.fn(),
    };
});

const mResponse = {
    data: {
        listZellerCustomers: {
            items: [{
                email: "john@zeller.com",
                id: "545eba38-680c-4b7b-9250-3f514146f81a",
                name: "John Smith",
                role: "Admin"
            }]
        }
    }
};

describe('test for data fetch from app sync API', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch data correctly', async () => {

        fetchZellerCustomer.mockResolvedValueOnce(mResponse);
        //mount the AppView
        const wrapper = mount(<AppView ></AppView>);
        expect(wrapper.exists).toBeTruthy();
        expect(wrapper.find('#id_status').text()).toBe("No Data");
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
        });
        wrapper.update();
        expect(wrapper.find('#id_status').text()).toBe("Data Available");
        expect(fetchZellerCustomer).toHaveBeenCalledTimes(1);
    });

    it('should handle error if fetch data failure', async () => {
        const mError = 'network error ocuured while fetching data';

        fetchZellerCustomer.mockRejectedValueOnce(mError);
        //mount the AppView
        const wrapper = mount(<AppView ></AppView>);
        expect(wrapper.exists).toBeTruthy();
        expect(wrapper.find('#id_status').text()).toBe("No Data");
        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
        });
        wrapper.update();
        expect(wrapper.find('#id_status').text()).toBe("No Data");
        expect(fetchZellerCustomer).toHaveBeenCalledTimes(1);
    });
});