import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import stores from './stores';

import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Provider {...stores}>
            <App />
        </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
