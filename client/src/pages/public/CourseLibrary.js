import React, {Component} from 'react';
import styled from 'styled-components';

import {CourseCard, CardGallery} from '../../components';

class _CourseLibrary extends Component {

    state = {
        courses: [],
        fullSemesterCourses: [],
        selected: new Set()
    }

    handleSelect = (courseId) => {
        console.log(courseId);
        // Check if the course is not already selected
        let old = new Set(this.state.selected);
        old.add(courseId);
        this.setState({
            selected: old
        })
        console.log(this.state.selected);
    }

    componentDidMount() {
        fetch('/courses')
            .then(res => res.json())
            .then(courses => this.setState({courses}))
    }

    render() {
        let {className} = this.props;
        return (   
            <div className={className}>
                <h2>Full Semester</h2>
                <CardGallery >
                    {this.state.courses.map( course => <CourseCard course={course} onSelect={this.handleSelect}/>)}
                </CardGallery>

                <h2>Short Courses</h2>
                <CardGallery >
                    {this.state.courses.map( course => <CourseCard course={course} onSelect={this.handleSelect}/>)}
                </CardGallery>
            </div>
        )
    }
}

export const CourseLibrary = styled(_CourseLibrary)`
    background: linear-gradient(
        to bottom right,
        lightblue, darkblue
    );
    padding: 8rem;
    
`;