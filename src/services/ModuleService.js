import * as constants from "./../constants/index"

class ModuleService {

    addModule(cid, module){
        //course.id = (new Date()).getTime()
        if(module==null || module=="" || module.title === '')
            alert('Module name cannot be empty')

        if(module.title=='')
            module.title = 'New Module'

        return fetch(constants.BASE_URL+'/api/courses/'+cid+'/modules', {
            'credentials': 'include',
            method : 'post',
            body : JSON.stringify(module),
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

    findAllModulesForCourse(cid){
        return fetch(constants.BASE_URL+'/api/courses/'+cid+'/modules',{
            'credentials': 'include'
        })
            .then(function (response) {
                return response.json();
            });
    }

    deleteModule(deleteModule){
        return fetch(constants.BASE_URL + '/api/modules/' + deleteModule.id, {
            'credentials': 'include',
            method: 'delete'
        }).then(function (response) {
            return response;
        })
    }

    updateModule = (selectedModule, newModule) => {
        // var foundIndex =  this.courses.findIndex(x => x.id == selectedCourse.id);
        // selectedCourse.title = newCourse.title;
        // this.courses[foundIndex] = selectedCourse;
        // return this.courses
        if(newModule==null || newModule=="" || newModule.title === '')
            alert('Module name cannot be empty')

        if(newModule.title=='')
            newModule.title = 'New Module'

        selectedModule.title = newModule.title
        return fetch(constants.BASE_URL + '/api/modules/' + selectedModule.id, {
            'credentials': 'include',
            method: 'put',
            body: JSON.stringify(selectedModule),
            headers: {'Content-Type': 'application/json'}
        }).then(function (response) {
            return response;
        })
    }

    findModuleById(modId, callback){
        return fetch(constants.BASE_URL+'/api/modules/'+ modId,{
            'credentials': 'include'
        })
            .then(function (response) {
                if(response.headers.get("content-type")!=null)
                    return response.json();
                else return null;
            }).then(callback);
    }


}

export default ModuleService