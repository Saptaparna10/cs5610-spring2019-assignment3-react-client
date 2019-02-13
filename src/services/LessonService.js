import * as constants from "./../constants/index"

class LessonService {

    addLesson(mid, lesson){
        //course.id = (new Date()).getTime()
        return fetch(constants.BASE_URL+'/api/modules/'+mid+'/lessons', {
            method : 'post',
            body : JSON.stringify(lesson),
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

    findAllLessonsForModule(mid){
        return fetch(constants.BASE_URL+'/api/modules/'+mid+'/lessons')
            .then(function (response) {
                return response.json();
            });
    }

    deleteLesson(deleteLesson){
        return fetch(constants.BASE_URL + '/api/lessons/' + deleteLesson.id, {
            method: 'delete'
        }).then(function (response) {
            return response;
        })
    }

    updateLesson = (selectedLesson, newLesson) => {
        selectedLesson.title = newLesson.title
        return fetch(constants.BASE_URL + '/api/lessons/' + selectedLesson.id, {
            method: 'put',
            body: JSON.stringify(selectedLesson),
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            return response;
        })
    }

    findLessonById(lesId, callback){
        return fetch(constants.BASE_URL+'/api/lessons/'+ lesId)
            .then(function (response) {
                if(response.headers.get("content-type")!=null)
                    return response.json();
                else return null;
            }).then(callback);
    }

}

export default LessonService