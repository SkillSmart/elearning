import React, {Component} from 'react';
import _ from 'lodash';

// Hook up graphql
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {compose} from 'react-apollo';
import mutations from '../../mutations';

class LessonQuickAddForm extends Component {

    state = {
        // Lesson Data
        title: '',
        headline: '',
        content: '',
        tags: '',
        // Video Data
        videoUrl: '',
        videoTitle: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);
        // Create Lesson and retrieve id
        let lessonBody = _.pick(this.state, ['title', 'headline', 'content', 'tags']);
        let {data: {createLesson: {id:targetId}}} = await this.props.quickAddLesson({
            variables: {lesson: lessonBody}
        });
        // Create Video and retrieve Id
        let videoBody = _.pick(this.state, ['videoUrl', 'videoTitle']);
        if(videoBody.videoUrl && videoBody.videoTitle) {
            
            let {data:{createVideo:{id:videoId}}} = await this.props.addVideo({
                variables: {video: videoBody}
            });
            // Connect video with Lesson
            
            let video = await this.props.addVideoToObject({
                variables: {videoId, targetId, targetClass: "lesson"}
            });
        }
        return videoBody
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }


    render() {


        
        // Define the Form
        const LessonForm = [
            {
                name: 'title',
                label: 'Lesson Title',
                type: 'text'
            }, {
                name: 'headline',
                label: 'Lesson Headline',
                type: 'text'
            }, {
                name: 'tags',
                label: 'Lesson Tags',
                type: 'text'
            }, {
                name: 'videoUrl',
                label: 'Video URL',
                type: 'text'
            }, {
                name: 'videoTitle',
                label: 'Video Title',
                type: 'text'
            }
        ]

        const renderField = ({name, label, type}) => (
            <div className="input-group">
                <input
                    name={name}
                    type={type}
                    onChange={this.handleChange}
                    value={this.state[name]}/>
                <label htmlFor={name}>{label}</label>
            </div>
        )

        return (
            <form onSubmit={this.handleSubmit}>
                {LessonForm.map(field => renderField(field))}
                <button onClick={this.handleSubmit}>Update</button>
            </form>
        )

    }
}


export default compose(
    graphql(mutations.lesson.quickAddLesson, {name: 'quickAddLesson'}), 
    graphql(mutations.video.addVideo, {name: 'addVideo'}), 
    graphql(mutations.video.addVideoToObject, {name: 'addVideoToObject'})
)(LessonQuickAddForm);