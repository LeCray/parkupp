import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';




import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


var StepZilla = require('react-stepzilla')

render((	
  <BrowserRouter>
    <App />
  </BrowserRouter>  
), document.getElementById('root'));
