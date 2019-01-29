import React from 'react'
import CourseCard from '../components/CourseCard'
import CourseService from '../services/CourseService'

class CourseTable extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.renderView = this.renderView.bind(this);
        //this.state = {view: 'list', course: {}, courses: this.state.courses, sidebarOpen: false};
        this.state = {
            courses: this.courseService.findAllCourses(),
            view: 'list',
            course: {}
        }
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