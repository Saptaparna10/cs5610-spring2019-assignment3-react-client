import React from 'react';
import CourseService from '../services/CourseService'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import TopicPills from '../components/TopicPills'
import WidgetList from "./WidgetList";

export default class CourseEditor
    extends React.Component{

    constructor(props){
        // super(props);
        // this.selectCourse = this.selectCourse.bind(this);
        super(props)
        this.courseService = new CourseService()
        const courseId = parseInt(props.match.params.courseId)
        const course = this.courseService.findCourseById(courseId)
        this.state = {
            course: course,
            module: course.modules[0]
        }
    }


    selectModule = module =>
        this.setState({
            module: module
        })

    render(){
        return (
            <div className="container-fluid">
                <div className="row bg-dark">
                    <div>
                        <h2>Course Editor: {this.state.course.title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 bg-dark longcol">
                            <ModuleList
                                selectModule={this.selectModule}
                                modules={this.state.course.modules}
                                course={this.state.course}
                                courseId={this.state.course.id}
                            />

                    </div>
                        <div className="col-8 container-fluid">
                            <div>&nbsp;</div>
                            <LessonTabs
                                    lessons={this.state.module.lessons}
                                    moduleid={this.state.module.id}
                                    courseId={this.state.course.id}
                            />
                            <TopicPills/>
                            <div className="row">
                                <div className="col-sm-9"></div>
                                <div className="col-sm-1">
                                    <button className="btn btn-success">Save</button>
                                </div>
                                <div className="col-sm-2">
                                    <i className="fa fa-toggle-on" aria-hidden="true">Preview</i>
                                </div>

                            </div>
                            <WidgetList/>
                        </div>

                </div>

            </div>
        )
    }
}


