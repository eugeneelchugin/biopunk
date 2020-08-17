import React from 'react';

interface ICssModule {
    [key: string]: string;
}

export const withCss = (css: ICssModule, Wrapped: any) =>
    (props: any) => (<Wrapped {...props} css={css} />);