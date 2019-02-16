import React from 'react'
import {Link} from 'react-router-dom'
import UserService from "../services/UserService";
import {withRouter} from "react-router-dom";

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user: {
                username: '',
                password : ''
            }

        }
        this.userService = new UserService();
        this.usernameChanged = this.usernameChanged.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.redirect = this.redirect.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    usernameChanged(event) {
        this.state.user.username = event.target.value
    }

    passwordChange(event) {
        this.state.user.password = event.target.value
    }

    login(){
        this.userService.login(this.state.user)
            .then((user) => {
                if(user!=null)
                    this.redirect(user)
                else
                    alert('Wrong username/password!')
            })
    }

    redirect(user){
        if(user!=null)
            this.props.history.push('/profile');
        else
            this.props.history.push('/');
    }

    register(){
        this.props.history.push('/register');
    }

    render(){
        return(
            <div className="container-fluid">
                <h1 className='welcome'>Welcome to Whiteboard</h1>
                <div>
                    &nbsp;
                </div>
                <div>
                    &nbsp;
                </div>

                <div>
                    &nbsp;
                </div>
                <div>
                    &nbsp;
                </div>
                <div>
                    <h2>Login</h2>
                </div>
                <div>
                    &nbsp;
                </div>
                <form className='wrap'>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   onChange={this.usernameChanged}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control wbdv-password-fld"
                                   id="password"
                                   onChange={this.passwordChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                                <button id="loginBtn" type="button" className="btn btn-info btn-block" onClick={this.login}>Sign in
                                </button>


                                    <button id="regBtn" type="button" className="btn btn-warning btn-block" onClick={this.register}>Sign up
                                    </button>
                    </div>
                </form>

            </div>
        )
    }

}

export default withRouter(Login);