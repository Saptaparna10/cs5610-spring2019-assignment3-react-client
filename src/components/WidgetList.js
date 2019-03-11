import React from 'react'
import WidgetComponent from './WidgetComponent'
import WidgetContainer from "./Widget";
import Toggle from "react-toggle";


const WidgetList = ({widgets, addWidget, deleteWidget, updateWidget, selectWidgetType, moveUp, moveDown, findWidgets, findWidgetsTopic, preview, previewMode, disableUp, disableDown,
                        widgetTextChanged, widgetNameChanged, headingSizeChanged, nonUniqueName, nonUniqueWidgetId,
                        listTypeChanged, listItemsChanged, imageURLChanged, linkURLChanged}) =>
    <div
        onLoad={() => findWidgetsTopic
            .then((response)=> widgets=response)}
    >
        <div className="row">
            <div className="col">

                <label className="float-right ">
                    <span className="pr-3 text-dark" style={{fontSize:"x-large"}} >Preview</span>
                    <div className="float-right py-2">
                        <Toggle
                            defaultChecked={previewMode}
                            onChange={preview} className="form-control" />
                    </div>
                </label>

                {/*<button className="btn btn-success mr-3 float-right" hidden={preview}*/}
                {/*onClick={this.props.save} title="Save">*/}
                {/*Save*/}
                {/*</button>*/}
            </div>
        </div>
        {(widgets != null && widgets !== null && widgets.length > 0) ?
        <div className="list-group">
            {
                widgets.map((widget, index) =>

                    <WidgetComponent
                        key={widget.id}
                        updateWidget={updateWidget}
                        deleteWidget={deleteWidget}
                        widget={widget}
                        preview={previewMode}
                        selectWidgetType={selectWidgetType}
                        moveUp={moveUp}
                        moveDown={moveDown}
                        disableUp= {index==0 ? true: false}
                        disableDown={index== widgets.length-1? true: false}
                        widgetTextChanged={widgetTextChanged}
                        widgetNameChanged={widgetNameChanged}
                        headingSizeChanged={headingSizeChanged}
                        nonUniqueName={nonUniqueName}
                        nonUniqueWidgetId={nonUniqueWidgetId}
                        listTypeChanged={listTypeChanged}
                        listItemsChanged={listItemsChanged}
                        imageURLChanged={imageURLChanged}
                        linkURLChanged={linkURLChanged}
                    />
                )
            }

        </div>
            :null}
        <div className="row">
            <div className="col">
                <i className="btn btn-success fa fa fa-plus float-right" title="Add widget"
                   onClick={() => addWidget()}></i>
            </div>
        </div>
    </div>

export default WidgetList