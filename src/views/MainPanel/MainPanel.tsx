import React from 'react';

import MainPanelBase from './MainPanelBase';

import { useStore } from '../../models';

const MainPanel = ({props}: any) => {
  const { videos } = useStore();
  const vm = {
    videos,
    ...props
  };
  return <MainPanelBase {...vm} />;
}

export default MainPanel;
