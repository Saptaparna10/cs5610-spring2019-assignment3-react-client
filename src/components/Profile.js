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
                role : ''
            }

        }
        this.userService = new UserService();
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        this.userService.profile()
            .then((user) => {
                if(user!==null)
                    this.setState({user: user})
                else {
                    alert('no active session found')
                    this.props.history.push('/')
                }
            })
    }

    logout(){
        this.userService.logout()
            .then(() => {
                this.props.history.push('/')
            })
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
                    <h2>Profile</h2>
                </div>
                <div>
                    &nbsp;
                </div>
                <form className='wrap'>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            {this.state.user.username}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            {this.state.user.password}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            First Name </label>
                        <div className="col-sm-10">
                            {this.state.user.firstName}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Last Name </label>
                        <div className="col-sm-10">
                            {this.state.user.lastName}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Role </label>
                        <div className="col-sm-10">
                            {this.state.user.role}
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>

                        <button id="loginBtn" type="button" className="btn btn-info btn-block" onClick={() => {this.props.history.push('/courses')}}>Courses
                        </button>
                        <button id="loginBtn" type="button" className="btn btn-warning btn-block" onClick={this.logout}>Log out
                        </button>
                    </div>
                </form>

            </div>
        )
    }

}

export default withRouter(Login);