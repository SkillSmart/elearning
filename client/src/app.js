import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Aux from 'react-aux';

// Local Imports
import {Layout} from './components'
// Component Imports
import {LandingPage} from './pages';
import {CourseListPage, CourseLibrary, Classroom} from './pages';
// Import TrainerPages
import {TrainerIndex} from './pages/trainer/index';

const App = () => (
    <BrowserRouter >
        <Switch>
            <Route path="/hub" component={TrainerIndex}/>
            <Layout>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/view/:course/:lesson" component={Classroom} />
                <Route path="/courses" component={CourseLibrary}/>
                <Route path="/trainerhq" component={CourseListPage}/>
            </Layout>
        </Switch>
    </BrowserRouter>
);

export default App;
