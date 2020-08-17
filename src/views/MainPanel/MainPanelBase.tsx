import React from 'react';
import kind from '@enact/core/kind';
import { Panel } from '@enact/moonstone/Panels';
import Heading from '../../components/ui/Heading';
import Button from '../../components/ui/Button';
import { IVideo } from '../../models/video';

const MainPanelBase = kind({
	name: 'MainPanel',
	render: ({videos, ...props}:any) => (
		<Panel>
			<Heading showLine spacing="small">This is on English, а это по-русски!</Heading>
			<Button>Хорошо</Button>
			{videos.map((video:IVideo) =>
			<div key={video.id}>{video.name}</div>)
			}
		</Panel>
	)
});

export default MainPanelBase;
