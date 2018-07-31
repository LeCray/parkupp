import React, { Component } from 'react';
import { render } from 'react-dom'
//import logo from './logo.svg';
import './App.css';

import Headers from './Components/Headers';
import Main from './Components/Main'

var StepZilla = require('react-stepzilla')
require('../node_modules/react-stepzilla/src/css/main.css');

const App = () => (
  <div>
    <Headers />    
    <Main />
  </div>
)



export default App;
