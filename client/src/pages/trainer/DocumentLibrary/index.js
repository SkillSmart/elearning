import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';


import {LibrarySearchHeader, CourseLibrarySubNavigation} from '../../../components';
import {LessonQuickAddForm} from '../../../forms';


class _TrainerDocumentLibrary extends Component {


    render() {
        let {className, match} = this.props;
        return (
            <div className={className}>

                {/* Search and Filter Bar */}
                <LibrarySearchHeader className="searchbar"/>

                <CourseLibrarySubNavigation
                    baseUrl={match.path}
                    linkMap={linkMap}
                    className="subnavigation"/> 

                {/* List of all lessons */}
                <section className="lesson_table">
                    <table>
                        <thead>
                            <tr>
                                <td>Title</td>
                                <td>Headline</td>
                                <td>Tags</td>
                                <td>createdAt</td>
                                <td>assigned</td>
                                <td>video</td>
                                <td>documents</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this
                                .state
                                .lessons
                                .map(lesson => (
                                    <tr>
                                        <td>{lesson.title}</td>
                                        <td>{lesson.headline}</td>
                                        <td>{lesson.tags}</td>
                                        <td>{lesson.createdAt}</td>
                                        <td>{lesson.assigned}</td>
                                        <td>{lesson.video}</td>
                                        <td>{lesson.documents}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </section>

                {/* The Sidebar*/}
                <div className="sidebar">
                <h3>Quick Add Lesson</h3>
                    <LessonQuickAddForm />
                <h3>View Lessons by Course</h3>

                </div>
            </div>
        )
    }
}

export default styled(_TrainerDocumentLibrary)`
    display: grid;
    grid-template-columns: 1fr minmax(15rem, .3fr) 1fr 1fr;
    grid-template-rows: minmax(10rem, .3fr) 1fr 2fr;
    grid-column-gap: 2rem;
    grid-row-gap: 3.5rem;
    padding: 3.5rem;
    height: 95vh;

    grid-template-areas: 
        "search search search search"
        "side table table table"
        ". . . . ";

    background: linear-gradient(
        to bottom right,
        lightblue, darkblue
        );

    .searchbar {
        grid-area: search;
    }

    .lesson_table {
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

const linkMap = [
    {
        url: '/dashboard',
        label: "Dashboard"
    },
    {
        url: '/dashboard',
        label: "Dashboard"
    },
    {
        url: '/manager',
        label: "Manager"
    },
    {
        url: '/library',
        label: "Library"
    },
    {
        url: '/new',
        label: "Add Document"
    },
    {
        url: '/close',
        label: "Retire Course"
    },
]