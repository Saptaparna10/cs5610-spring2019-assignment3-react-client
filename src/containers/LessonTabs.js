import React from 'react'
import {Link} from "react-router-dom";
import LessonTabItem from '../components/LessonTabItem'

export default class LessonsTabs
    extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedLesson: 0,
            module: this.props.module,
            moduleId: this.props.moduleId,
            courseId: this.props.courseId,
            lesson: {title: ''},
            lessons: this.props.lessons
        }

        this.selectLesson = this.selectLesson.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setLessonTitle = this.setLessonTitle.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
    }

    setModuleId(moduleId){
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setLessonTitle(event){
        this.setState({
            lesson: {
                title: event.target.value
            }
        });
    }

    selectLesson(lessonIndex){
        this.setState({selectedLesson: lessonIndex});
    }


    createLesson(){

        this.setState(
            {
                lessons: [
                    ...this.state.lessons,
                    this.state.lesson
                ]
            }
        )
    }

    deleteLesson(lesson){
        // this.lessonService.deleteLesson(lessonId)
        //     .then(() => {
        //         this.findAllLessonsForModule(this.state.moduleId, this.state.courseId)
        //     });
        var removeIndex = this.state.lessons.map(function(item) { return item.title; }).indexOf(lesson.title);

        this.state.lessons.splice(removeIndex, 1);
    }

    renderLessons(){
        let lessons = this.props.lessons.map((lesson, index) => {
            let active = this.props.selectedLesson === index ? 'active' : '';
            return (
                <LessonTabItem key={index}
                               position={index}
                               moduleId={this.props.moduleId}
                               courseId={this.props.courseId}
                               active={active}
                               lesson={lesson}
                               select={this.selectLesson}
                               delete={this.deleteLesson}
                />
            )
        });

            return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="nav nav-tabs" id='nav-tab' role='tablist'>
                            {lessons}

                        </div>
                        <div className="input-group mb-3">
                            <input className='form-control'
                                   onChange={this.setLessonTitle}
                                   placeholder='Lesson Name'/>
                            <div>
                                <button onClick={this.createLesson} className="btn btn-primary btn-block">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>);

    }

    render() {
        return (
                <ul className="nav nav-tabs justify-content-end">
                    {this.renderLessons()}
                </ul>
        );
    }
}