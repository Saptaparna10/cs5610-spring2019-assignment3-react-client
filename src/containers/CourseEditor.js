import React from 'react';
import CourseService from '../services/CourseService'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import TopicPills from '../components/TopicPills'
import WidgetList from "./WidgetList";
import {Link} from "react-router-dom";

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
            module: course.modules[0],
            lesson: course.modules[0].lessons[0],
            topic: course.modules[0].lessons[0].topics[0]
        }

    }


    selectModule = module => {
        console.log(module)
        this.setState({
            module: module
        })
    }

    selectLesson = lesson =>
        this.setState({
            lesson: lesson
        })

    selectTopic = topic =>
        this.setState({
            topic: topic
        })

    render(){
        return (
            <div>
                <div className="row bg-dark">

                    <h2> <Link to={`/courses`}>
                        <i className="fa fa-times"  aria-hidden="true"></i>
                    </Link> Course Editor: {this.state.course.title}</h2>
                </div>
                <div className="row">
                    <div className="col-md-4 bg-dark longcol d-none d-md-block ">
                            <ModuleList
                                modules={this.state.course.modules}
                                course={this.state.course}
                                courseId={this.state.course.id}
                                selectModule={this.selectModule}
                            />

                    </div>
                        <div className="col-md-8">
                            <div>&nbsp;</div>
                            <LessonTabs
                                    lessons={this.state.module.lessons}
                                    moduleid={this.state.module.id}
                                    courseId={this.state.course.id}
                                    selectLesson={this.selectLesson}
                            />
                            <div>&nbsp;</div>
                            <TopicPills
                                courseId={this.state.course.id}
                                moduleId={this.state.module.id}
                                lessons={this.state.module.lessons}
                                topic={this.state.topic}
                                topics={this.state.lesson.topics}
                                selectTopic={this.selectTopic}
                            />
                            <div>&nbsp;</div>

                            <div className="row">

                                <div className="col text-right">
                                        <button className="btn btn-success">Save</button>
                                        <i className="fa fa-w-2 fa-toggle-on" aria-hidden="true"></i>
                                        Preview
                                </div>

                            </div>
                            <div>
                                &nbsp;
                            </div>
                            <WidgetList/>
                        </div>

                </div>

            </div>
        )
    }
}


