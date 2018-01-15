import React, {Component} from 'react';
import axios from 'axios';

class CourseModelForm extends Component {

    state = {}

    // Form render helpers
    HeadingFields = {
        title: {
            type: 'text',
            label: 'Course Title'
        },
        subtitle: {
            type: 'text',
            label: 'Subtitle'
        },
        headline: {
            type: 'text',
            label: 'Headline'
        },
        summary: {
            type: 'textarea',
            label: 'Course Summary'
        }
    };

    CommerceFields = {};

    SkillSettings = {};

    handleSubmit = async(e) => {
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
            [e.target.name]: e.target.value
        });
    }

    render() {

        // Define the Form
        
        

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
                {CourseForm.map(field => renderField(field))}
                <button type="submit">Update</button>
            </form>
        )

    }
}

export default CourseModelForm;