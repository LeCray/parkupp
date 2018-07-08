import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'
import { Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';

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
  
} from 'react-bootstrap';



export default class Parking extends Component {

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {   
    return(  
        <div style={{height: "100%", "overflow-x": "hidden"}}>
            <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
            <div class="girlBackground sneakers" style={{flex: 1,  paddingTop: 200, paddingLeft: 150, flexDirection: "column", color: "white", fontFamily: "Quicksand"}}>                
                <div>
                    <h4>Get paid with ParkUpp</h4>
                    <p>
                        Whether you have an existing parking facility, 
                        long term parking or an idle driveway.<br/> 
                        ParkUpp helps you find users for your parking.
                    </p>
                </div>                                 
            </div>

            <div class="row" style={{marginTop: 50, color: "black", paddingLeft: 150}}>
                <div class="col-lg-3">
                    <div >                        
                        <h5><strong>Why ParkUpp</strong></h5>
                        <p>
                            No matter what kind of parking you have, ParkUpp is a simple and secure way to 
                            earn money and reach millions of drivers looking for golden parking spots.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1 pictures">
                    <div>                        
                        <h5><strong>You are in charge</strong></h5>
                        <p >
                            With ParkUpp, you have full control of who you let into your parking lot by 
                            accepting and rejecting bookings, prices and availability of your parking. 
                            You handle the entire process.
                        </p>
                    </div>
                </div>                            
                <div class="col-lg-3 offset-lg-1 pictures">                                        
                    <h5><strong>We are secure</strong></h5>
                    <p>
                        ParkUpp vets everyone who parks in your driveway or parking lot. 
                        We have an online community and support 24/7.
                    </p>
                    
                </div>
            </div>
            
            <div style={{marginLeft: 150, marginTop: 100}}>
                <h1> How to share your parking</h1>
                    
                <div class="row" style={{marginLeft: 100, marginTop: 100}}>
                    <div class="col-lg-4">
                
                        <h1 style={{fontSize: 40, display: "inline", color: "#2bbbad"}}>1</h1>
                        <h3 style={{display: "inline", marginLeft: 20}}><b>List your space</b></h3>
                        <p style={{marginLeft: 10}}>
                            Free and easy, list the number of bays, times available, 
                            rates charged and don’t forget to upload high quality pictures to make your space attractive.
                        </p>

                    </div>
                    <div class="col-lg-4">
                        <img src={require("../listing_woman.jpg")} style={{marginLeft: 50, height: 300}}/> 
                    </div>
                </div>

                <div class="row" style={{marginLeft: 100, marginTop: 100}}>
                    <div class="col-lg-4">
                        <img src={require("../parking_car.jpg")} style={{height: 300}}/> 
                    </div>
                    <div class="col-lg-4" style={{marginLeft: 200}}>
                
                        <h1 style={{fontSize: 40, display: "inline", color: "#2bbbad"}}>2</h1>
                        <h3 style={{display: "inline", marginLeft: 20}}><b>Allow Access</b></h3>
                        <p style={{marginLeft: 10}}>
                            For access controlled parking facilities, install LPR technology linked to our
                            system where parkers can enter using their licence plates. 
                            For single driveways or parking bays, simply leave parkupp enabled QR code at gate for users to tag and check-in.
                        </p>

                    </div>
                </div>

                <div class="row" style={{marginLeft: 100, marginTop: 100}}>
                    <div class="col-lg-4">
                
                        <h1 style={{fontSize: 40, display: "inline", color: "#2bbbad"}}>3</h1>
                        <h3 style={{display: "inline", marginLeft: 20}}><b>Get Paid</b></h3>
                        <p style={{marginLeft: 10}}>
                            Simply receive payment on your account through your our secure payment gateway
                        </p>

                    </div>
                    <div class="col-lg-4">
                        <img src={require("../man_smiling.jpg")} style={{marginLeft: 50, height: 300}}/> 
                    </div>
                </div>
            </div>

            <h1 style={{marginLeft: 150, marginTop: 100}}> ParkUpp works on safety</h1>

            <div class="row" style={{marginTop: 50, color: "black", paddingLeft: 150}}>
                <div class="col-lg-4">
                    <div >                        
                        <img src={require("../badge.png")} style={{height: 50, display: "inline"}}/> 
                        <h5 style={{display: "inline", marginLeft: 5}}><strong>Host Guarantee</strong></h5>
                        <p style={{marginTop: 20}}>
                            In rare event of accidental damage, ParkUpp has you covered for 3rd party liability.
                            Peace of mind at no extra charge
                        </p>
                    </div>
                </div>
                <div class="col-lg-4 pictures">
                    <div>                        
                        <img src={require("../shield.png")} style={{height: 50, display: "inline"}}/> 
                        <h5 style={{display: "inline", marginLeft: 5}}><strong>Owner Protection Insurance</strong></h5>
                        <p style={{marginTop: 20}}>
                            If your guests get hurt or cause property damage, our Owner Protection Insurance 
                            protects you from liability, included free for every ParkUpp owner
                        </p>
                    </div>
                </div>                            
                <div class="col-lg-4 pictures" style={{paddingRight: 100}}>  
                    <img src={require("../trust.png")} style={{height: 50, display: "inline"}}/>                                       
                    <h5 style={{display: "inline", marginLeft: 5}}><strong>Trust system</strong></h5>
                    <p style={{marginTop: 20}}>
                       All ParkUpp drivers must submit a profile photo and verify their phone & email. Owner can also require a government ID. 
                       Drivers and owners each publish reviews after check out keeping everyone accountable and respectful.
                    </p>
                    
                </div>
            </div>
                
            <div style={{paddingBottom: 20, backgroundColor: "#32bca2", color: "white", textAlign: "center", marginTop: 100}}>
                <div style={{marginTop: 20, padding: 25, marginTop: -20}}>
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