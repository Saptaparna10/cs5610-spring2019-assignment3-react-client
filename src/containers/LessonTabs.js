import React from 'react'
import {Link} from "react-router-dom";
import LessonTabItem from '../components/LessonTabItem'

// const LessonTabs = ({lessons}) =>
//     <ul className="nav nav-tabs">
//         {
//             lessons.map(lesson =>
//                 <li className='nav-item'>
//                     <div className='col-sm-12'>
//                         <Link to={`/course`}>
//                             <a className={'nav-link '}>
//                                 {lesson.title}
//
//                                 <i className="fa fa-times ml-2"/>
//                             </a>
//                         </Link>
//                     </div>
//                 </li>
//             )
//         }
//     </ul>
// export default LessonTabs

export default class LessonsTabs
    extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedLesson: 0,
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

    setLessons(lessons){
        this.setState({lessons : lessons})
    }

    selectLesson(lessonIndex){
        this.setState({selectedLesson: lessonIndex});
    }


    createLesson(){
        // this.lessonService.createLesson(this.state.courseId, this.state.moduleId, this.state.lesson)
        //     .then(() => {
        //         this.findAllLessonsForModule(this.state.moduleId, this.state.courseId);
        //     })
    }

    deleteLesson(lessonId){
        // this.lessonService.deleteLesson(lessonId)
        //     .then(() => {
        //         this.findAllLessonsForModule(this.state.moduleId, this.state.courseId)
        //     });
    }

    renderLessons(){
        let lessons = this.state.lessons.map((lesson, index) => {
            let active = this.state.selectedLesson === index ? 'active' : '';
            return (
                <LessonTabItem key={index}
                               position={index}
                               moduleId={this.state.moduleId}
                               courseId={this.state.courseId}
                               active={active}
                               lesson={lesson}
                               select={this.selectLesson}
                               delete={this.confirmDelete}
                               editable={this.props.editable}
                />
            )
        });

        if(this.state.showView){
            return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="nav nav-tabs" id='nav-tab' role='tablist'>
                            {lessons}
                            <li className='nav-item'>
                                <button className="btn btn-outline-info" onClick={() => {this.toggleAddLessonView()}}>
                                    <i className="fa fa-times"></i>
                                </button>
                            </li>
                        </div>
                        <div className="input-group mt-2 mb-2">
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
        }else {
            return (
                <div className="nav nav-tabs" id='nav-tab' role='tablist'>
                    {lessons}
                    {(this.props.editable)?
                        <li className='nav-item'>
                            <button className="btn btn-outline-info" onClick={() => {
                                this.toggleAddLessonView()
                            }}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </li>:null
                    }
                </div>);
        }

    }

    render() {
        return (
            <div className='container-fluid'>
                <ul className="nav nav-tabs">
                    {this.renderLessons()}
                </ul>
                <div className='tab-content'>
                    <Route path='/course/:courseId/module/:moduleId/lesson/:lessonId' component={LessonEditor}/>
                </div>
            </div>
        );
    }
}