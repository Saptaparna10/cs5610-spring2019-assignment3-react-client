import React from 'react'
import {Link} from 'react-router-dom';

// const ModuleListItem = ({module, selectModule, deleteModule}) =>
//     <div onClick={() => selectModule(module)} className="list-group-item">
//         {module.title}
//         <i className="btn pull-right fa-2x fa fa-times ml-auto p-0" title="delete"
//            onClick={() => deleteModule(module)}></i>
//         <i className="btn float-right fa-2x fa fa-pencil ml-auto p-0" aria-hidden="true"></i>
//     </div>
//
// export default ModuleListItem;

export default class ModuleListItem
    extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <li className={'list-group-item list-group-item-action '+this.props.active}
                onClick={() => {this.props.select(this.props.position)
                    this.props.selectModule(this.props.module)}}>
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    <div id="moduleTitle"  style={{color: 'black'}}>{this.props.title}</div>
                </Link>

                    <span className="pull-right">
                        <button className='btn bg-transparent' onClick={() => {
                            this.props.delete(this.props.module.id);
                        }}>
                        <i className="fa fa-trash"></i>
                        </button>
                        <button className='btn bg-transparent' onClick={() => {
                            var moduleTitle = document.getElementById('moduleTitle');
                            moduleTitle.contentEditable=true;
                        }}
                        //         onMouseOut={() => {
                        //     var moduleTitle = document.getElementById('moduleTitle');
                        //     moduleTitle.contentEditable=false;
                        // }
                        // }
                        >
                        <i className="fa fa-pencil"></i>
                        </button>
                        </span>

            </li>
        );
    }
}