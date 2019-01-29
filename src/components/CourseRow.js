import React from 'react'
import {Link} from 'react-router-dom';
import CourseService from "../services/CourseService";

export default class CourseRow extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <tr>
                <td> <i className='fa fa-file-text'>&nbsp;</i></td>
                <td>
                    <Link to={`/course/${this.props.course.id}`}>
                        {this.props.course.title}</Link>
                </td>
                <td>me</td>
                <td>6:45 PM</td>
                <td><button className="btn btn-danger">
                    <i className="fa fa-trash"></i>
                </button></td>
            </tr>
        )
    }
}
