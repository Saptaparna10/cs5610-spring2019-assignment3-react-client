import React from 'react'
import CourseRow from '../components/CourseRow'
import CourseCard from '../components/CourseCard'
import CourseService from '../services/CourseService'
import CourseGrid from '../containers/CourseGrid'

class CourseTable extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = CourseService.instance;
        this.renderView = this.renderView.bind(this);
        this.toggleView = this.toggleView.bind(this);
        this.state = {view: 'list', course: {}, courses: [], sidebarOpen: false};
    }

    componentDidMount(){
        this.findAllCourses();
    }

    toggleView(){
        if(this.state.view === 'list')
            this.setState({view: 'tabs'});
        else
            this.setState({view: 'list'});
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
                    <CourseGrid/>
                    </div>
                </div>
            )
        }
    }

    renderCourseRow(){
        var courses = this.state.courses.map(
            (course, index) => {

                // if(this.state.view === 'list')
                    return <CourseRow key={index} course={course}  />
                // else
                //     return <CourseCard key={index} course={course}/>
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
                        <th width="60%"><input
                                               className="form-control"
                                               id="titleFld"
                                               placeholder="cs101"/></th>
                            <th width="70%" className='pull-right'>
                                <button
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