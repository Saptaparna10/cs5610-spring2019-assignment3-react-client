import React from 'react';
import CourseService from '../services/CourseService'
import ModuleList from './ModuleList'
import LessonTabs from './LessonTabs'
import TopicPills from './TopicPills'
import {Link, withRouter} from "react-router-dom";

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {widgetReducer} from './../reducers/WidgetReducer';
import App from './../containers/WidgetList';
import WidgetListContainer from '../containers/WidgetListContainer'
import Toggle from "react-toggle";
import ModuleService from "../services/ModuleService";
import LessonService from "../services/LessonService";
import TopicService from "../services/TopicService";
import UserService from "../services/UserService";
import WidgetListStatic from '../components/WidgetListStatic'

class CourseEditor
    extends React.Component{

    constructor(props){
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.populateTitle = this.populateTitle.bind(this);
        this.profile = this.profile.bind(this);
        this.logout = this.logout.bind(this);
        this.userService = new UserService();
        this.courseService = new CourseService();
        this.ModuleService = new ModuleService();
        this.LessonService = new LessonService();
        this.TopicService = new TopicService();

        this.state = {
            courseId:'',
            course:{
                modules:[{
                    title: '',
                    lessons: [{
                        title:'',
                        topics:[{
                            title:''
                        }]
                    }]
                }]
            },
            modules:[],
            newModule:'',
            module:'',
            lessons:[],
            newLesson:'',
            lesson:'',
            topics:[],
            newTopic:'',
            topic:'',
            widgets:[]
        };

        this.findAllModulesForCourse = this.findAllModulesForCourse.bind(this);
        this.moduleTitleChanged = this.moduleTitleChanged.bind(this);
        this.selectModule = this.selectModule.bind(this);
        this.populateModule = this.populateModule.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.editModule = this.editModule.bind(this);
        this.updateModule = this.updateModule.bind(this);

        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.lessonTitleChanged = this.lessonTitleChanged.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
        this.populateLesson = this.populateLesson.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.editLesson = this.editLesson.bind(this);
        this.updateLesson = this.updateLesson.bind(this);

        this.findAllTopicsForLesson = this.findAllTopicsForLesson.bind(this);
        this.topicTitleChanged = this.topicTitleChanged.bind(this);
        this.selectTopic = this.selectTopic.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
        this.editTopic = this.editTopic.bind(this);
        this.updateTopic = this.updateTopic.bind(this);
    }


    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }
    componentWillReceiveProps(newProps){
        this.selectCourse
        (newProps.match.params.courseId);
    }

    profile(){
        this.userService.profile()
            .then(() => {
                this.props.history.push('/profile')
            })
    }

    logout(){
        this.userService.logout()
            .then(() => {
                this.props.history.push('/')
            })
    }


    selectCourse(courseId) {
        this.setState({courseId:courseId});
        if(courseId!=null && courseId!='')
            this.courseService.findCourseById(courseId, this.populateTitle);

    }

    populateTitle(course) {
        this.setState({course: course});
        this.setState({modules: course.modules});

        if(course.modules!=null && course.modules.length>0) this.setState({module: course.modules[0],
                                                                            lessons: course.modules[0].lessons});
        if(this.state.lessons!=null && this.state.lessons.length>0) this.setState({topics: this.state.lessons[0].topics})
        if(this.state.topics!=null && this.state.topics.length>0) this.setState({topic: this.state.topics[0]})
        if(this.state.topic.widgets!=null && this.state.topics.widgets>0) this.setState({widgets: this.state.topic.widgets})

        //document.getElementById('form1').style.display="none";
        //document.getElementById('title').style.display='';
        console.log(this.state.course);

    }

    /** ---------Modules-----------**/

    moduleTitleChanged = (event) => {
        this.setState(
            {
                newModule: {
                    //id: (new Date()).getTime(),
                    title: event.target.value,
                    //lessons: []
                }

            });
    }


    selectModule = module => {
        this.setState({
            module: module})
            //topic: module.lessons[0].topics[0],
            //widgets: module.lessons[0].topics[0].widgets

        if(module!=null)
            this.ModuleService.findModuleById(module.id, this.populateModule);
    }

    populateModule(module) {
        //document.getElementById('form1').style.display="none";
        //document.getElementById('title').style.display='';
        if(module.lessons!=null && module.lessons.length>0)
            this.setState({ lesson: module.lessons[0]})
        this.setState({lessons: module.lessons});

        if(this.state.lesson!=null){
            this.setState({
                topics: this.state.lesson.topics})
        }


        if(this.state.lesson!=null && this.state.lesson.topics!=null && this.state.lesson.topics.length>0){
            this.setState({
                topic: this.state.lesson.topics[0]})
        }
        else{
            this.setState({
                topic: ''})
        }

        if(this.state.topic!=null && this.state.topic.widgets!=null && this.state.topic.widgets.length>0){
            this.setState({
                widgets: this.state.topic.widgets})
        }
        else{
            this.setState({
                widget: ''})
        }
    }

    createModule = () => {
        // var course = this.state.course;
        // course.modules.push(this.state.newModule);
        // document.getElementById('modTitle').value=''
        // this.setState({
        //     course: course
        // })
        this.ModuleService
            .addModule(this.state.course.id, this.state.newModule)
            .then(() => {this.findAllModulesForCourse(); })
            .then(() => {document.getElementById('modTitle').value=''})
    }

    deleteModule = dm =>{
        // var removeIndex = this.state.course.modules.map(function(item) { return item.title; }).indexOf(dm.title);
        // this.state.course.modules.splice(removeIndex, 1);
        this.ModuleService
            .deleteModule(dm)
            .then(() => {this.findAllModulesForCourse(); })
    }

    editModule(module){
        var modTitle = document.getElementById('modTitle');
        modTitle.value= module.title;
        this.setState({module: module});
    }

    updateModule(){
        // var moduleInd = this.state.course.modules.findIndex(x => x.id == this.state.module.id)
        // this.state.module.title = this.state.newModule.title
        // this.state.course.modules[moduleInd] = this.state.module
        // document.getElementById('modTitle').value=''
        // this.setState({module: this.state.module});
        this.ModuleService
            .updateModule(this.state.module, this.state.newModule)
            .then(() => {this.findAllModulesForCourse(); })
            .then(() => {document.getElementById('modTitle').value=''})
    }

    findAllModulesForCourse(){
        this.ModuleService.findAllModulesForCourse(this.state.courseId)
            .then((modules) => this.setState({modules: modules}))
            .then(() => this.setState({module: this.state.modules[0]}))
    }

    /** ---------Lessons-----------**/

    lessonTitleChanged(event){
        this.setState({
            newLesson: {
                //id: (new Date()).getTime(),
                title: event.target.value,
                //topics: []
            }
        });
    }

    selectLesson = lesson => {
        this.setState({
            lesson: lesson,
            //topic: lesson.topics[0],
            //widgets: lesson.topics[0].widgets
        })
        if(lesson!=null)
            this.LessonService.findLessonById(lesson.id, this.populateLesson);
    }

    populateLesson(lesson) {
        //document.getElementById('form1').style.display="none";
        //document.getElementById('title').style.display='';
        if(lesson.topics!=null && lesson.topics.length>0)
            this.setState({ topic: lesson.topics[0]})
        this.setState({topics: lesson.topics});
    }

    createLesson(){
        // var course = this.state.course;
        // this.state.module.lessons.push(this.state.newLesson);
        // document.getElementById('lessTitle').value=''
        // this.setState({
        //     course: course
        // })
        this.LessonService
            .addLesson(this.state.module.id, this.state.newLesson)
            .then(() => {this.findAllLessonsForModule(); })
            .then(() => {document.getElementById('lessTitle').value=''})
    }

    deleteLesson(lesson){
        // var removeIndex = this.state.module.lessons.map(function(item) { return item.title; }).indexOf(lesson.title);
        // this.state.module.lessons.splice(removeIndex, 1);
        this.LessonService
            .deleteLesson(lesson)
            .then(() => {this.findAllLessonsForModule(); })
    }

    editLesson(lesson){
        var lessTitle = document.getElementById('lessTitle');
        lessTitle.value= lesson.title;
        this.setState({lesson: lesson});
    }

    updateLesson(){
        // var lessInd = this.state.module.lessons.findIndex(x => x.id == this.state.lesson.id)
        // this.state.lesson.title = this.state.newLesson.title
        // this.state.module.lessons[lessInd] = this.state.lesson
        // document.getElementById('lessTitle').value=''
        // this.setState({lesson: this.state.lesson});
        this.LessonService
            .updateLesson(this.state.lesson, this.state.newLesson)
            .then(() => {this.findAllLessonsForModule(); })
            .then(() => {document.getElementById('lessTitle').value=''})
    }

    findAllLessonsForModule(){
        this.LessonService.findAllLessonsForModule(this.state.module.id)
            .then((lessons) => this.setState({lessons: lessons}))
                .then(() =>  this.setState({lesson: this.state.lessons[0]}))
    }

    /** ---------Topics-----------**/
    selectTopic = topic =>
        this.setState({
            topic: topic,
            widgets: topic.widgets
        })

    topicTitleChanged(event) {
        this.setState(
            {newTopic: {
                //id: (new Date()).getTime(),
                title : event.target.value
            }});
    }

    createTopic(){
        // var course = this.state.course;
        // this.state.lesson.topics.push(this.state.newTopic);
        // document.getElementById('topTitle').value=''
        // this.setState({
        //     course: course
        // })
        this.TopicService
            .addTopic(this.state.lesson.id, this.state.newTopic)
            .then(() => {this.findAllTopicsForLesson(); })
            .then(() => {document.getElementById('topTitle').value=''})
    }

    deleteTopic(topic) {
        // var removeIndex = this.state.lesson.topics.map(function(item) { return item.title; }).indexOf(topic.title);
        // this.state.lesson.topics.splice(removeIndex, 1);
        this.TopicService
            .deleteTopic(topic)
            .then(() => {this.findAllTopicsForLesson(); })
    }

    editTopic(topic){
        var topTitle = document.getElementById('topTitle');
        topTitle.value= topic.title;
        this.setState({topic: topic});
    }

    updateTopic(){
        // var topInd = this.state.lesson.topics.findIndex(x => x.id == this.state.topic.id)
        // this.state.topic.title = this.state.newTopic.title
        // this.state.lesson.topics[topInd] = this.state.topic
        // document.getElementById('topTitle').value=''
        // this.setState({topic: this.state.topic});
        this.TopicService
            .updateTopic(this.state.topic, this.state.newTopic)
            .then(() => {this.findAllTopicsForLesson(); })
            .then(() => {document.getElementById('topTitle').value=''})
    }

    findAllTopicsForLesson(){
        this.TopicService.findAllTopicsForLesson(this.state.lesson.id)
            //.then((topics) => this.setState({topics: topics}))
            //.then(() => this.setState({topic: this.state.topics[0]}))
            .then((topics) => this.setState({topics: topics,
                topic: this.state.topics[0]
            }))
    }

    /**----------Widgets-------------**/

    deleteWidget(widget) {
        var removeIndex = this.state.topic.widgets.map(function(item) { return item.id; }).indexOf(widget.id);
        this.state.topic.widgets.splice(removeIndex, 1);
        this.setState({widgets: this.state.topic.widgets})
    }

    /**------------Render--------------**/
    render(){
        console.log('---'+ this.state.topic.id)
        let initialState = {
            widgets: this.state.widgets,

            //preview: false,
            //nonUniqueName: false,
            // courseId: this.state.course.id,
            // moduleId: this.state.module.id,
            // lessonId: this.state.lesson.id,
            topicId: this.state.topic.id
            //widgets:[]
        }

        const store = createStore(widgetReducer, initialState);
        //const store = createStore(widgetReducer);

        return (
            <div>
                <div className="row bg-dark">

                    <Link to={`/courses`}>
                        <button className="btn btn-dark btn-block"><i className="fa fa-times"  aria-hidden="true"></i></button>
                    </Link>
                    <a href='#' className='logo'> Course Editor: {this.state.course.title}</a>

                </div>


                <div className="row longcol">
                    <div className="col-md-4 bg-dark d-none d-md-block " >
                            <ModuleList
                                courseId={this.state.course.id}
                                selectModule={this.selectModule}
                                titleChanged={this.moduleTitleChanged}
                                createModule={this.createModule}
                                deleteModule={this.deleteModule}
                                editModule={this.editModule}
                                updateModule={this.updateModule}
                                modules={this.state.modules}
                            />

                    </div>
                        <div className="col-md-8">
                            <div>&nbsp;</div>
                            <span className='pull-right'>
                                <button onClick={this.profile}
                                        className='btn btn-info'
                                        id='profile'>
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </button>

                                <button
                                    onClick={this.logout}
                                    className='btn btn-danger'
                                    id='toggleBtn'>
                                    <i className='fa fa-power-off'></i>
                                </button>

                            </span>
                            <div>&nbsp;</div>
                            <div>&nbsp;</div>

                            <div>
                                &nbsp;
                            </div>
                            {(this.state.modules != null && this.state.modules !== null && this.state.modules.length > 0) ?
                            <LessonTabs
                                    moduleid={this.state.module.id}
                                    courseId={this.state.course.id}
                                    selectLesson={this.selectLesson}
                                    titleChanged={this.lessonTitleChanged}
                                    createLesson={this.createLesson}
                                    deleteLesson={this.deleteLesson}
                                    updateLesson={this.updateLesson}
                                    editLesson={this.editLesson}
                                    lessons={this.state.lessons}

                            />:null}

                            <div>&nbsp;</div>

                            {(this.state.lessons != null && this.state.lessons !== null && this.state.lessons.length > 0) ?
                            <TopicPills
                                courseId={this.state.course.id}
                                moduleId={this.state.module.id}
                                lessonId={this.state.lesson.id}
                                topics={this.state.topics}
                                selectTopic={this.selectTopic}
                                titleChanged={this.topicTitleChanged}
                                createTopic={this.createTopic}
                                deleteTopic={this.deleteTopic}
                                updateTopic={this.updateTopic}
                                editTopic={this.editTopic}
                            />:null}

                            <div>&nbsp;</div>

                            {/*<div className="row">*/}

                                {/*<div className="col text-right">*/}
                                        {/*<button className="btn btn-success">Save</button>*/}
                                        {/*<i className="fa fa-w-2 fa-toggle-on" aria-hidden="true"></i>*/}
                                        {/*Preview*/}
                                {/*</div>*/}

                            {/*</div>*/}
                            {/*<div>*/}
                                {/*&nbsp;*/}
                            {/*</div>*/}
                            {/*<WidgetListStatic/>*/}

                                {/*<Provider store={store}>*/}
                                    {/*<App*/}
                                        {/*courseId={this.state.course.id}*/}
                                        {/*moduleId={this.state.module.id}*/}
                                        {/*lessonId={this.state.lesson.id}*/}
                                        {/*topicId={this.state.topic.id}*/}
                                        {/*widgets={this.state.widgets}/>*/}
                                {/*</Provider>*/}

                            <Provider store={store}>
                                <WidgetListContainer
                                // widgets={this.state.widgets}
                                 //topicId={this.state.topic.id}
                                // deleteWidget={this.deleteWidget}
                                />
                            </Provider>
                        </div>

                </div>

            </div>
        )
    }
}

export default withRouter(CourseEditor);


