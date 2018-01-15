import React from 'react';
import styled, {injectGlobal} from 'styled-components';

// Component Imports
import {TopNavFixed} from '../navigation';

const _Layout = ({className, children}) => (
    <div className={className}>
        <TopNavFixed />
        {children}
    </div>
);

// Set global styles
injectGlobal`

    html {
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;
    }

    body {
        box-size: border-box;
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        color: black;
    }

    a,
    a:link,
    a:active {
        text-decoration: none;
        color: inherit;
    }
`;


export const Layout = styled(_Layout)`
`;
