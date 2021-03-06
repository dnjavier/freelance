import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import {Home} from './app/home/home';
import {Work} from './app/work/work';
import {About} from './app/about/about';

import './index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    <Route path="/work" component={Work}/>
    <Route path="/about" component={About}/>
  </Router>,
  document.getElementById('root')
);

//React routes
// https://css-tricks.com/learning-react-router/
