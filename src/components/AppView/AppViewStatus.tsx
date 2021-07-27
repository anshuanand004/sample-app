
import React from 'react';
import { AppViewStatusProps } from '../../interface/Interface';

/**
 * This component reflects status of App (Data Availability)
 * @param param
 * @returns 
 */
const AppViewStatus: React.FC<AppViewStatusProps> = ({ status }) => {

    return (
        <div id="id_status" className="status" style={{ fontSize: '8px', color: 'blue' }}>
            {status}
        </div>
    );
}

export default AppViewStatus;
