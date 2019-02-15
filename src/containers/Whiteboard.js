import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseEditor from "./CourseEditor";
import CourseManagerApp from "./CourseManagerApp";
import Login from "../components/Login";
import Register from '../components/Register'
import Profile from '../components/Profile'


class WhiteBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
            <div>

                <Route path='/courses' component={CourseManagerApp}/>
                <Route path="/api/courses/:courseId"
                       exact
                       component={CourseEditor}/>
                <Route path="/" exact render={() => <Login/>}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
            </div>
            </Router>
        )
    }
}

export default WhiteBoard;