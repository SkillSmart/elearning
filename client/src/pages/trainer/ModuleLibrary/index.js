import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {LibrarySearchHeader, CourseLibrarySubNavigation} from '../../../components';
import {CourseQuickAddForm} from '../../../forms';

// Routing
import {Route} from 'react-router-dom';
import TrainerModuleCreator from './Trainer-ModuleCreator';
import TrainerModuleDashboard from './Trainer-ModuleDashboard';
import TrainerModuleManager from './Trainer-ModuleManager';
import TrainerModuleLibrary from './Trainer-ModuleLibrary';
import TrainerModuleRetirer from './Trainer-ModuleRetirer';

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
                path={`${match.path}/`}
                component={TrainerModuleDashboard}/>
            <Route
                path={`${match.path}/library`}
                component={TrainerModuleLibrary}/>
            <Route
                path={`${match.path}/manager`}
                component={TrainerModuleManager}/>
            <Route 
                path={`${match.path}/new`} 
                component={TrainerModuleCreator}/>
            <Route 
                path={`${match.path}/new`} 
                component={TrainerModuleRetirer}/>
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
        label: "Module Library"
    },
    {
        url: 'new',
        label: "Add Module"
    },
    {
        url: 'new',
        label: "Retire Module"
    },
]