import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';



import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';


<link rel="stylesheet" href="https://video-react.github.io/assets/video-react.css" />

render((
	<MuiThemeProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </MuiThemeProvider>
), document.getElementById('root'));
