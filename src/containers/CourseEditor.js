import React from 'react';
//import ModuleList from "./ModuleList";
import CourseService from '../services/CourseService';

export default class CourseEditor
    extends React.Component{

    constructor(props){
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        //this.findCourseById = this.findCourseById.bind(this);
        this.courseService = CourseService.instance;
        // this.state = {
        //     courseId:'',
        //     course:{
        //         modules:[{
        //             title: '',
        //             lessons: [{
        //                 title:'',
        //                 topics:[{
        //                     title:''
        //                 }]
        //             }]
        //         }]
        //     }
        // };
        this.state = {course: {}, courses: []};
    }

    selectCourse(courseId){
        this.setState({courseId: courseId});
    }

    componentDidMount(){
        this.selectCourse(this.props.match.params.courseId);
        this.findCourseById(this.props.match.params.courseId);
            // .then(course => {
            //     this.setState({course: course})
            //     console.log(this.props.course)
            // });
        // const course = {
        //     "id": "123",
        //     "title": "Course 1",
        //     "modules": [
        //         {
        //             "id": "123",
        //             "title": "Module 1 1",
        //             "lessons": [
        //                 {
        //                     "id": "123",
        //                     "title": "Lesson 1 1 1",
        //                     "topics": [
        //                         {"title": "Topic 1 1 1 1"}
        //                     ]
        //                 },
        //                 {
        //                     "id": "234",
        //                     "title": "Lesson 1 1 2",
        //                     "topics": [
        //                         {"title": "Topic 1 1 2 1"}
        //                     ]
        //                 }
        //             ]
        //         }]
        // };
        // this.setState({course: course});
    }

    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.match.params.courseId);
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light"><h3>{this.state.course.title}</h3>
                </nav>
                {/*<ModuleList course={this.props.course} courseId={this.state.courseId}/>*/}

            </div>
        );
    }

    findCourseById(courseId){
        const courses = require('../resources/courses');

        //var parsedJSON = JSON.parse(courses);
        for (var i=0;i<courses.length;i++) {
            if(courses[i].id === courseId){
                this.setState({course: courses[i]})
            }
        }
    }

}


