import React from 'react'
import CourseCard from '../components/CourseCard'
import CourseService from '../services/CourseService'

class CourseTable extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.renderView = this.renderView.bind(this);
        this.state = {view: 'tabs', course: {}, courses: [], sidebarOpen: false};
    }

    componentDidMount(){
        this.findAllCourses();
    }

    findAllCourses(){
        var courses = require('../resources/courses');
        this.setState({courses : courses});
        // this.courseService
        //     .findAllCourses()
        //     .then((courses) => {
        //         this.setState({courses : courses});
        //     })
    }

    renderView(){

            return (
                <div className='card-deck'>
                    {this.renderCourseRow()}
                </div>
            );
    }


    renderCourseRow(){
        var courses = this.state.courses.map(
            (course, index) => {
                return <CourseCard key={index} course={course}/>
            }
        )

        return(
            courses
        )
    }

    render() {
        return (
            <div className='heading-bar'>
                {this.renderView()}
            </div>

        )
    }
}
export default CourseTable