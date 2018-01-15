import React, { Component } from 'react';
import axios from 'axios';

class CourseQuickAddForm extends Component {
  
    state = {

     }
    
  
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post('/courses', this.state);
            console.log(response);
            console.log(this.state);
        } catch (e) {
            throw e;
        }
    }
  
    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name] : e.target.value
        });
    }
    
    render() {
      
        // Define the Form
      const CourseForm = [
          {
              name: 'title',
              label: 'Course Title',
              type: 'text',
          },
          {
              name: 'slug',
              label: 'Course Slug',
              type: 'text',
          },
          {
              name: 'headline',
              label: 'Course Headline',
              type: 'text',
          },
          {
              name: 'summary',
              label: 'Course Summary',
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
                { CourseForm.map( field => renderField(field))}
            	<button type="submit">Update</button>
            </form> 
        )
    
  }
}

export default CourseQuickAddForm;