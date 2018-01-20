import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {LibrarySearchHeader, CourseLibrarySubNavigation} from '../../../components';
import {CourseQuickAddForm} from '../../../forms';

// Routing
import {Route} from 'react-router-dom';
import TrainerDocumentCreator from './Trainer-DocumentCreator';
import TrainerDocumentDashboard from './Trainer-DocumentDashboard';
import TrainerDocumentManager from './Trainer-DocumentManager';
import TrainerDocumentLibrary from './Trainer-DocumentLibrary';

const _TrainerDocumentLibrary = ({className, match}) => (
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
                component={TrainerDocumentDashboard}/>
            <Route
                path={`${match.path}/library`}
                component={TrainerDocumentLibrary}/>
            <Route
                path={`${match.path}/manager`}
                component={TrainerDocumentManager}/>
            <Route 
                path={`${match.path}/new`} 
                component={TrainerDocumentCreator}/>
        </main>
        <footer className="footer">
            The Document Library Footer
        </footer>
    </div>
);

export default styled(_TrainerDocumentLibrary)`
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
        url: 'dashboard',
        label: "Dashboard"
    },
    {
        url: 'manager',
        label: "Manager"
    },
    {
        url: 'library',
        label: "Document Library"
    },
    {
        url: 'new',
        label: "Add Document"
    },
    {
        url: 'close',
        label: "Retire Document"
    },
]