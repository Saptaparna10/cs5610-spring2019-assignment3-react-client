import React from 'react'

const ModuleListItem = ({module, selectModule, deleteModule}) =>
    <div onClick={() => selectModule(module)} className="list-group-item">
        {module.title}
        <i className="btn float-right fa-2x fa fa-times ml-auto p-0" title="delete"
           onClick={() => deleteModule(module)}></i>
        <i className="btn float-right fa-2x fa fa-pencil ml-auto p-0" aria-hidden="true"></i>
    </div>

export default ModuleListItem;