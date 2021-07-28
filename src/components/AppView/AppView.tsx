import { Card, CardContent, Divider, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { CustomerListData } from '../../interface/Interface';
import { fetchZellerCustomer } from '../../webclient/WebClient';
import InfoPanel from '../InfoPanel/InfoPanel';
import RadioPanel from '../RadioPanel/RadioPanel';
import AppViewStatus from './AppViewStatus';

//map for table heading
const HeaderMap = new Map();
HeaderMap.set('Admin', "Admin Users");
HeaderMap.set('Manager', "Manager Users");

/**
 * This is AppView component which binds all the ui child componnets together
 * @param props 
 * @returns 
 */
const AppView: React.FC = (props) => {

    let data: CustomerListData = [];
    let [dataTable, updateDataTable] = React.useState(data);
    let [responseData, updateResponseData] = React.useState(data);
    let isMounted = React.useRef(true);
    let [selectedRole, updateSelectedRole] = React.useState("Admin");
    let [tableTitle, updateTableTitle] = React.useState(HeaderMap.get('Admin'));
    let [status, updateStatus] = React.useState('No Data');

    // Once Component is mounted update data to it using graphql fetch
    React.useEffect(() => {
        if (isMounted.current) {
            fetchZellerCustomer().then(function (res) {
                if (res !== undefined) {
                    data = res;
                    // save the response data for all the roles
                    if (data !== null && data.length > 0) {
                        const filteredData = data.filter((i) => i.role === selectedRole)
                        // save filtered data to be shown on UI
                        updateDataTable(filteredData);
                    }
                    updateResponseData(res);

                    // update table title 
                    updateTableTitle(HeaderMap.get(selectedRole));
                    updateStatus('Data Available')
                }
            })
            return () => {
                isMounted.current = false;
            };
        }
    });

    // this handler manages radio button change and updates the data for respective role
    const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value;
        updateSelectedRole(input);
        const filteredData = responseData.filter((i) => i.role === input);
        updateDataTable(filteredData);
        updateTableTitle(HeaderMap.get(input));
    }

    return (
        <div className="AppView">
            <Paper style={{ marginLeft: '25%', marginRight: '25%' }} elevation={3}>
                <Card>
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            spacing={4}
                        >
                            <Grid item xs={12} >
                                <RadioPanel selectEvent={handleRoleChange} selectedRole={selectedRole} ></RadioPanel>
                            </Grid>
                            <Divider></Divider>
                            <Grid item xs={12} >
                                <InfoPanel title={tableTitle} dataList={dataTable}></InfoPanel>
                            </Grid>
                            <Grid item xs={12}>
                                <AppViewStatus status={status}></AppViewStatus>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Paper>
        </div>

    );
}

export default AppView;
