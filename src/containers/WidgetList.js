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
                            <option value="LINK">Link</option>
                        </select>
                        <button className="btn btn-danger widgetborder"><i className="fa fa-times" aria-hidden="true"></i></button>
                    </div>

                </div>
                <div>
                    &nbsp;
                </div>
                <div className='row'>
                    <div className="container-fluid">
                        <input type="text" className="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-lg" placeholder='Heading name'/>
                    </div>
                </div>
                <div>&nbsp;</div>
                <div >
                    <select className='wide-ddl'>
                        <option value="Heading1">Heading1</option>
                        <option value="Heading2">Heading2</option>
                        <option value="Heading3">Heading3</option>
                        <option value="Heading4">Heading4</option>
                    </select>
                </div>
                <div>&nbsp;</div>
                <div className='row'>
                    <div className="container-fluid">
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
                <div>
                    &nbsp;
                </div>

            </div>
                <div className='row float-right'>
                    <div className='col'>
                    <button className='btn-success'> <i className="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                </div>

                <div>
                    &nbsp;
                </div>
                <div>
                    &nbsp;
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
                                <option value="LIST">List</option>
                                <option value="PARA">Paragraph</option>
                                <option value="HEADING">Heading</option>
                                <option value="LINK">Image</option>
                            </select>
                            <button className="btn btn-danger widgetborder"><i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>

                    </div>
                    <div>&nbsp;</div>
                    <div className='row'>
                        <div className="container-fluid">
                            <textarea  className="form-control" aria-label="Sizing example input"
                                       aria-describedby="inputGroup-sizing-lg" placeholder='Heading name'/>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                    <div className="dropdown">
                        <select name="widget" className='wide-ddl'>
                            <option value="OL">Ordered list</option>
                            <option value="UL">Unordered list</option>
                        </select>
                    </div>
                    <div>&nbsp;</div>
                    <div className='row'>
                        <div className="container-fluid">
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
                <div className='row float-right'>
                    <div className='col'>
                        <button className='btn-success'> <i className="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                </div>

                <div>
                    &nbsp;
                </div>
                <div>
                    &nbsp;
                </div>

                {/*Paragraph widget*/}


                <div className='container-fluid widgetborder'>
                    <div className='row'>
                        <div className='col-sm-8'>
                            <h3>Paragraph Widget</h3>
                        </div>

                        <div className='col-md-4 text-right'>
                            <button className="btn btn-warning widgetborder"><i className="fa fa-arrow-up" aria-hidden="true"></i>
                            </button>
                            <button className="btn btn-warning widgetborder"> <i className="fa fa-arrow-down" aria-hidden="true"></i>
                            </button>
                            <select name="widget">
                                <option value="PARA">Paragraph</option>
                                <option value="HEADING">Heading</option>
                                <option value="LIST">List</option>
                                <option value="LINK">Image</option>
                            </select>
                            <button className="btn btn-danger widgetborder"><i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>

                    </div>
                    <div>&nbsp;</div>
                    <div className='row'>
                        <div className="container-fluid">
                            <textarea type="text" className="form-control" aria-label="Sizing example input"
                                      aria-describedby="inputGroup-sizing-lg" placeholder='loren ipsum'/>
                        </div>
                    </div>
                    <div>&nbsp;</div>

                    <div>&nbsp;</div>
                    <div className='row'>
                        <div className="container-fluid">
                            <input type="text" className="form-control" aria-label="Sizing example input"
                                   aria-describedby="inputGroup-sizing-lg" placeholder='Widget name'/>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <h3>Preview</h3>
                    </div>
                    <div>&nbsp;</div>
                    <div>
                        <p>loren ipsum</p>
                    </div>
                </div>
                <div className='row float-right'>
                    <div className='col'>
                        <button className='btn-success'> <i className="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                </div>

                <div>
                    &nbsp;
                </div>
                <div>
                    &nbsp;
                </div>


                {/*Link widget*/}

                <div className='container-fluid widgetborder'>
                    <div className='row'>
                        <div className='col-sm-8'>
                            <h3>Link Widget</h3>
                        </div>

                        <div className='col-md-4 text-right'>
                            <button className="btn btn-warning widgetborder"><i className="fa fa-arrow-up" aria-hidden="true"></i>
                            </button>
                            <button className="btn btn-warning widgetborder"> <i className="fa fa-arrow-down" aria-hidden="true"></i>
                            </button>
                            <select name="widget">
                                <option value="Link">Link</option>
                                <option value="HEADING">Heading</option>
                                <option value="PARA">Paragraph</option>
                                <option value="LIST">List</option>

                            </select>
                            <button className="btn btn-danger widgetborder"><i className="fa fa-times" aria-hidden="true"></i></button>
                        </div>

                    </div>
                    <div>&nbsp;</div>
                    <div className='row'>
                        <div className="container-fluid">
                            <input  className="form-control" aria-label="Sizing example input"
                                       aria-describedby="inputGroup-sizing-lg" placeholder='https://www.youtube.com/'/>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                    <div className='row'>
                        <div className="container-fluid">
                            <input  className="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-lg" placeholder='Link text'/>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                    <div className='row'>
                        <div className="container-fluid">
                            <input  className="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-lg" placeholder='https://www.youtube.com'/>
                        </div>
                    </div>
                    <div>&nbsp;</div>
                    <div className='row'>
                        <div className="container-fluid">
                            <input  className="form-control" aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-lg" placeholder='Link text'/>
                        </div>
                    </div>
                    <div>
                        &nbsp;
                    </div>
                    <div>
                        <h3>Preview</h3>
                    </div>
                    <div>&nbsp;</div>
                   <a href='#'>Link Text</a>
                </div>
                <div className='row float-right'>
                    <div className='col'>
                        <button className='btn-success'> <i className="fa fa-plus" aria-hidden="true"></i></button>
                    </div>
                </div>

                <div>
                    &nbsp;
                </div>
                <div>
                    &nbsp;
                </div>


            </div>
    );}
}