import React, { Component } from 'react';
import axios from 'axios';

class LessonQuickAddForm extends Component {
  
    state = {

     }
    
  
    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post('/lessons', this.state);
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
      const LessonForm = [
          {
              name: 'title',
              label: 'Lesson Title',
              type: 'text',
          },
          {
              name: 'slug',
              label: 'Lesson Slug',
              type: 'text',
          },
          {
              name: 'headline',
              label: 'Lesson Headline',
              type: 'text',
          },
          {
              name: 'video',
              label: 'Lesson Video',
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

export default LessonQuickAddForm;