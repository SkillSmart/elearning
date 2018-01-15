import React from 'react';
import styled from 'styled-components';

import {CourseCardLarge} from '../cards';

const _CardGallery = ({className, children}) => (
    <div className={className}>
        {children}
    </div>
);

export const CardGallery = styled(_CardGallery)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));

    grid-gap: 2rem;
    justify-content: end;
    align-content: center;
`;
