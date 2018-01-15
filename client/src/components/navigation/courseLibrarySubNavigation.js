import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const _CourseLibrarySubNavigation = ({className, baseUrl}) => (
    <nav className={className}>
        <NavLink to={`${baseUrl}/dashboard`} className="nav-link">Dashboard</NavLink>
        <NavLink to={`${baseUrl}/manager`} className="nav-link">Manager</NavLink>
        <NavLink to={`${baseUrl}/library`} className="nav-link">Library</NavLink>
        <NavLink to={`${baseUrl}/new`} className="nav-link">Create Course</NavLink>
        <NavLink to={`${baseUrl}/close`} className="nav-link">Retire Course</NavLink>
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
