import ReactDOM from 'react-dom';
import React from 'react';
import 'bulma/css/bulma.min.css';
import App from './App';
import {UserProvider} from "./context/UserContext";


ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <App tab="home"/>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
