import * as constants from "./../constants/index"
import React from "react";

class UserService {

    login(user){
        if(user.username == '')
            alert('username cannot be empty')
        if(user.password == '')
            alert('password cannot be empty')
        
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
                return null;
            }
        }).catch(err => {
            console.log(err)
            return null;
        })
    }

    register(user, callback){
        if(user.username == '')
            alert('username cannot be empty')
        if(user.password == '')
            alert('password cannot be empty')

        return fetch(constants.BASE_URL+'/api/register',{
            method:'POST',
            body:JSON.stringify(user),
            'credentials': 'include',
            headers:{
                'content-type':'application/json'
            }
        }).then(function (response) {
            if(response.headers.get("content-type")!=null) {
                alert('Registration successful. Please log in to view courses!')
                return response.json();
            }
            else{
                alert('username already taken')
            }

        }).catch(err => {
            console.log(err)
        })
            .then(callback);
    }

    profile(){
        return fetch(constants.BASE_URL+'/api/profile',{
            'credentials': 'include'
        })
        .then(function (response) {
            if(response.headers.get("content-type")!=null) {
                return response.json();
            }
            else{
                return null
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