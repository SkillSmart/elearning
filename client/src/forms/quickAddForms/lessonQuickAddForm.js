import React, { Component } from 'react';
import _ from 'lodash';

// Hook up graphql
import {graphql} from 'react-apollo';
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
        console.log("Attempting to quickAddLesson", this.props);
        // Create new Lesson
        let lessonData = _.pick(this.state, ['title', 'content', 'tags']);
        let lesson = this.props.quickAddLesson(lessonData)
        // Save the video
        if(this.state.videoUrl && this.state.videoTitle){
            let videoData = _.pick(this.state, ['videoUrl', 'videoTitle']);
            let video = this.props.addVideo();
            console.log("Reporting Video Data");
            this.props.addVideoToObject({
                variables: video
            })
        }
       
        // Associate the video with the lesson
        this.props.quickAddLesson(this.state);
    }
  
    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
    }
    
    render() {
      
        // Define the Form
      const LessonForm = [
          {
              name: 'title',
              label: 'Lesson Title',
              type: 'text',
          },
          {
              name: 'headline',
              label: 'Lesson Headline',
              type: 'text',
          },
          {
              name: 'videoUrl',
              label: 'Video URL',
              type: 'text',
          },
          {
              name: 'tags',
              label: 'Lesson Tags',
              type: 'text',
          }
      ]
  
      const renderField = ({name, label, type}) => (
          <div className="input-group">
              <input 
                  name={name} 
                  type={type}
                  onChange={this.handleChange}
                  value={this.state[name]}
                  />
              <label htmlFor={name}>{label}</label>
          </div>
          )
  
          return (
            <form onSubmit={this.handleSubmit}>
                { LessonForm.map( field => renderField(field))}
            	<button type="submit">Update</button>
            </form> 
        )
    
  }
}

export default compose(
    graphql(mutations.lesson.quickAddLesson, {name: 'quickAddLesson'}),
    graphql(mutations.video.addVideo, {name: 'addVidoe'}),
    graphql(mutations.video.addVideoToObject, {name: 'addVideoToObject'})
)(LessonQuickAddForm);