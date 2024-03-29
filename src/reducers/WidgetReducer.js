import * as constants from "./../constants/index"
import WidgetServiceClient from "../services/WidgetService";
import CourseService from "../services/CourseService";


export const widgetReducer = (state, action) => {


    var widgetService = WidgetServiceClient.instance;
    var cs = new CourseService()

    switch (action.type) {

        case constants.PREVIEW:
            return {
                widgets: state.widgets,
                preview: !state.preview,
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId
            }

        case constants.WIDGET_NAME_CHANGED:

            var nonUniqueName=false;
            var nonUniqueWidgetId=-1;
            for(var w in state.widgets){
                if(action.name==state.widgets[w].name) {
                    nonUniqueName = true;
                    nonUniqueWidgetId = action.id;
                }
            }

            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.name = action.name
                    }
                    return Object.assign({}, widget)
                }),
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId,
                nonUniqueName:nonUniqueName,
                nonUniqueWidgetId:nonUniqueWidgetId
            }


        case constants.WIDGET_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.text = action.text
                    }
                    return Object.assign({}, widget)
                }),
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId
            }

        case constants.IMAGE_SRC_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.src = action.src
                    }
                    return Object.assign({}, widget)
                }),
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId
            }
        case constants.LINK_URL_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.href = action.href
                    }
                    return Object.assign({}, widget)
                }),
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId
            }

        case constants.HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.size = action.size
                    }
                    return Object.assign({}, widget)
                }),
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId
            }

        case constants.LIST_ITEMS_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.listItems = action.listItems
                    }
                    return Object.assign({}, widget)
                }),
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId
            }
        case constants.LIST_TYPE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id) {
                        widget.listType = action.listType
                    }
                    return Object.assign({}, widget)
                }),
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId
            }

        case constants.SELECT_WIDGET_TYPE:
            console.log(action);
            let newState = {
                widgets: state.widgets.filter((widget) => {
                    if (widget.id === action.id) {
                        widget.type = action.widgetType
                    }
                    return true;
                }),
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId
            }
            return JSON.parse(JSON.stringify(newState))

        case constants.SAVE:
            if(state.nonUniqueName!==true) {
                var loc = window.location.href;
                var courseId = '', moduleId = '', lessonId = '', topicId = ''

                var arrUrl = loc.split('/');
                console.log(arrUrl);
                courseId = arrUrl[4];
                moduleId = arrUrl[7];
                lessonId = arrUrl[10];
                topicId = arrUrl[13];
                var widgets = state.widgets;
                for (var wid in widgets) {
                    delete widgets[wid]['id'];
                }

                console.log(widgets);

                widgetService.createWidget(courseId, moduleId, lessonId, topicId, widgets);
            }
            return state;

        case constants.FIND_ALL_WIDGETS:
            newState = Object.assign({}, state)
            newState.widgets = action.widgets;
            return newState

        case constants.DELETE_WIDGET:
            var newState = {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                )),
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId
            }
            return Object.assign({}, newState)


        case constants.MOVE_UP:

            var widIndex = state.widgets.findIndex(widget => (
                widget.id == action.id
            ));
            var widgets = state.widgets;

            var temp = widgets[widIndex].orderOfWidget;
            widgets[widIndex].orderOfWidget = widgets[widIndex - 1].orderOfWidget;
            widgets[widIndex - 1].orderOfWidget = temp;

            var cs = new CourseService();

            var newWidgets = cs.sort(widgets);

            var newWid = JSON.parse(JSON.stringify(newWidgets));

            return {
                widgets: newWid,
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId
            }

        case constants.MOVE_DOWN:

            var widIndex = state.widgets.findIndex(widget => (
                widget.id == action.id
            ));

            var widgets = state.widgets;
            var temp = widgets[widIndex].orderOfWidget;
            widgets[widIndex].orderOfWidget = widgets[widIndex + 1].orderOfWidget;
            widgets[widIndex + 1].orderOfWidget = temp;

            var cs = new CourseService();

            var newWidgets = cs.sort(widgets);

            var newWid = JSON.parse(JSON.stringify(newWidgets));

            return {
                widgets: newWid,
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId
            }
        case constants.ADD_WIDGET:
            // console.log();

            var orderOfWidget = 0;
            if (state.widgets.length > 0)
                orderOfWidget = state.widgets[state.widgets.length - 1].orderOfWidget;

            let qqq = {
                widgets: [
                    ...state.widgets,

                    {
                        //id: state.widgets.length + 1,
                        text: '',
                        type: 'HEADING',
                        size: '2',
                        orderOfWidget: ++orderOfWidget,
                        name: ''
                    }

                ],
                previewMode: state.preview,
                disableUp: false,
                disableDown: false,
                nonUniqueName: state.nonUniqueName,
                nonUniqueWidgetId: state.nonUniqueWidgetId,
                topicId: state.topicId,
                courseId: state.courseId,
                moduleId: state.moduleId,
                lessonId: state.lessonId
            }

            qqq = Object.assign({}, qqq)
            return {
                widgets: [
                    {
                        id: 123,
                        text: '',
                        type: 'HEADING',
                        size: '2',
                        orderOfWidget: 1,
                        name: ''
                    }
                ]
            };

        case constants.FIND_WIDGETS:
            var newState = {
                widgets: action.widgets
            }
            return Object.assign({}, newState)

        case 'FIND_WIDGETS_TOPIC':
            var newState = {
                widgets: widgetService.findAllWidgetsForTopic(action.topicId),
                courseId: state.courseId,
                moduleId: state.moduleId,
                topicId: state.topicId,
                lessonId: state.lessonId
            }
            return Object.assign({}, newState)

        default:
            return state
    }
}