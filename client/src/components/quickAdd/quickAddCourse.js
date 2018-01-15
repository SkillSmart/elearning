import React from 'react';
import styled from 'styled-components';

import {CourseQuickAddForm} from '../../forms/quickAddForms';

const _QuickAddBoxCourse = ({className}) => (
    <div className={className}>
        <h3>Add a course</h3>
        <CourseQuickAddForm />
    </div>
);

export const QuickAddCourse = styled(_QuickAddBoxCourse)`
    padding: 1rem;
    background-color: lightgrey;
`;
