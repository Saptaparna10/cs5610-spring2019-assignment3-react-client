import React from 'react'
import ModuleListItem from '../components/ModuleListItem'

class ModuleList extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            selectModuleInd: 0,
            module: {
                "id": "",
                "title": "",
                "lessons": []

            },
            modules: this.props.modules,
            courseId: this.props.courseId,
            course: this.props.course
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.selectModuleInd = this.selectModuleInd.bind(this);
        this.currModule = this.currModule.bind(this);
    }


    currModule(){
        this.setState({module: this.props.selectModule});
    }

    selectModuleInd(moduleIndex){
        this.setState({selectModuleInd: moduleIndex});
    }

    createModule = () => {
        this.setState(
            {
                modules: [
                    ...this.state.modules,
                    this.state.module
                ]
            }
        )
    }

    deleteModule = dm =>{
        // this.state.modules = this.state.modules.filter(
        //     module => module.id !== dm.id
        // )
        var removeIndex = this.state.modules.map(function(item) { return item.title; }).indexOf(dm.title);

        this.state.modules.splice(removeIndex, 1);
    }

    titleChanged = (event) => {
        this.setState(
            {
                module: {
                    id: '',
                    title: event.target.value,
                    lessons: []
                }

            });
    }
    render() {
        return(

        <div>

            <div>
                    <div className="input-group mb-3">
                        <input className="form-control"
                               onChange={this.titleChanged}
                               placeholder="Module 1.1"/>
                        <div>
                            <button onClick={this.createModule}
                                    className="btn btn-primary btn-block">
                                <i className="fa fa-plus"></i>
                            </button>
                        </div>
                    </div>
            </div>

            <div className="list-group ">
                {
                    this.state.modules.map(
                        (module, index) => {
                            let active = this.state.selectModuleInd === index ? 'active' : '';
                            return (
                                <ModuleListItem
                                    deleteModule={this.deleteModule}
                                    select={this.selectModuleInd}
                                    selectModule={this.props.selectModule}
                                    position={index}
                                    active={active}
                                    key={index}
                                    title={module.title}
                                    courseId={this.state.courseId}
                                    module={module}/>
                            )
                        }
                    )
                }
                </div>
                <div>
                    &nbsp;
                </div>

        </div>
        )
    }
}
export default ModuleList;