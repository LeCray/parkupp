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
        <div>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:700" rel="stylesheet"/>
        <div style={{backgroundColor: "#2bbbad", height: "100%", color: "white", paddingTop: 50, fontFamily: "Quicksand"}}>
        
            <div class="container" style={{backgroundColor: "#2bbbad", color: "white", marginTop: 50}}>
                <div class="row">
                    <div class="col-lg-8" style={{padding: 30}}>                    
                    
                        <h1 style={{fontSize: 30, marginTop: 20}}>About Us</h1>                    

                        <p style={{marginTop: 50, fontSize: 20}}>
                            At ParkUpp, we are a family of young, diverse, creative and somewhat
                            quirky individuals setting out to solve the nightmare that is urban
                            parking.                        
                            <br/><br/>
                            The ParkUpp idea was born out of a simple observation, where we
                            noticed the incredible amount of under-utilised private parking spaces
                            in areas where demand for parking was particularly high.
                            <br/><br/>
                            ParkUpp has created an effective peer-to-peer marketplace that
                            connects homeowners with idle driveways, garages and unused
                            parking spaces to drivers who are in need of parking.                            
                            When you purchase a vehicle, it never crosses your mind that your car
                            will be parked 95% of the time.
                            <br/><br/>
                            In stating that, we all know that with owning a vehicle comes the
                            responsibility and more often than not the unwanted headache of
                            attempting to find a parking space, especially in those densely
                            populated urban areas.                            
                            But, no need to worry any more! Riding on the wave of a sharing
                            economy, ParkUpp now offers a simple yet ingenious and ubiquitous
                            service that solves your parking hassle whilst unlocking a new source
                            of income for homeowners.

                        </p>                       
                    </div>             
                </div>                  
            </div>
            <div style={{marginTop: 20, textAlign: "center"}}>
                <hr style={{borderColor: "white", width: "75%", marginTop: 150}}/> 
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
    )}
}