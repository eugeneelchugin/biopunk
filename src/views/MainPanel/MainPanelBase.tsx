import React from 'react';
import kind from '@enact/core/kind';
import { Panel } from '@enact/moonstone/Panels';
import Heading from '@enact/moonstone/Heading';
import { IVideo } from '../../models/video';

const MainPanelBase = kind({
	name: 'MainPanel',
	render: ({videos, ...props}:any) => (
		<Panel>
      <Heading showLine spacing="small">This is on English а это по-русски!</Heading>
      {videos.map((video:IVideo) =>
        <div>{video.name}</div>)
      }
		</Panel>
	)
});

export default MainPanelBase;
