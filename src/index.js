import 'core-js/es6/symbol.js';
import React from 'react';
import { render } from 'react-dom';
import Routes from './config/routes';
import { browserHistory } from 'react-router';
import './index.css';

render(
  <Routes history={browserHistory}/>,
  document.getElementById('root')
);
