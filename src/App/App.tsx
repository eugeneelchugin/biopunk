import React from 'react';
import MoonstoneDecorator from '@enact/moonstone/MoonstoneDecorator';
import AppBase from './AppBase';



const App = (props: any) => {
  return (
    <AppBase {...props}/>
  );
};

export default MoonstoneDecorator(App);
