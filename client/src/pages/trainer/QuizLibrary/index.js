import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {LibrarySearchHeader, CourseLibrarySubNavigation} from '../../../components';
import {CourseQuickAddForm} from '../../../forms';

// Routing
import {Route} from 'react-router-dom';
import TrainerQuizCreator from './Trainer-QuizCreator';
import TrainerQuizDashboard from './Trainer-QuizDashboard';
import TrainerQuizManager from './Trainer-QuizManager';
import TrainerQuizLibrary from './Trainer-QuizLibrary';

const _TrainerQuizLibrary = ({className, match}) => (
    <div className={className}>

        <CourseLibrarySubNavigation
            baseUrl={match.path}
            linkMap={linkMap}
            className="subnavigation"/> 
        
        {/* Routing */}
        <main className="display">
            <Route
                exact
                path={`${match.path}/`}
                component={TrainerQuizDashboard}/>
            <Route
                path={`${match.path}/library`}
                component={TrainerQuizLibrary}/>
            <Route
                path={`${match.path}/manager`}
                component={TrainerQuizManager}/>
            <Route 
                path={`${match.path}/new`} 
                component={TrainerQuizCreator}/>
        </main>
        <footer className="footer">
            The Course Library Footer
        </footer>
    </div>
);

export default styled(_TrainerQuizLibrary)`
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
        label: "Quiz Manager"
    },
    {
        url: 'library',
        label: "Quiz Library"
    },
    {
        url: 'new',
        label: "Add Quiz"
    },
]