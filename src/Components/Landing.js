import React, { Component } from 'react';

import Background from '../parkupp_gif.png';



import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'react-bootstrap';



export default class Landing extends Component {

	render() {		
		return(  
			<div >				
        <img src={require("../parkupp_gif.png")} style={{width: "100%"}} /> 

				<Button bsStyle="success">Success</Button>
        
			</div>
		)
	}

}

