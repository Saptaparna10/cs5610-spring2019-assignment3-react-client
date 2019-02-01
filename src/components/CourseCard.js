import React from 'react';
import {Link} from 'react-router-dom';

export default class CourseCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.course.title}
                    </h5>
                    <p className="card-text">
                        card texts
                    </p>
                    <Link className="btn btn-primary btn-block" to={`/course/${this.props.course.id}`}>Edit</Link>

                        <button className="btn btn-danger btn-block" onClick={() => {this.props.delete(this.props.course)}}>
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