import React from 'react'

export default class WidgetList extends React.Component{
    render() {
        return(
            <div>
            {/*heading widget*/}
            <div className='container-fluid widgetborder'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <h3>Heading Widget</h3>
                    </div>

                    <div className='col-md-4 text-right '>
                        <button className="btn btn-warning widgetborder"><i className="fa fa-arrow-up" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-warning widgetborder"> <i className="fa fa-arrow-down" aria-hidden="true"></i>
                        </button>
                        <select name="widget d-flex">
                            <option value="HEADING">Heading</option>
                            <option value="PARA">Paragraph</option>
                            <option value="LIST">List</option>
                            <option value="IMAGE">Image</option>
                        </select>
                        <button className="btn btn-danger widgetborder"><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>

                </div>
                <div className='row'>
                    <div className="input-group input-group-lg">
                        <input type="text" className="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-lg" placeholder='Heading name'/>
                    </div>
                </div>
                <div>&nbsp;</div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        Heading 1
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div>&nbsp;</div>
                <div className='row'>
                    <div className="input-group input-group-lg">
                        <input type="text" className="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-lg" placeholder='Widget text'/>
                    </div>
                </div>
                <div>&nbsp;</div>
                <div>
                    <h3>Preview</h3>
                </div>
                <div>&nbsp;</div>
                <div>
                    <h1>Heading Text</h1>
                </div>
            </div>
             {/*list widget*/}

                <div className='container-fluid widgetborder'>
                    <div className='row'>
                        <div className='col-sm-8'>
                            <h3>List Widget</h3>
                        </div>

                        <div className='col-md-4 text-right'>
                            <button className="btn btn-warning widgetborder"><i className="fa fa-arrow-up" aria-hidden="true"></i>
                            </button>
                            <button className="btn btn-warning widgetborder"> <i className="fa fa-arrow-down" aria-hidden="true"></i>
                            </button>
                            <select name="widget">
                                <option value="HEADING">Heading</option>
                                <option value="PARA">Paragraph</option>
                                <option value="LIST">List</option>
                                <option value="IMAGE">Image</option>
                            </select>
                            <button className="btn btn-danger widgetborder"><i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>

                    </div>
                    <div className='row'>
                        <div className="input-group input-group-lg">
                            <textarea  className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" placeholder='Heading name'/>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle btn-block" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                            Heading 1
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                    <div className='row'>
                        <div className="input-group input-group-lg">
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" placeholder='Put each item in seperate row'/>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <h3>Preview</h3>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <ul>
                            <li>Put each</li>
                            <li>item</li>
                            <li>in seperate row</li>
                        </ul>
                    </div>
                </div>


            </div>
    );}
}