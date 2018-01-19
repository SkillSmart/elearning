import React, {Component} from 'react';
import styled from 'styled-components';
// Hook up Graphql
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {compose} from 'react-apollo';
import queries from '../../../queries';
import mutations from '../../../mutations';

import {LibrarySearchHeader} from '../../../components';
import {LessonQuickAddForm} from '../../../forms';
import {LessonOverviewTable} from '../../../components';


class _TrainerLessonLibrary extends Component {



    render() {
        let {className, match, lessonData: { lessons }} = this.props;
     
        console.log("[PROPS]", this.props);
        return (
            
            <div className={className}>

                {/* Search and Filter Bar */}
                <LibrarySearchHeader className="searchbar"/>
               
                {/* List of all lessons */}
                <section className="lesson_table">
                    <LessonOverviewTable lessons={lessons} />
                </section>

                {/* The Sidebar*/}
                <div className="sidebar">
                    <h3>Quick Add Lesson</h3>
                        <LessonQuickAddForm />
                    <h3>View Lessons by Course</h3>
                </div>

                <button onClick={this.props.addLesson}>Click me!</button>
            </div>
        )
    }
};


// Export the styled component
const TrainerLessonLibrary = styled(_TrainerLessonLibrary)`
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


export default compose(
    graphql(gql`
        mutation {
            createLesson(data: {title: "My first selfmade lesson"}) {
                id
            }
        }
    `, {name: 'addLesson'}),
    graphql(queries.lesson.getLessonListOverview, { name: 'lessonData'}),
)(TrainerLessonLibrary)