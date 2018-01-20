import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';




const _CourseLibrarySubNavigation = ({className, baseUrl, linkMap}) => (
    <nav className={className}>
        {linkMap.map( link => <NavLink to={`${baseUrl}/${link.url}`} className="nav-link">{link.label}</NavLink>)}
    </nav>
);

export default styled(_CourseLibrarySubNavigation)`
    display: flex;

    .nav-link {
        padding: 1.3rem 2.5rem;
        transition: all .2s ease;


        :hover {
            background: lightgrey;
        }
    }

`;
