// export default class TopicPills
//     extends React.Component {
//     render() {
//         return(
//             <ul className="nav nav-pills">
//                 <li className="nav-item">
//                     <a className="nav-link active"
//                        href="#">Topic 1</a></li>
//                 <li className="nav-item ">
//                     <a className="nav-link"
//                        href="#">Topic 2</a></li></ul>
//         );}}

import React from 'react'
import {Link, Route} from 'react-router-dom'

export default class TopicPills extends React.Component{

    constructor(props){
        super(props);
        this.setModuleId = this.setModuleId.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
        this.state={
            moduleId: this.props.moduleId,
            courseId: this.props.courseId,
            lessonId: '',
            lessons: this.props.lessons,
            topic: this.props.topic,
            topics: this.props.topics,
            selectedTopic: 0
        }
    }

    setModuleId(moduleId){
        this.setState({moduleId: moduleId});
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    setTopics(topics){
        this.setState({topics: topics});
    }

    selectTopic = index => {
        this.setState({selectedTopic: index})
    }

    findAllTopicsForLesson(lessonId, moduleId, courseId){
        // this.topicService.findAllTopicsForLesson(lessonId, moduleId, courseId)
        //     .then((topics) => {
        //         this.setTopics(topics);
        //     })
    }

    titleChanged(event) {
        this.setState({topic: {title : event.target.value}});
    }

    createTopic(){
        this.setState(
            {
                topics: [
                    ...this.state.topics,
                    this.state.topic
                ]
            }
        )
    }

    deleteTopic(topic) {
        var removeIndex = this.state.topics.map(function(item) { return item.title; }).indexOf(topic.title);

        this.state.topics.splice(removeIndex, 1);
    }

    renderTopics() {
        let topics = this.state.topics.map((topic, i) => {
            let active = i === this.state.selectedTopic ? 'active' : '';
            return (
                <Link
                    to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${topic.id}`}>
                    <li className="nav-item"
                        onClick={() => this.selectTopic(i)}
                        key={i}>
                        <a className={`nav-link ${active}`}>
                            {topic.title}
                                <i className='fa fa-times ml-2' onClick={() => this.deleteTopic(topic)}/>
                        </a>
                    </li>
                </Link>
            )
        });

        return (
                <div className='container-fluid'>
                    <div className='row'>
                        {topics}
                        <div className="input-group input-group mb-3">
                            <input className='form-control'
                                   onChange={this.titleChanged}
                                   placeholder='Topic'/>
                            <div>
                                <button className='btn btn-primary'
                                        onClick={this.createTopic}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>);


        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className="input-group mt-2 mb-2">
                        <input className='form-control'
                               onChange={this.titleChanged}
                               placeholder='Topic'/>
                        <div>
                            <button className='btn btn-primary'
                                    onClick={this.createTopic}>
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>);
    }


    render() {
        return(
            <div>
                <ul className="nav nav-pills nav-justified">
                    {this.renderTopics()}
                </ul>
            </div>
        )
    }
}
