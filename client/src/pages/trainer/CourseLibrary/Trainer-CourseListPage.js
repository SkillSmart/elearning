import React, {Component} from 'react'
import axios from 'axios';

// import UI Components
import {CardGallery} from '../../../components/galleries';

// Sidebar Elements
import {QuickAddCourse} from '../../../components/quickAdd';

export default class CourseListPage extends Component {

    state = {
        courses: []
    }

    componentDidMount() {
        fetch('/courses')
            .then(res => res.json())
            .then(courses => this.setState({courses}))
    }

    render() {

        return (
            <div>
                <section className="CourseCardDisplay">
                    <h1>Your Courses</h1>
                    <CardGallery items={this.state.courses}/>
                </section>

                <h2>Add a new Course</h2>
                <QuickAddCourse />
            </div>
        )
    }
}
