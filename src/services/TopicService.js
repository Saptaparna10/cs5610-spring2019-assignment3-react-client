import * as constants from "./../constants/index"

class TopicService {

    addTopic(lid, topic){
        if(topic==null || topic=='' || topic.title === '')
            alert('Topic name cannot be empty')

        if(topic.title=='')
            topic.title = 'New Topic'

        //course.id = (new Date()).getTime()
        return fetch(constants.BASE_URL+'/api/lessons/'+lid+'/topics', {
            'credentials': 'include',
            method : 'post',
            body : JSON.stringify(topic),
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

    findAllTopicsForLesson(lid){
        return fetch(constants.BASE_URL+'/api/lessons/'+lid+'/topics',{
            'credentials': 'include'
        })
            .then(function (response) {
                return response.json();
            });
    }

    deleteTopic(deleteTopic){
        return fetch(constants.BASE_URL + '/api/topics/' + deleteTopic.id, {
            'credentials': 'include',
            method: 'delete'
        }).then(function (response) {
            return response;
        })
    }

    updateTopic = (selectedTopic, newTopic) => {
        // var foundIndex =  this.courses.findIndex(x => x.id == selectedCourse.id);
        // selectedCourse.title = newCourse.title;
        // this.courses[foundIndex] = selectedCourse;
        // return this.courses

        if(newTopic==null || newTopic=='' || newTopic.title === '')
            alert('Topic name cannot be empty')

        if(newTopic.title=='')
            newTopic.title = 'New Topic'

        selectedTopic.title = newTopic.title
        return fetch(constants.BASE_URL + '/api/topics/' + selectedTopic.id, {
            'credentials': 'include',
            method: 'put',
            body: JSON.stringify(selectedTopic),
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            return response;
        })
    }

    findTopicById(topId, callback){
        return fetch(constants.BASE_URL+'/api/topics/'+ topId),{
            'credentials': 'include'
        }
            .then(function (response) {
                if(response.headers.get("content-type")!=null)
                    return response.json();
                else return null;
            }).then(callback);
    }


}

export default TopicService