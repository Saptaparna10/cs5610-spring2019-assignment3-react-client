import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseManagerApp from './containers/CourseManagerApp';
import '../node_modules/font-awesome/css/font-awesome.css';
import css from './index.css';
import CourseEditor from "./containers/CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import WhiteBoard from './containers/Whiteboard'


ReactDOM.render(

    <div className="container-fluid">
        <WhiteBoard/>
    </div>,
    document.getElementById("root")
);