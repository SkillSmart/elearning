import React, { Component } from 'react';
import styled from 'styled-components';

import {Route, Switch} from 'react-router-dom';

import {TrainerNavFixed} from '../../components';

// Import Trainer related Pages
import TrainerCourseLibrary from './CourseLibrary';
import TrainerModuleLibrary from './ModuleLibrary';
import TrainerLessonLibrary from './LessonLibrary';
import TrainerVideoLibrary from './VideoLibrary';
import TrainerDocumentLibrary from './DocumentLibrary';
import TrainerQuizLibrary from './QuizLibrary';


class _TrainerIndex extends Component {
  render() {
      let {className} = this.props;
      console.log(this.props);
      console.log(this.props.match.path);
    return (
        <div className={className}>
        <TrainerNavFixed baseUrl={this.props.match.path}/>
        <Switch>
            <Route path={`${this.props.match.path}/courses`} component={TrainerCourseLibrary} />
            <Route path={`${this.props.match.path}/modules`} component={TrainerModuleLibrary} />
            <Route path={`${this.props.match.path}/lessons`} component={TrainerLessonLibrary} />
            <Route path={`${this.props.match.path}/videos`} component={TrainerVideoLibrary} />
            <Route path={`${this.props.match.path}/documents`} component={TrainerDocumentLibrary} />
            <Route path={`${this.props.match.path}/quizzes`} component={TrainerQuizLibrary} />
        </Switch>
        
        </div>
      
    )
  }
}

export const TrainerIndex = styled(_TrainerIndex)`

`;
