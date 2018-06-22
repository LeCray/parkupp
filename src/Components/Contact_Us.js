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



export default class Contact_Us extends Component {

    render() {   
    return(  
        <div style={{backgroundColor: "#2bbbad", paddingTop: 100, color: "white", height: "100vh", fontFamily: "Arial"}}>
        
            <div style={{paddingBottom: 50, backgroundColor: "#2bbbad", color: "white"}}>
                <div class="container" style={{padding: 20}}>
                    <Link to="/" style={{ color: '#FFF' }}><Ionicon icon="md-arrow-back" fontSize="35px" color="white" style={{marginRight: 20}}/></Link>
                
                    <h1 style={{fontSize: 30, marginTop: 20}}>Contact Us</h1>  
                                      
                    <div class="row">
                        <div class="col-sm-12">
                            <p style={{marginTop: 50, fontSize: 20}}>
                                Happy Email: <br/>  
                                <u>happychappy@parkupp.co.za</u> 
                                <br/><br/>                                                 
                                Sad Email: <br/>
                                <u>feelingblue@parkupp.co.za</u> 
                                <br/><br/>
                                Address:<br/>
                                9 Portswood Rd, V& A Waterfront <br/>
                                Cape Town <br/>
                                Western Cape <br/>
                                8001 <br/>
                                South Africa <br/>
                            </p>
                        </div>

                    </div>
                       
                    <hr style={{borderColor: "white", width: 120, marginTop: 100}}/> 
                </div>                       
            </div>
        </div>
    )}
}