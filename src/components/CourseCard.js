import React from 'react';
import {Link} from 'react-router-dom';

export default class CourseCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.course.title}
                    </h5>
                    <p className="card-text">
                        Created: {this.props.course.created}
                    </p>

                        <button className="btn btn-danger btn-block">
                            <i className='fa fa-trash'></i>
                        </button>
                </div>
                <div className='card-footer'>
                    <small className="text-muted">Last modified 6:45 PM</small>
                    <i className='fa fa-file-text pull-right'>&nbsp;</i>
                </div>
            </div>
        )
    }

}