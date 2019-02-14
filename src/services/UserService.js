import * as constants from "./../constants/index"

class UserService {

    login(user, callback){
        return fetch(constants.BASE_URL+'/api/login',{
            method:'POST',
            body:JSON.stringify(user),
            'credentials': 'include',
            headers:{
                'content-type':'application/json'
            }
        }).then(function (response) {
            if(response.headers.get("content-type")!=null) {
                return response.json();
            }
            else {
                alert('Wrong username/password!')
                return null;
            }
        }).then(callback);
    }

    register(user, callback){
        return fetch(constants.BASE_URL+'/api/register',{
            method:'POST',
            body:JSON.stringify(user),
            'credentials': 'include',
            headers:{
                'content-type':'application/json'
            }
        }).then(function (response) {
            if(response.headers.get("content-type")!=null) {
                return response.json();
            }
        }).then(callback);
    }

    profile(){
        return fetch(constants.BASE_URL+'/api/profile',{
            'credentials': 'include'
        })
        .then(function (response) {
            if(response.headers.get("content-type")!=null) {
                return response.json();
            }
        })
    }

    logout(){
        return fetch(constants.BASE_URL+'/api/logout',{
            method:'POST',
            'credentials': 'include'
        })
            .then(function (response) {
                if(response.headers.get("content-type")!=null) {
                    return response.json();
                }
            })
            .catch(err => {
                console.log('err'+ err)
            })
    }
}

export default UserService