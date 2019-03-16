import widgets from '../resources/widgets'
import courses from '../resources/courses.json'
import * as constants from "../constants";

//let _singleton = Symbol();

class WidgetServiceClient {
    // constructor(singletonToken) {
    //     if (_singleton !== singletonToken)
    //         throw new Error('Cannot instantiate directly.');
    // }
    //
    // static get instance() {
    //     if (!this[_singleton])
    //         this[_singleton] = new WidgetServiceClient(_singleton);
    //     return this[_singleton]
    // }

    findAllWidgets() {
      return widgets;
    }

    createWidget(topicId,widget) {
        // return {
        //     widgets: [
        //         ...widgets,
        //         {
        //             type: 'HEADING',
        //             text: 'New Widget',
        //             size: 1
        //         }
        //     ]
        // }
        if(widget==null || widget=='' || widget.title === '')
            alert('widget name cannot be empty')

        if(widget.title=='')
            widget.title = 'New widget'

        return fetch(constants.BASE_URL+'/api/topics/'+topicId+'/widgets', {
            'credentials': 'include',
            method : 'post',
            body : JSON.stringify(widget),
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

    deleteWidget(widgetId, topicId) {
        // return {
        //     widgets: widgets.filter(widget => widget.id !== widgetId)
        // }

        return fetch(constants.BASE_URL + '/api/topics/'+ topicId + '/widgets/' + widgetId, {
            'credentials': 'include',
            method: 'delete'
        })
            .then(function (response) {
            return response.json();
        })
    }

    findWidgetById(widgetId) {
        return fetch(this.createWidgetUrl() + '/' + widgetId,
            {
                method: 'GET'
            }).then(function (response) {
            if(response.headers.get("content-type")!=null)
                return response.json();
            else return null;
        });
    }

    findAllWidgetsForTopic(topicId) {
        return fetch(constants.BASE_URL+'/api/topics/'+topicId+'/widgets',{
            'credentials': 'include'
        })
            .then(function (response) {
                return response.json();
            });
        // return widgets;
    }

    updateWidget(widgetId,widget) {
        return {
            widgets: widgets.map(w =>
                w.id === widgetId ? widget : w
            )
        }

        return fetch(constants.BASE_URL+'/api/widgets/{widgetId}', {
            'credentials': 'include',
            method : 'put',
            body : JSON.stringify(widget),
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

    saveWidgets(widgets, topicId){
        return fetch(constants.BASE_URL+'/api/save/topics/'+topicId+'/widgets', {
            'credentials': 'include',
            method : 'post',
            body : JSON.stringify(widgets),
            headers : {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        })
    }

}

export default WidgetServiceClient;
