import React from 'react'
import {connect} from 'react-redux'
import WidgetList from '../components/WidgetList'
import {DELETE_WIDGET, MOVE_DOWN} from "../constants";
import * as actions from '../actions'
import reducer from '../reducers/WidgetReducer'


const stateToPropertyMapper = state => {
    return {
        widgets: state.widgets,
        previewMode: state.preview,
        disableUp: false,
        disableDown: false,
        nonUniqueName: state.nonUniqueName,
        nonUniqueWidgetId: state.nonUniqueWidgetId,
        topicId:state.topicId,
        courseId: state.courseId,
        moduleId: state.moduleId,
        lessonId: state.lessonId
    };
}


const dispatchToPropertyMapper = (dispatch, props) => ({

    addWidget: () => {
        // dispatch({
        //     type: 'ADD_WIDGET',
        //     topicId: topicId,
        //     widgets: widgets
        // }),
        //actions.addWidget(dispatch)
        props.addWidget()
    },

    deleteWidget: widget => {
         props.deleteWidget(widget);
        // dispatch({
        //     type: DELETE_WIDGET,
        //     id: widget.id
        // })
    },

    updateWidget: widget =>
        dispatch({
            type: 'UPDATE_WIDGET',
            widget: widget
        }),

    findWidgets: () =>
        dispatch({
            type: 'FIND_WIDGETS',
            //widgets: props.widgets
        }),

    findWidgetsTopic: () =>
        dispatch({
            type: 'FIND_WIDGETS_TOPIC',
            //topicId:props.topicId
        }),

    selectWidgetType: (widget,selectElement) => {
        props.updateWidgetGeneric(widget)

        // dispatch({
        //     type: 'SELECT_WIDGET_TYPE',
        //     id: widget.id,
        //     widgetType: selectElement
        // }),
    },

    moveUp: (widget) => {
        props.moveUp(widget)
    },
        // dispatch({
        //     type: 'MOVE_DOWN',
        //     id: widget.id,
        //     orderOfWidget: widget.orderOfWidget
        // }),

    moveDown: (widget) =>{
        props.moveDown(widget)
    },
        // dispatch({
        //     type: 'MOVE_UP',
        //     id: widget.id,
        //     orderOfWidget: widget.orderOfWidget
        // }),

    widgetTextChanged: (widget) => {
        props.updateWidgetGeneric(widget)
        //actions.widgetTextChanged(dispatch, widgetId, newText),
    },

    headingSizeChanged: (widget) => {
        props.updateWidgetGeneric(widget)
        //actions.headingSizeChanged(dispatch, widgetId, newSize),
    },

    widgetNameChanged: (widget) => {
        props.updateWidgetGeneric(widget)
        // actions.widgetNameChanged(dispatch, widgetId, newName),
    },
    // Image
    imageURLChanged: (widget) => {
        props.updateWidgetGeneric(widget)
        //actions.imageURLChanged(dispatch, widgetId, newUrl),
    },

    // Link
    linkURLChanged: (widget) =>
        {props.updateWidgetGeneric(widget)},
        //actions.linkURLChanged(dispatch, widgetId, newLinkUrl),

    // List
    listItemsChanged: (widget) =>{
        props.updateWidgetGeneric(widget)
    },
        //actions.listItemsChanged(dispatch, widgetId, newListItems),

    listTypeChanged: (widget) => {
        {props.updateWidgetGeneric(widget)}
    },
        //actions.listTypeChanged(dispatch, widgetId, newListType),

    saveWidgets: () => {
        props.saveWidgets()
    },

    preview: () => actions.preview(dispatch)

})

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper
)(WidgetList)



export default WidgetListContainer