import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {LibrarySearchHeader, CourseLibrarySubNavigation} from '../../../components';
import {CourseQuickAddForm} from '../../../forms';

// Routing
import {Route} from 'react-router-dom';
import TrainerCourseCreator from './Trainer-CourseCreator';
import TrainerCourseDashboard from './Trainer-CourseDashboard';
import TrainerCourseManager from './Trainer-CourseManager';
import TrainerCourseLibrary from './Trainer-CourseLibrary';
import TrainerCourseRetirer from './Trainer-CourseRetirer';

const _TrainerCourseLibrary = ({className, match}) => (
    <div className={className}>

        <CourseLibrarySubNavigation
            baseUrl={match.path}
            linkMap={linkMap}
            className="subnavigation"/> 
        
        {/* Routing */}
        <main className="display">
            <Route
                exact
                path={`${match.path}`}
                component={TrainerCourseDashboard}/>
            <Route
                path={`${match.path}/library`}
                component={TrainerCourseLibrary}/>
            <Route
                path={`${match.path}/manager`}
                component={TrainerCourseManager}/>
            <Route 
                path={`${match.path}/new`} 
                component={TrainerCourseCreator}/>
            <Route path={`${match.path}/close`} component={TrainerCourseRetirer}/>
        </main>
        <footer className="footer">
            The Course Library Footer
        </footer>
    </div>
);

export default styled(_TrainerCourseLibrary)`
    display: grid;
    grid-template-areas: 
        "nav nav nav nav"
        "sub sub sub sub"
        "foot foot foot foot";
       

    background: linear-gradient(
        to bottom right,
        lightblue, darkblue
        );

    .subnavigation {
        grid-area: nav;
        background: white;
        align-self: center;
    }

    .display {
        grid-area: sub;
    }
    
    .footer {
        grid-area: foot;
    }

`;


// Additional configuration
const linkMap = [
    {
        url: '',
        label: "Dashboard"
    },
    {
        url: 'manager',
        label: "Manager"
    },
    {
        url: 'library',
        label: "Course Library"
    },
    {
        url: 'new',
        label: "Add Course"
    },
    {
        url: 'close',
        label: "Retire Course"
    },
]