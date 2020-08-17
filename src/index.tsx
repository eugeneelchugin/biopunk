import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './models';

const appElement = (
  <StoreProvider>
    <App />
  </StoreProvider>
);

if (typeof window !== 'undefined') {
	ReactDOM.render(appElement, document.getElementById('root'));
}

export default appElement;
