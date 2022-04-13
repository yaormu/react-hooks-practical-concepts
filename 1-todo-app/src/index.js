/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);
*/

//React 18+
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const divRoot = document.querySelector('#app');
const root = createRoot(divRoot);

root.render( <App tab="home"/>);