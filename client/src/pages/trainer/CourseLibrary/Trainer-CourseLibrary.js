import React, {Component} from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {CourseLibrarySubNavigation, QuickAddCourse} from '../../../components';


// Routing
import {Route} from 'react-router-dom';

class _TrainerCourseLibrary extends Component {

    state = {
        courses: [],
        selectedIdx: null,
        selectedCourse: {},
        selectedDetail: ""
    };
    
    componentWillMount = async () => {
      let response = await axios.get('/courses');
      let courses = response.data;
      this.setState({courses});
    };
    onSelectCourse = (idx) => {
        this.setState({
            selectedCourse: this.state.courses[idx],
            selectedIdx: idx
        })
    };
    onSelectDetail = (detail) => {
        this.setState({
            selectedDetail: detail
        })
    };
    displayDetails = () => {
        switch(this.state.selectedDetail) {
            case "module":
                return (
                    <h2>Modules</h2>
                );
            case "lesson":
                return (
                    <h2>Lessons</h2>
                );
            case "quiz": 
                return (
                    <h2>Quizzes</h2>
                );
            case "document":
                return (
                    <h2>Documents</h2>
                );
            default:
                return (
                    <h2>DEFAULT</h2>
                )
        }
    };

    
    render() {
        let {className} = this.props;
        let {
            title, 
            subtitle, 
            summary, 
            headline, 
            createdAt, 
            status,
            modules,
            lessons,
            quizzes,
            documents
        } = this.state.selectedCourse;
        let {selectedIdx} = this.state;
        return (
            <div className={className}>
                <section className="sidebar">
                    <h1>The Library Sidebar</h1>
                    <QuickAddCourse />
                </section>
                <secton className="preview">
                    <header className="display">
                        <h3>{title|| 'MISSING COURSE TITLE'}</h3>
                    </header>
                    <main className="showcase">
                        <div className="headline">{headline}</div>
                        <div className="summary">{summary}</div>
                    </main>
                    <aside className="details">
                        <div className="tab">
                            <button className="tablinks" onClick={() => this.onSelectDetail('module')}>{modules? modules.length:0} Modules</button>
                            <button className="tablinks" onClick={() => this.onSelectDetail('lesson')}>{lessons? lessons.length:0} Lessons</button>
                            <button className="tablinks" onClick={() => this.onSelectDetail('quiz')}>{quizzes? quizzes.length:0} Quizzes</button>
                            <button className="tablinks" onClick={() => this.onSelectDetail('document')}>{documents? documents.length:0} Documents</button>
                        </div>
                        {/* Tab Content */}
                        <div className="details_display">
                            {this.displayDetails()}
                        </div>
                    </aside>
                </secton>
                <section className="table">
                    {/* TABLE */}
                    <table className="course-table">
                        <thead>
                            <tr>
                                <td className="column-heading">Title</td>
                                <td className="column-heading">Status</td>
                                <td className="column-heading">Students</td>
                                <td className="column-heading">Modules</td>
                                <td className="column-heading">Lessons</td>
                                <td className="column-heading">Quizzes</td>
                                <td className="column-heading">Set</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.courses.map( (course, idx) => (
                                <tr 
                                    onClick={() => this.onSelectCourse(idx)}
                                    className={selectedIdx === idx? "selected": null}                      
                                                                        >
                                    <td className="courserow">{course.title}</td>
                                    <td className="courserow">{course.createdAt}</td>
                                    <td className="courserow">{course.status}</td>
                                    <td className="courserow">{course.status}</td>
                                    <td className="courserow">{course.status}</td>
                                    <td className="courserow">{course.status}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>

                </section>

            </div>
        )
    }
}

export default styled(_TrainerCourseLibrary)`
    margin: 2rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 20rem 1fr;

    grid-template-areas: 
        "side prev prev prev"
        "side lib lib lib";

    
    .sidebar {
        grid-area: side;
        background: white;
        padding: 1rem;
    }

    .preview {
        grid-area: prev;
        display: grid;
        grid-gap: 1rem;
        grid-template-areas: 
        "disp disp disp"
        "show show details";

        .display {
            grid-area: disp;
        }
        .showcase {
            grid-area: show;
            height: 25rem;
            background: white;
            padding: 2rem;
        }
        .details {
            grid-area: details;
            height: 25rem;
            background: white;
            
            /* Styling the tab */
            &_tab {
                border: 1px solid #ccc;
                background: white;
                overflow: hidden;

                .tablinks {
                    border: none;

                }
            }

            &_display {
                margin: 2rem;
            }
        }
    }

    .table {
        grid-area: lib;
        background: white;
        padding: 2rem;

        border: none;

        thead {
            td {
                font-size: 1.3rem;
            }
        }

        tbody {
            tr {
                transition: all .2s ease;
                :hover {
                    background: lightgrey;
                    cursor: pointer;
                }
            }
            td {
                padding: .8rem;
            }
        }

        .selected {
            background: lightgrey;
        }
    }

  
`;


