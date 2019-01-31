import React from 'react'
import CourseCard from '../components/CourseCard'
import CourseService from '../services/CourseService'

class CourseTable extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.renderView = this.renderView.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.state = {
            courses: this.props.courses,
            view: 'tabs',
            course: {}
        }
    }


    deleteCourse(course){
        const courses = this.courseService.deleteCourse(course);
        this.setState({courses: courses});
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
                return <CourseCard key={index} course={course} delete={this.deleteCourse}/>
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