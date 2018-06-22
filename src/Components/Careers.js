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
        <div style={{backgroundColor: "#2bbbad", color: "white", paddingTop: 10, height: "100vh", fontFamily: "Arial"}}>
        
            <div style={{paddingBottom: 50, backgroundColor: "#2bbbad", color: "white", marginTop: 50}}>
                <div class="container" style={{padding: 20}}>
                    <Link to="/" style={{ color: '#FFF' }}><Ionicon icon="md-arrow-back" fontSize="35px" color="white" style={{marginRight: 20}}/></Link>
                
                    <h1 style={{fontSize: 30, marginTop: 20}}>Careers</h1>  
                    <p style={{fontSize: 20}}>Wanna change the world with us?</p>                  

                    <p style={{marginTop: 50, fontSize: 20}}>
                        There are currently no game changers needed but you can email us: <br/>

                        <u>winningteam@parkupp.co.za</u><br/>

                        and share a cup of coffee :)
                    </p>
                       
                    <hr style={{borderColor: "white", width: 120, marginTop: 100}}/> 
                </div>                       
            </div>
        </div>
    )}
}