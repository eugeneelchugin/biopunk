import React from 'react';
import Panels from '@enact/moonstone/Panels';
import kind from '@enact/core/kind';
import MainPanel from '../views/MainPanel';
import css from './App.module.scss';

const AppBase = kind({
  name: 'App',
  styles: {
    css,
    publicClassNames: true,
  },

  render: ({className, ...props}:any) => {
    return (
      <div id="app-container" className={className}>
        <Panels {...props} noCloseButton>
        <MainPanel />
      </Panels>
      </div>
    );
  }
});

export default AppBase;
