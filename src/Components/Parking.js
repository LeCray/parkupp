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
    constructor(props) {
        super(props);
        this.state = {            
            width: window.innerWidth,
            mobile: false
        };
    }
    
    componentWillMount(){
        if (this.state.width <= 576) {
          this.setState({mobile: true})
        } 
    }

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {   
    return(  
        <div style={{height: "100%", "overflow-x": "hidden"}}>
            <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
            
            {this.state.mobile?
            <div style={{fontFamily: "Quicksand"}}>
                <div class="moreBackground" style={{flex: 1,  paddingTop: "25%", color: "white", textAlign: "center"}}>
                    <h4>Get paid with ParkUpp</h4>                                            
                </div>
                <p class="container" style={{marginTop: 20, paddingLeft: 40, paddingRight: 40, textAlign: "center"}}>
                    Whether you have an existing parking facility, 
                    long term parking or an idle driveway.<br/> 
                    ParkUpp helps you find users for your parking.
                </p>
            </div>
            :
                <div class="girlBackground woman" style={{flex: 1,  paddingTop: "15%", paddingLeft: 150, color: "white", fontFamily: "Quicksand"}}>                
                    <div>
                        <h4>Get paid with ParkUpp</h4>
                        <p>
                            Whether you have an existing parking facility, 
                            long term parking or an idle driveway.<br/> 
                            ParkUpp helps you find users for your parking.
                        </p>
                    </div>                                 
                </div>
            }
            
            <div class="container" style={{marginTop: 50, paddingLeft: 40, paddingRight: 40, fontFamily: "Quicksand"}}>
                <div class="row" style={{color: "black"}}>
                    <div class="col-lg-4" style={{padding: 20}}>                                            
                        <h5><strong>Why ParkUpp</strong></h5>
                        <p>
                            No matter what kind of parking you have, ParkUpp is a simple and secure way to 
                            earn money and reach millions of drivers looking for golden parking spots.
                        </p>                        
                    </div>
                    <div class="col-lg-4 pictures" style={{padding: 20}}>                                    
                        <h5><strong>You are in charge</strong></h5>
                        <p >
                            With ParkUpp, you have full control of who you let into your parking lot by 
                            accepting and rejecting bookings, prices and availability of your parking. 
                            You handle the entire process.
                        </p>                       
                    </div>                            
                    <div class="col-lg-4 pictures" style={{padding: 20}}>                                        
                        <h5><strong>We are secure</strong></h5>
                        <p>
                            ParkUpp vets everyone who parks in your driveway or parking lot. 
                            We have an online community and support 24/7.
                        </p>
                        
                    </div>
                </div>
                
                {this.state.mobile?
                    <h2 style={{marginTop: 25}}> How to share your parking</h2>
                :
                    <h1 style={{marginTop: 25}}> How to share your parking</h1>
                }   
                
                {this.state.mobile?
                    <div>
                        <div class="row" style={{marginTop: 30}}>                
                            <div class="col-sm-12">  
                                <img src={require("../listing_woman.jpg")} class="img-fluid"/> 
                            </div>
                        </div>                               
                        <div style={{padding: 15}}>
                            <h3><span style={{fontSize: 50, color: "#2bbbad", marginRight: 10}}><b>1</b></span><b>List your space</b></h3>
                            <p>
                               Free and easy, list the number of bays, times available, 
                                rates charged and don’t forget to upload high quality pictures to make your space attractive.
                            </p>
                        </div>                    
                    </div>
                :
                    <div class="row" style={{marginTop: 80}}>
                        <div class="col-lg-1" style={{textAlign: "right"}}>
                            <h1 style={{fontSize: 80, color: "#2bbbad"}}><b>1</b></h1>
                        </div>
                        <div class="col-lg-5 " style={{padding: 15}}>
                            <h3><b>List your space</b></h3>
                            <p>
                                Free and easy, list the number of bays, times available, 
                                rates charged and don’t forget to upload high quality pictures to make your space attractive.
                            </p>
                        </div>
                        <div class="col-lg-5">
                            <img src={require("../listing_woman.jpg")} class="img-fluid"/> 
                        </div>                    
                    </div>
                }
                
                {this.state.mobile?
                    <div>
                        <div class="row" style={{marginTop: 30}}>                
                            <div class="col-sm-12">  
                                <img src={require("../parking_car.jpg")} class="img-fluid"/> 
                            </div>
                        </div>                               
                        <div style={{padding: 15}}>
                            <h3><span style={{fontSize: 50, color: "#2bbbad", marginRight: 10}}><b>2</b></span><b>Allow Access</b></h3>
                            <p>
                                For access controlled parking facilities, install LPR technology linked to our
                                system where parkers can enter using their licence plates. 
                                For single driveways or parking bays, simply leave parkupp enabled QR code at gate for users to tag and check-in.
                            </p>
                        </div>                    
                    </div>
                :
                    <div class="row" style={{marginTop: 80}}>                
                        <div class="col-lg-5">  
                            <img src={require("../parking_car.jpg")} class="img-fluid"/> 
                        </div>
                        <div class="col-lg-1" style={{textAlign: "right"}}>
                            <h1 style={{fontSize: 80, color: "#2bbbad"}}><b>2</b></h1>
                        </div>
                        <div class="col-lg-5" style={{padding: 15}}>                                        
                            <h3><b>Allow Access</b></h3>
                            <p>
                                For access controlled parking facilities, install LPR technology linked to our
                                system where parkers can enter using their licence plates. 
                                For single driveways or parking bays, simply leave parkupp enabled QR code at gate for users to tag and check-in.
                            </p>
                        </div>
                    </div>
                }


                {this.state.mobile?
                    <div>
                        <div class="row" style={{marginTop: 30}}>                
                            <div class="col-sm-12">  
                                <img src={require("../man_smiling.jpg")} class="img-fluid"/> 
                            </div>
                        </div>                               
                        <div style={{padding: 15}}>
                            <h3><span style={{fontSize: 50, color: "#2bbbad", marginRight: 10}}><b>3</b></span><b>Get Paid</b></h3>
                            <p>
                                Simply receive payment on your account through your our secure payment gateway
                            </p>
                        </div>                    
                    </div>
                :
                    <div class="row" style={{marginTop: 80}}>
                        <div class="col-lg-1" style={{textAlign: "right"}}>
                            <h1 style={{fontSize: 80, color: "#2bbbad"}}><b>3</b></h1>
                        </div>
                        <div class="col-lg-5" style={{padding: 15}}>                                            
                            <h3><b>Get Paid</b></h3>
                            <p>
                                Simply receive payment on your account through your our secure payment gateway
                            </p>
                        </div>
                        <div class="col-lg-5">
                            <img src={require("../man_smiling.jpg")} class="img-fluid"/> 
                        </div>
                    </div>
                }
                

                {this.state.mobile?
                    <h2 style={{marginTop: 50}}> ParkUpp works on safety</h2>
                :
                    <h1 style={{marginTop: 50}}> ParkUpp works on safety</h1>
                }
                
                {this.state.mobile?
                    <div>
                        <div style={{marginTop: 30}}>
                            <img src={require("../badge.png")} class="align-top" style={{height: 50, marginRight: 10, display: "inline-block"}}/>
                            <div style={{display: "inline-block"}}> 
                                <h5 ><strong>Host<br/>Guarantee</strong></h5>
                            </div>
                            <p style={{marginTop: 15}}>
                                In rare event of accidental damage, ParkUpp has you covered for 3rd party liability.
                                Peace of mind at no extra charge
                            </p>
                        </div>                                                                                                    

                        <div style={{marginTop: 60}}>
                            <img src={require("../shield.png")} class="align-top" style={{height: 50, marginRight: 10, display: "inline-block"}}/>
                            <div style={{display: "inline-block"}}> 
                                 <h5><strong>Owner Protection<br/>Insurance</strong></h5>
                            </div>
                            <p style={{marginTop: 15}}>
                                If your guests get hurt or cause property damage, our Owner Protection Insurance 
                                protects you from liability, included free for every ParkUpp owner
                            </p>
                        </div>                                                            
                        
                        <div style={{marginTop: 60}}>
                            <img src={require("../trust.png")} class="align-top" style={{height: 50, marginRight: 10, display: "inline-block"}}/>
                            <div style={{display: "inline-block"}}> 
                                 <h5><strong>Trust<br/>system</strong></h5>
                            </div>
                            <p style={{marginTop: 15}}>
                                All ParkUpp drivers must submit a profile photo and verify their phone & email. 
                                Owner can also require a government ID. 
                                Drivers and owners each publish reviews after check out keeping everyone accountable and respectful.
                            </p>
                        </div>                                                                                                 
                    </div>                 
                :
                    <div class="row" style={{marginTop: 80}}>
                        <div class="col-lg-4">
                            <div class="row">
                                <div class="col-lg-3">
                                    <img src={require("../badge.png")} class="img-fluid"/>
                                </div>
                                <div class="col-lg-8" style={{paddingTop: 5}}>
                                    <h5><strong>Host<br/>Guarantee</strong></h5>
                                </div>
                            </div>
                            <div class="row">
                                <p style={{padding: 20}}>
                                    In rare event of accidental damage, ParkUpp has you covered for 3rd party liability.
                                    Peace of mind at no extra charge
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-4 pictures">
                            <div class="row">
                                <div class="col-lg-3">                        
                                    <img src={require("../shield.png")} class="img-fluid"/> 
                                </div>
                                <div class="col-lg-8" style={{paddingTop: 5}}>
                                    <h5><strong>Owner Protection<br/>Insurance</strong></h5>
                                </div>
                            </div>
                            <div class="row">
                                <p style={{padding: 20}}>
                                    If your guests get hurt or cause property damage, our Owner Protection Insurance 
                                    protects you from liability, included free for every ParkUpp owner
                                </p>
                            </div>
                        </div>                            
                        <div class="col-lg-4 pictures"> 
                            <div class="row">
                                <div class="col-lg-3"> 
                                    <img src={require("../trust.png")} class="img-fluid"/>  
                                </div>
                                <div class="col-lg-8" style={{paddingTop: 5}}>                                 
                                    <h5><strong>Trust<br/>system</strong></h5>
                                </div>
                            </div>
                            <div class="row">
                                <p style={{padding: 20}}>
                                   All ParkUpp drivers must submit a profile photo and verify their phone & email. Owner can also require a government ID. 
                                   Drivers and owners each publish reviews after check out keeping everyone accountable and respectful.
                                </p>
                            </div>                        
                        </div>
                    </div>
                }
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