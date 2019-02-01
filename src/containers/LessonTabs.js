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

        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.select = this.select.bind(this);
    }

    setModuleId(moduleId){
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }


    select(lessonIndex){
        this.setState({selectedLesson: lessonIndex});
    }



    renderLessons(){
        let lessons = this.props.lessons.map((lesson, index) => {
            let active = this.state.selectedLesson === index ? 'active' : '';
            return (
                <LessonTabItem key={index}
                               position={index}
                               moduleId={this.props.moduleId}
                               courseId={this.props.courseId}
                               active={active}
                               lesson={lesson}
                               select={this.select}
                               selectLesson={this.props.selectLesson}
                               deleteLesson={this.props.deleteLesson}
                />
            )
        });

            return (
                <div>
                        <div className="nav nav-item">
                            {lessons}

                        </div>
                        <div className="input-group mb-3">
                            <input className='form-control'
                                   onChange={this.props.titleChanged}
                                   placeholder='Lesson Name'/>
                            <div>
                                <button onClick={this.props.createLesson} className="btn btn-primary btn-block">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                </div>);

    }

    render() {
        return (
                <ul className="nav nav-tabs flex-column">
                    {this.renderLessons()}
                </ul>
        );
    }
}