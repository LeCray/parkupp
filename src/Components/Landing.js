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
			<div>				
        <img src={require("../parkupp_gif.png")} style={{width: "100%"}} /> 
        <div style={{backgroundColor: "#2bbbad", textAlign: "center"}}>

          <div style={{paddingTop: 200, paddingBottom: 200, flex: 1}}>
            <h1 style={{color: "white", fontSize: 100}}><strong>ParkUpp</strong></h1><br/>
            <h2 style={{color: "white", fontSize: 30}}><strong>Reimagine. Parking.</strong></h2>
          </div>

        </div>

				
        
			</div>
		)
	}

}

