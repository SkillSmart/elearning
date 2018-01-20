import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';


import {LibrarySearchHeader, LibrarySubNavigation} from '../../../components';
import {CourseQuickAddForm} from '../../../forms';

// Routing
import {Route} from 'react-router-dom';


class _TrainerCourseLibraryDashboard extends Component {

    state = {
        courses: []
    }

    componentWillMount = async() => {
        try {
            let response = await axios.get('/courses');
            let courses = response.data;
            this.setState({courses});
        } catch (e) {
            throw e;
        }

    }

    render() {
        let {className} = this.props;
        return (
            <div className={className}>
                
                <h1>Document Dashboard</h1>
                

                {/* The Sidebar*/}
                <div className="sidebar">
                <h3>Quick Add Course</h3>
                    <CourseQuickAddForm />
                <h3>View Lessons by Course</h3>

                </div>
            </div>
        )
    }
}

export default styled(_TrainerCourseLibraryDashboard)`
    display: grid;
    grid-template-columns: 1fr minmax(15rem, .3fr) 1fr 1fr;
    grid-template-rows: 4rem minmax(10rem, .3fr) 1fr 2fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    padding: 3.5rem;
    height: 95vh;

    grid-template-areas: 
        "nav nav nav nav"
        "search search search search"
        "side table table table"
        ". . . . ";

    background: linear-gradient(
        to bottom right,
        lightblue, darkblue
        );

    .subnavigation {
        grid-area: nav;
        background: white;
        align-self: center;

    }

    .searchbar {
        grid-area: search;
    }

    .course_table {
        grid-area: table;
        background: white;
        padding: 2rem;
        border-radius: 3px;
    }

    .sidebar {
        grid-area: side;
        border-radius: 3px;
        padding: 1.5rem 3.5rem;
        background: white;

    }


`;
