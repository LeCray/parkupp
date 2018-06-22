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



export default class About_Us extends Component {

    render() {   
    return(  
        <div style={{backgroundColor: "#2bbbad", height: "100%", color: "white", paddingTop: 50, fontFamily: "Arial"}}>
        
            <div style={{backgroundColor: "#2bbbad", color: "white", marginTop: 50}}>
                <div class="container" style={{padding: 20}}>
                    <Link to="/" style={{ color: '#FFF' }}><Ionicon icon="md-arrow-back" fontSize="35px" color="white" style={{marginRight: 20}}/></Link>
                
                    <h1 style={{fontSize: 30, marginTop: 20}}>About Us</h1>                    

                    <p style={{marginTop: 50, fontSize: 20}}>
                        At the ParkUpp family, we wake up everyday to solve some of the land<br/>
                        allocation issues that the world is facing. <br/>
                        <br/>
                        The first problem we are solving is the one of parking. When people<br/>
                        buy cars, they don’t realise that the car they are buying will be parked<br/>
                        95% of the time. Furthermore, we don’t believe that new parkades<br/>
                        need to be built in order to accommodate new cars that are being<br/>
                        bought everyday. There are enough driveways in the world that are<br/>
                        already solving this problem but are currently not being used to their<br/>
                        fullest capacity. Throughout the world, only 4% of land is allocated to<br/>
                        parking therefore making the resource very scarce.<br/>
                        <br/>
                        ParkUpp is a peer-to-peer platform that will connect people with idle<br/>
                        driveways to the ones who desperately need parking. Let’s share<br/>
                        parking and use the land for something more useful.
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