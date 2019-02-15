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
                password : '',
                firstName : '',
                lastName : '',
                role : 'Faculty'
            }

        }
        this.userService = new UserService();
        this.usernameChanged = this.usernameChanged.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.firstNameChanged = this.firstNameChanged.bind(this);
        this.lastNameChanged = this.lastNameChanged.bind(this);
        this.roleChanged = this.roleChanged.bind(this);

        this.register = this.register.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    usernameChanged(event) {
        this.state.user.username = event.target.value
    }

    passwordChanged(event) {
        this.state.user.password = event.target.value
    }
    firstNameChanged(event) {
        this.state.user.firstName = event.target.value
    }

    lastNameChanged(event) {
        this.state.user.lastName = event.target.value
    }
    roleChanged(event) {
        const user = this.state.user
        user.role = event.target.value
        this.setState({user: user})
    }

    register(){
        this.userService.register(this.state.user, this.redirect);
    }

    redirect(user){
        if(user!=null) {
            this.props.history.push('/');
        }
        else
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
                    &nbsp;
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
                                   onChange={this.passwordChanged}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            First Name </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="firstName"
                                   onChange={this.firstNameChanged}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Last Name </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="lastName"
                                   onChange={this.lastNameChanged}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Role </label>
                        <div className="col-sm-10">
                            <select onChange={this.roleChanged} value={this.state.user.role}>
                                <option value="Faculty">Faculty</option>
                                <option value="Student">Student</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>

                        <button id="regBtn" type="button" className="btn btn-info btn-block" onClick={this.register}>Sign up
                        </button>
                        <button id="loginBtn" type="button" className="btn btn-warning btn-block" onClick={() => {this.props.history.push('/')}}>Already registered? Sign in
                        </button>
                    </div>
                </form>

            </div>
        )
    }

}

export default withRouter(Login);