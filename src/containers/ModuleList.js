import React from 'react'
import ModuleListItem from '../components/ModuleListItem'

class ModuleList extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            module: {
                "id": "",
                "title": "",
                "lessons": []

            },
            modules: this.props.modules
        };

        this.titleChanged = this.titleChanged.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
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

    // updateModule = um =>{
    //
    // }
    //
    // select = pm =>{
    //     this.state.module = pm
    // }
    //

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

                <div className="list-group " id="myList" role="tablist">
                    <span className="list-group-item list-group-item-action mb-5" style={{borderRadius:7,background:'lightgrey'}}
                          role="tab">
                        <form className="form-inline">
                    <input className="form-control" placeholder="New Module Name"
                           onChange={this.titleChanged}/>
                    <i className="btn float-right fa-2x fa fa-plus ml-auto p-0" title="Add"
                        onClick={this.createModule}></i>
                    <i className="btn float-right fa-2x fa fa-check ml-auto p-0" aria-hidden="true"
                       onClick={this.updateModule}>
                            </i>
                </form>
                    </span>

                </div>
                <div className="list-group ">
                {
                    this.state.modules.map(
                        (module) => {
                            return (
                                <ModuleListItem
                                    selectModule={this.props.selectModule}
                                    deleteModule={this.deleteModule}
                                    key={module.id}
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