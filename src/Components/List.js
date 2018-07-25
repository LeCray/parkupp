import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'

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



export default class List extends Component {
  componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {   
    return(  
        <div>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
        <div style={{backgroundColor: "#2bbbad", color: "white", paddingTop: 100, height: 2000, fontFamily: "Quicksand", textAlign: "center"}}>
                    
            <div class="container" style={{padding: 40}}>    
                                                
            </div>   
              
            <div style={{height: 1000}}>
            </div>



            <hr style={{borderColor: "white", width: "70%", marginTop: 200}}/> 
            <div style={{marginTop: 20, textAlign: "center", padding: 25, marginTop: -20}}>
                <p>
                    <Link to="/Support" style={{ color: '#FFF' }}>Support </Link>
                    | <Link to="/Contact_Us" style={{ color: '#FFF' }}>Contact us </Link>  
                    | <Link to="/Terms_Conditions" style={{ color: '#FFF' }}>Terms & Conditions </Link> 
                    | <Link to="/Privacy_Policy" style={{ color: '#FFF' }}>Privacy Policy </Link>
                    | <Link to="/Careers" style={{ color: '#FFF' }}>Careers </Link>
                    | <Link to="/FAQ" style={{ color: '#FFF' }}>FAQ </Link>
                </p>
                <p>© Copyright 2018 ParkUpp. All rights reserved</p>                                
            </div> 

        </div>
    </div>
    )}
}