import React from 'react'
import CourseCard from '../components/CourseCard'
import CourseService from '../services/CourseService'

class CourseTable extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.renderView = this.renderView.bind(this);
        this.state = {
            courses: this.props.courses,
            view: 'tabs',
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
        return (
            <div className="card-deck">
                {
                    this.props.courses.map((course, index) =>
                        <CourseCard key={index} course={course} delete={this.props.deleteCourse}/>
                    )
                }

            </div>

            );


        {/*var courses = this.props.courses.map(*/}
            // (course, index) => {
            //     return <CourseCard key={index} course={course} delete={this.props.deleteCourse}/>
            // }
        {/*)*/}

        {/*return(*/}
            {/*courses*/}
        {/*)*/}
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