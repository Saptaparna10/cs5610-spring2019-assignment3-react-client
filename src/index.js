import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import CourseManagerApp from './containers/CourseManagerApp';
import '../node_modules/font-awesome/css/font-awesome.css';
import css from './index.css';


ReactDOM.render(
    <CourseManagerApp/>,
    document.getElementById('root')
);
