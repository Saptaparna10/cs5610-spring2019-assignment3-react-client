import courses from '../resources/courses.json'
import * as constants from "./../constants/index"

class CourseService {
    constructor() {
        this.courses = courses;
    }
    // addCourse = course => {
    //     if(course === null) {
    //         course = {
    //             id :(new Date()).getTime(),
    //                 title:'New Course',
    //                 modules:[{
    //                 title: '',
    //                 lessons: [{
    //                     title:'',
    //                     topics:[{
    //                         title:''
    //                     }]
    //                 }]
    //             }]
    //         }
    //
    //     }
    //     course.id = (new Date()).getTime()
    //     this.courses.push(course)
    //     return this.courses
    // }

    addCourse(course){
        //course.id = (new Date()).getTime()
        return fetch(constants.BASE_URL+'/api/courses', {
            method : 'post',
            body : JSON.stringify(course),
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

    // findCourseById = courseId =>
    //     this.course = this.courses.find(
    //         course => course.id == courseId
    //     )
    findCourseById(courseId, callback){
        return fetch(constants.BASE_URL+'/api/courses/'+ courseId)
            .then(function (response) {
                if(response.headers.get("content-type")!=null)
                    return response.json();
                else return null;
            }).then(callback);
    }


    // findAllCourses = () =>
    //     this.courses;
    findAllCourses(){
        return fetch(constants.BASE_URL+'/api/courses')
            .then(function (response) {
                return response.json();
            });
    }

    // deleteCourse = deleteCourse =>
    //     this.courses = this.courses.filter(
    //         course => course.id !== deleteCourse.id
    //     )
    deleteCourse(deleteCourse){
        return fetch(constants.BASE_URL + '/api/courses/' + deleteCourse.id, {
            method: 'delete'
        }).then(function (response) {
            return response;
        })
    }

    updateCourse = (selectedCourse, newCourse) => {
        // var foundIndex =  this.courses.findIndex(x => x.id == selectedCourse.id);
        // selectedCourse.title = newCourse.title;
        // this.courses[foundIndex] = selectedCourse;
        // return this.courses
        selectedCourse.title = newCourse.title
        return fetch(constants.BASE_URL + '/api/courses/' + selectedCourse.id, {
            method: 'put',
            body: JSON.stringify(selectedCourse),
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            return response;
        })
    }

    /** WIDGETS **/

    findAllWidgetsForTopic = (courseId, moduleId, lessonId, topicId) => {
        var course = this.courses.find(
            course => course.id == courseId
        );
        var module = course.modules.find(
            module => module.id === moduleId
        );
        var lesson = module.lessons.find(
            lesson => lesson.id === lessonId
        );
        var topic = lesson.topics.find(
            topic => topic.id === topicId
        );
        return topic.widgets;
    }

    sort(jsonObj) {

        jsonObj.sort(function (p, q) {
            return p.orderOfWidget - q.orderOfWidget;
        });

        return jsonObj;
    }

    deleteWidget = (widgets, id) =>
         widgets.filter(w =>
            w.id !== id
        )


}
export default CourseService