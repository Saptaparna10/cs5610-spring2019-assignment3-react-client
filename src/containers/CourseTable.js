import React from 'react'
import CourseRow from '../components/CourseRow'
import CourseCard from '../components/CourseCard'
import CourseService from '../services/CourseService'
import CourseGrid from '../containers/CourseGrid'

class CourseTable extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.renderView = this.renderView.bind(this);
        this.toggleView = this.toggleView.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        //this.state = {view: 'list', course: {}, courses: this.state.courses, sidebarOpen: false};
        this.state = {
            courses: this.courseService.findAllCourses(),
            view: 'list',
            course: {}
        }
    }

    titleChanged(event){
        this.setState({
            course: {title: event.target.value}
        });
    }


    createCourse(){
        const courses = this.courseService.addCourse(this.state.course);
        this.setState({courses: courses});
    }

    deleteCourse(course){
        const courses = this.courseService.deleteCourse(course);
        this.setState({courses: courses});

    }

    toggleView(){
        if(this.state.view === 'list') {
            this.setState({view: 'tabs',
            courses: this.state.courses});
        }
        else
            this.setState({view: 'list',
                courses: this.state.courses});
    }


    renderView(){
         if(this.state.view === 'list'){
            return (
                <table className='table table-striped'>
                    <thead className='thead-light'>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Title</th>
                        <th>Owned By</th>
                        <th>Last Modified</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderCourseRow()}
                    </tbody>
                </table>
            );
        }
        else {
            return (
                <div>
                <table className='table table-striped'>
                    <thead className='thead-light'>
                    <tr>
                        <th>Recent documents</th>
                        <th>Owned By me</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                    <div>
                    <CourseGrid courses={this.state.courses}/>
                    </div>
                </div>
            )
        }
    }

    renderCourseRow(){
        var courses = this.state.courses.map(
            (course, index) => {
                 return <CourseRow key={index} course={course}  delete={this.deleteCourse}/>
            }
        )

        return(
            courses
        )
    }

    render() {
        return (
            <div className='heading-bar'>
                <table className='table table-borderless'>
                    <thead>
                    <tr>
                        <th><i className='fa fa-bars'></i></th>
                        <th width="20%"><h4>Course Manager</h4></th>
                        <th width="60%"><input onChange={this.titleChanged}
                                               className="form-control"
                                               id="titleFld"
                                               placeholder="cs101"/></th>
                            <th width="70%" className='pull-right'>
                                <button onClick={this.createCourse}
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
                <div>
                   {this.renderView()}
                </div>
            </div>


        )
    }
}
export default CourseTable