import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './models';
import cyrillicTheme from './CyrillicTheme.module.scss';

const appElement = (
  <StoreProvider>
    <App themeExtension={cyrillicTheme}/>
  </StoreProvider>
);

if (typeof window !== 'undefined') {
	ReactDOM.render(appElement, document.getElementById('root'));
}

export default appElement;
