import React, {Component} from 'react';
import CourseTable from "./CourseTable";
import CourseService from '../services/CourseService'
import CourseEditor from './CourseEditor';


import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class CourseManager
    extends Component{

    constructor() {
        super();
        this.courseService = new CourseService()
        this.state = {
            courses: this.courseService.findAllCourses(),
            view: 'list',
            course: {}
        }
    }
    deleteCourse = course =>
        this.setState({
            courses: this.courseService.deleteCourse(course)
        })
    addCourse = () =>
        this.setState({
            courses: this.courseService.addCourse(null)
        })

    render(){
        return (
            <Router>
                <div>
                    {/*<Link to="/courses">CourseList</Link>*/}
                    <Route path='/courses'
                           component={CourseTable}/>
                    <Route path="/course/:courseId"
                           component={CourseEditor}/>
                </div>
            </Router>
        )
    }
}