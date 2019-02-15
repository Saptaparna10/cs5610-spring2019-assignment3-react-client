import courses from '../resources/courses.json'
import * as constants from "./../constants/index"

class CourseService {
    constructor() {
        this.courses = courses;
    }

    addCourse(course){
        if(course==null || course=='' || course.title === '') {
            alert('Course name cannot be empty')
        }
        if(course.title=="")
            course.title = 'New course'
        //course.id = (new Date()).getTime()
        return fetch(constants.BASE_URL+'/api/courses', {
            method : 'post',
            'credentials': 'include',
            body : JSON.stringify(course),
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            if(response.headers.get("content-type")!=null) {
                return response.json();
            }
            else {
                alert('No active session found')
                return null;
            }
        })
    }

    // findCourseById = courseId =>
    //     this.course = this.courses.find(
    //         course => course.id == courseId
    //     )
    findCourseById(courseId, callback){
        return fetch(constants.BASE_URL+'/api/courses/'+ courseId,{
                'credentials': 'include'
            }
            )
            .then(function (response) {
                if(response.headers.get("content-type")!=null)
                    return response.json();
                else return null;
            }).then(callback);
    }


    // findAllCourses = () =>
    //     this.courses;
    findAllCourses(){
        return fetch(constants.BASE_URL+'/api/courses',{
                'credentials': 'include'
            }
            )
            .then(function (response) {
                if(response.headers.get("content-type")!=null) {
                    return response.json();
                }
                else {
                    alert('No active session found')
                    return null;
                }
            });
    }

    // deleteCourse = deleteCourse =>
    //     this.courses = this.courses.filter(
    //         course => course.id !== deleteCourse.id
    //     )
    deleteCourse(deleteCourse){
        return fetch(constants.BASE_URL + '/api/courses/' + deleteCourse.id, {
            'credentials': 'include',
            method: 'delete'
        }).then(function (response) {
            if(response.headers.get("content-type")!=null) {
                return response.json();
            }
            else {
                alert('No active session found')
                return null;
            }
        })
    }

    updateCourse = (selectedCourse, newCourse) => {
        // var foundIndex =  this.courses.findIndex(x => x.id == selectedCourse.id);
        // selectedCourse.title = newCourse.title;
        // this.courses[foundIndex] = selectedCourse;
        // return this.courses
        if(newCourse==null || newCourse=='' || newCourse.title === '') {
            alert('Course name cannot be empty')
        }
        if(newCourse.title=="")
            newCourse.title = 'New course'

        selectedCourse.title = newCourse.title
        return fetch(constants.BASE_URL + '/api/courses/' + selectedCourse.id, {
            'credentials': 'include',
            method: 'put',
            body: JSON.stringify(selectedCourse),
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            if(response.headers.get("content-type")!=null) {
                return response.json();
            }
            else {
                alert('No active session found')
                return null;
            }
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