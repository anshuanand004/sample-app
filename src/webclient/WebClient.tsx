import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { GraphQLResult } from "@aws-amplify/api";
import awsconfig from '../config/awsconfig';
import { ListZellerCustomers } from '../graphql/queries';

import { CustomerListData, GqlResponseObject } from '../interface/Interface';

// configure Amplify
Amplify.configure(awsconfig);

// this method fetches the data from aws app-sync using graphql service
export const fetchZellerCustomer = async (): Promise<CustomerListData | undefined> => {
    try {
        const response = (await API.graphql(graphqlOperation(ListZellerCustomers))) as GraphQLResult<GqlResponseObject>;

        let data = null;
        let listZellerCust = null;
        let items: CustomerListData = [];

        if (response !== null && response !== undefined) {
            data = ('data' in response) ? response['data'] : null;
        }
        if (data !== null && data !== undefined) {
            listZellerCust = ('listZellerCustomers' in data) ? data['listZellerCustomers'] : null;
        }
        if (listZellerCust !== null && listZellerCust !== undefined) {
            items = ('items' in listZellerCust) ? listZellerCust['items'] : [];
        }
        return items;
    }
    catch (error) {
        console.log(error);
    }
}