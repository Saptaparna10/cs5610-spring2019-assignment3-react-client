import React, {Component} from 'react';
import CourseTable from "./CourseTable";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class CourseManager
    extends Component{

    render(){
        return (
            <Router>
                <div>
                    {/*<Link to="/courses">CourseList</Link>*/}
                    <Route path='/courses'
                           component={CourseTable}/>
                </div>
            </Router>
        )
    }
}