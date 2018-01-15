import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {LibrarySearchHeader, CourseLibrarySubNavigation} from '../../../components';
import {CourseQuickAddForm} from '../../../forms';

// Routing
import {Route} from 'react-router-dom';
import TrainerLessonCreator from './Trainer-LessonCreator';
import TrainerLessonDashboard from './Trainer-LessonDashboard';
import TrainerLessonManager from './Trainer-LessonManager';
import TrainerLessonLibrary from './Trainer-LessonLibrary';
// import TrainerLessonListPage from './Trainer-LessonListPage';
import TrainerLessonUpdator from './Trainer-LessonUpdator';

const _TrainerCourseLibrary = ({className, match}) => (
    <div className={className}>

        <CourseLibrarySubNavigation
            baseUrl={match.path}
            className="subnavigation"/> 
        
        {/* Routing */}
        <main className="display">
            <Route
                path={`${match.path}/dashboard`}
                component={TrainerLessonDashboard}/>
            <Route
                path={`${match.path}/library`}
                component={TrainerLessonLibrary}/>
            <Route
                path={`${match.path}/manager`}
                component={TrainerLessonManager}/>
            <Route 
                path={`${match.path}/new`} 
                component={TrainerLessonCreator}/>
            <Route
                path={`${match.path}/update`}
                component={TrainerLessonUpdator}/>
            {/* <Route path={`${match.path}/close`} component={TrainerLessonList}/> */}
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
