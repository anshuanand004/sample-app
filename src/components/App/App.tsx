import React from 'react';
import AppView from '../AppView/AppView';
import './App.css';


/**
 * 
 * @param props This is main component which loads the
 * @returns 
 */
const App: React.FC = (props) => {
    return (
        <div className="App">
            <AppView></AppView>
        </div>
    );
}

export default App;
