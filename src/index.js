import React from 'react';
import ReactDOM from 'react-dom/client';

const h1 = React.createElement('h1', null, 'Hello World');
const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

root.render(h1);
