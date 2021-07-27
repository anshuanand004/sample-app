// This module manages all the interfaces used in application.

export interface ZellerData {
    email: string;
    id: string;
    name: string;
    role: string;
}

export type CustomerListData = Array<ZellerData> | [];

export type GqlResponseObject = {
    data: {
        listZellerCustomers: {
            items: Array<ZellerData>
        }
    }
}

export interface InfoPanelProp {
    title: string;
    dataList: CustomerListData;
    // children?: ReactNode;
}

export interface RadioPanelProps {
    selectEvent: React.ChangeEventHandler;
    selectedRole: string;
}

export interface InfoButtonProp {
    name: string;
    role: string;
}

export interface AppViewStatusProps {
    status: string;
}