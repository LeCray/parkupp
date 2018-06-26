import React, { Component } from 'react';
import { render } from 'react-dom'
import logo from './logo.svg';
import './App.css';

import Headers from './Components/Headers';
import Main from './Components/Main'


const App = () => (
  <div>
    <Headers />    
    <Main />
  </div>
)



export default App;
