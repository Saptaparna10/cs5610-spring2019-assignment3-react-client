import React, {Component} from 'react';
import CourseTable from "./CourseTable";
import CourseService from '../services/CourseService'
import CourseEditor from './CourseEditor';
import CourseGrid from './CourseGrid'


import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class CourseManager
    extends Component{

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.toggleView = this.toggleView.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.addCourse = this.addCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.renderView = this.renderView.bind(this);
        this.state = {
            courses: this.courseService.findAllCourses(),
            view: 'list'
        }
    }


    titleChanged(event){
        this.setState({
            course: {title: event.target.value}
        });
    }

    toggleView(){
        if(this.state.view === 'list') {
            this.setState({view: 'tabs'})
        }
        else
            this.setState({view: 'list'})
    }

    addCourse(){
        const courses = this.courseService.addCourse(this.state.course);
        this.setState({courses: courses});
    }

    deleteCourse(course){
        const courses = this.courseService.deleteCourse(course);
        this.setState({courses: courses});

    }

    renderView(){
        if(this.state.view === 'list'){
            return (
                <CourseTable
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>

            );
        }
        else {
            return (
                <CourseGrid
                    deleteCourse={this.deleteCourse}
                    courses={this.state.courses}/>
            );
        }
    }

    render(){
        return (
            <div className='table-responsive'>
                    <table className="table table-striped table-dark">
                        <thead>
                        <tr>
                            <th><i className='fa fa-bars'></i></th>
                            <th className="pull-left"><h4>Course Manager</h4></th>
                            <th><input onChange={this.titleChanged}
                                                   className="form-control"
                                                   id="titleFld"
                                                   placeholder="cs101"/></th>
                            <th className='pull-right'>
                                <button onClick={this.addCourse}
                                        className="btn btn-primary btn-block"
                                        id="addBtn">
                                    <i className='fa fa-plus'></i>
                                </button>
                            </th>

                            <th>
                                <button onClick={this.toggleView}
                                        className='btn btn-warning'
                                        id='toggleBtn'>
                                    <i className='fa fa-th'></i>
                                </button>
                            </th>
                        </tr>
                        </thead>
                    </table>
                    {this.renderView()}

                </div>
        )
    }
}