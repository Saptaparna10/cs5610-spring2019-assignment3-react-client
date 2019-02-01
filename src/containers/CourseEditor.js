import React from 'react';
import CourseService from '../services/CourseService'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills'
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
            newModule: '',
            lesson: course.modules[0].lessons[0],
            newLesson:'',
            topic: course.modules[0].lessons[0].topics[0],
            newTopic:''
        }
        this.moduleTitleChanged = this.moduleTitleChanged.bind(this);
        this.selectModule = this.selectModule.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);

        this.lessonTitleChanged = this.lessonTitleChanged.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);

        this.topicTitleChanged = this.topicTitleChanged.bind(this);
        this.selectTopic = this.selectTopic.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);

    }

    /** ---------Modules-----------**/

    moduleTitleChanged = (event) => {
        this.setState(
            {
                newModule: {
                    id: (new Date()).getTime(),
                    title: event.target.value,
                    lessons: []
                }

            });
    }


    selectModule = module => {
        this.setState({
            module: module
        })
    }

    createModule = () => {

        var course = this.state.course;
        course.modules.push(this.state.newModule);
        this.setState({
            course: course
        })
    }

    deleteModule = dm =>{
        var removeIndex = this.state.course.modules.map(function(item) { return item.title; }).indexOf(dm.title);
        this.state.course.modules.splice(removeIndex, 1);
    }

    /** ---------Lessons-----------**/

    lessonTitleChanged(event){
        this.setState({
            newLesson: {
                id: (new Date()).getTime(),
                title: event.target.value,
                topics: []
            }
        });
    }

    selectLesson = lesson =>
        this.setState({
            lesson: lesson
        })

    createLesson(){
        var course = this.state.course;
        this.state.module.lessons.push(this.state.newLesson);
        this.setState({
            course: course
        })
    }

    deleteLesson(lesson){
        var removeIndex = this.state.module.lessons.map(function(item) { return item.title; }).indexOf(lesson.title);
        this.state.module.lessons.splice(removeIndex, 1);
    }

    /** ---------Topics-----------**/
    selectTopic = topic =>
        this.setState({
            topic: topic
        })

    topicTitleChanged(event) {
        this.setState(
            {newTopic: {
                id: (new Date()).getTime(),
                title : event.target.value
            }});
    }

    createTopic(){
        var course = this.state.course;
        this.state.lesson.topics.push(this.state.newTopic);
        this.setState({
            course: course
        })
    }

    deleteTopic(topic) {
        var removeIndex = this.state.lesson.topics.map(function(item) { return item.title; }).indexOf(topic.title);
        this.state.lesson.topics.splice(removeIndex, 1);
    }

    /**------------Render--------------**/
    render(){
        return (
            <div>
                <div className="row bg-dark">

                    <Link to={`/courses`}>
                        <button className="btn btn-dark btn-block"><i className="fa fa-times"  aria-hidden="true"></i></button>
                    </Link>
                    <a href='#' className='logo'> Course Editor: {this.state.course.title}</a>
                </div>
                <div className="row">
                    <div className="col-md-4 bg-dark longcol d-none d-md-block ">
                            <ModuleList
                                courseId={this.state.course.id}
                                selectModule={this.selectModule}
                                titleChanged={this.moduleTitleChanged}
                                createModule={this.createModule}
                                deleteModule={this.deleteModule}
                                modules={this.state.course.modules}
                            />

                    </div>
                        <div className="col-md-8">
                            <div>&nbsp;</div>

                            <LessonTabs
                                    moduleid={this.state.module.id}
                                    courseId={this.state.course.id}
                                    selectLesson={this.selectLesson}
                                    titleChanged={this.lessonTitleChanged}
                                    createLesson={this.createLesson}
                                    deleteLesson={this.deleteLesson}
                                    lessons={this.state.module.lessons}

                            />

                            <div>&nbsp;</div>

                            <TopicPills
                                courseId={this.state.course.id}
                                moduleId={this.state.module.id}
                                lessonId={this.state.lesson.id}
                                topics={this.state.lesson.topics}
                                selectTopic={this.selectTopic}
                                titleChanged={this.topicTitleChanged}
                                createTopic={this.createTopic}
                                deleteTopic={this.deleteTopic}
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


