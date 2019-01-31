import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseEditor from "./CourseEditor";
import CourseManagerApp from "./CourseManagerApp";


class WhiteBoard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Router>
                    <div>
                        <Route path="/courses"
                               component={CourseManagerApp}/>
                        <Route path="/course/:courseId"
                                   component={CourseEditor}/>
                    </div>
                </Router>
        )
    }
}

export default WhiteBoard;