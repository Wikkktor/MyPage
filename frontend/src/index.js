import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bulma/css/bulma.min.css';
import App from './App';
import { UserProvider} from "./context/UserContext";


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <UserProvider>
            <App tab="home" />
    </UserProvider>

);
