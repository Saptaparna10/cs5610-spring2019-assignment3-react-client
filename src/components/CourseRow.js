import React from 'react'
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
                    {this.props.course.title}
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
