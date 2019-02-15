import * as constants from "./../constants/index"

class LessonService {

    addLesson(mid, lesson){
        if(lesson==null || lesson=='' || lesson.title === '')
            alert('Lesson name cannot be empty')

        if(lesson.title=='')
            lesson.title = 'New Lesson'

        //course.id = (new Date()).getTime()
        return fetch(constants.BASE_URL+'/api/modules/'+mid+'/lessons', {
            method : 'post',
            'credentials': 'include',
            body : JSON.stringify(lesson),
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

    findAllLessonsForModule(mid){
        return fetch(constants.BASE_URL+'/api/modules/'+mid+'/lessons',{
            'credentials': 'include'
        })
            .then(function (response) {
                return response.json();
            });
    }

    deleteLesson(deleteLesson){
        return fetch(constants.BASE_URL + '/api/lessons/' + deleteLesson.id, {
            'credentials': 'include',
            method: 'delete'
        }).then(function (response) {
            return response;
        })
    }

    updateLesson = (selectedLesson, newLesson) => {
        if(newLesson==null || newLesson=='' || newLesson.title === '')
            alert('Lesson name cannot be empty')

        if(newLesson.title=='')
            newLesson.title = 'New Lesson'

        selectedLesson.title = newLesson.title
        return fetch(constants.BASE_URL + '/api/lessons/' + selectedLesson.id, {
            'credentials': 'include',
            method: 'put',
            body: JSON.stringify(selectedLesson),
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            return response;
        })
    }

    findLessonById(lesId, callback){
        return fetch(constants.BASE_URL+'/api/lessons/'+ lesId, {
            'credentials': 'include'
        })
            .then(function (response) {
                if(response.headers.get("content-type")!=null)
                    return response.json();
                else return null;
            }).then(callback);
    }

}

export default LessonService