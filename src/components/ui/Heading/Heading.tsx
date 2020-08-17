import React from 'react';
import kind from '@enact/core/kind';
import MoonHeading, { HeadingProps } from '@enact/moonstone/Heading';
import headingCss from './Heading.module.scss';

const Heading: React.ComponentType<HeadingProps & React.HTMLProps<HTMLElement>> = kind({
    name: 'Heading',
    styles: {
        css: headingCss,
        className: headingCss.myCoolHeading,
    },
    render: (props: any) => (
        <MoonHeading {...props} />
    )
});

export default Heading;