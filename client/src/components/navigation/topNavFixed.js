import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


const _topNavFixed = ({className}) => (
    <div className={className}>
        <NavLink to="/" className="logo">
            <img  src="https://placehold.it/120x60" alt="Necademy.com Logo"/>
        </NavLink>

        <nav className="navbar">
            <li className="nav-item">
                <NavLink className="nav-link" to="/courses">Courses</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/join">Join us</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/cart">CART</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/hub">PROFILE</NavLink>
            </li>
        </nav>
    </div>
);

export const TopNavFixed = styled(_topNavFixed)`
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
