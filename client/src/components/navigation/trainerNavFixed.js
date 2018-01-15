import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


const _TrainerNavFixed = ({className, baseUrl}) => (
    <div className={className}>
        <NavLink to="/" className="logo">
            <img  src="https://placehold.it/120x60" alt="Necademy.com Logo"/>
        </NavLink>

        <nav className="navbar">
            <li className="nav-item">
                <NavLink className="nav-link" to={`${baseUrl}/courses`}>Courses</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={`${baseUrl}/modules`}>Modules</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={`${baseUrl}/lessons`}>Lessons</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={`${baseUrl}/videos`}>Video Library</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to={`${baseUrl}/dashboard`}>PROFILE</NavLink>
            </li>
        </nav>
    </div>
);

export const TrainerNavFixed = styled(_TrainerNavFixed)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: end;
    align-items: center;

    .logo {
        justify-self: start;
    }        
    

    .navbar {
        display: flex;
        list-style: none;


        .nav-link {
            margin-right: 2.5rem;
            padding: 1.5rem 1.5rem;
        }

        
    }
`;
