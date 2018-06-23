import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';



import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


<link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
