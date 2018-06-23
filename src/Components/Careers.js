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



export default class Careers extends Component {

    render() {   
    return(  
        <div style={{backgroundColor: "#2bbbad", color: "white", paddingTop: 100, height: "100%", fontFamily: "Arial", textAlign: "center"}}>
        
            <div style={{backgroundColor: "#2bbbad", color: "white"}}>
                <div class="container" style={{padding: 20}}>    

                    <img src={require("../careers.png")} style={{height: 100, marginBottom: 10}} /> 
                    <h1 style={{fontSize: 30, marginTop: 20}}>Careers</h1>  
                    <p style={{fontSize: 20}}>Wanna change the world with us?</p>                  

                    <p style={{marginTop: 50, fontSize: 20}}>
                        There are currently no game changers needed but you can email us: <br/>

                        <u>winningteam@parkupp.co.za</u><br/>

                        and share a cup of coffee :)
                    </p>
                       
                    <hr style={{borderColor: "white", width: "75%", marginTop: 150}}/> 

                    <div style={{marginTop: 20, textAlign: "center"}}>
                        <p>
                            <Link to="/Support" style={{ color: '#FFF' }}>Support </Link>
                            | <Link to="/Contact_Us" style={{ color: '#FFF' }}>Contact us </Link>  
                            | <Link to="/Terms_Conditions" style={{ color: '#FFF' }}>Terms & Conditions </Link> 
                            | <Link to="/Privacy_Policy" style={{ color: '#FFF' }}>Privacy Policy </Link>
                            | <Link to="/Careers" style={{ color: '#FFF' }}>Careers </Link>
                        </p>
                        <p>© Copyright 2018 ParkUpp. All rights reserved</p>                                
                    </div> 
                </div>                       
            </div>
        </div>
    )}
}