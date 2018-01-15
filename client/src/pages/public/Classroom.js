import React, { Component } from 'react'
import axios from 'axios';


export class Classroom extends Component {

    state = {
        currentLesson: {}
    }
    
    async componentWillMount() {
        // Retrieve the course and lesson information from the url header
        let {params: {course, lesson}} = this.props.match;
        // retrieve the lesson from the server
        let currentLesson = await axios.get(`/lessons/${lesson}`);
        // update the state with the new object
        this.setState({ currentLesson });
        console.log(this.state.currentLesson);
    }
    

  render() {

    let {match} = this.props;
    return (
      <div>
        <h1>The Classroom</h1>
        
      </div>
    )
  }
}

