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
            mobile: false,            
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false
        
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
                <div class="moreBackground" style={{flex: 1,  paddingTop: "25%", color: "white", textAlign: "center"    }}>
                    <h4>Get paid with ParkUpp</h4>                                            
                </div>
                <p class="container" style={{marginTop: 20, paddingLeft: 40, paddingRight: 40, textAlign: "center"}}>
                    Whether you have an existing parking facility, 
                    long term parking or an idle driveway.<br/> 
                    ParkUpp helps you find users for your parking.
                </p>
                {/*}
                <div class="pull-right">
                    <Link to="/List"><Button color="blue"> DISCOVER PARKING</Button> </Link>
                </div>
                */}
                </div>
            :
                <div class="girlBackground woman" style={{flex: 1,  paddingTop: "15%", paddingLeft: 150, color: "white", fontFamily: "Quicksand"}}>                
                    <div style={{display: "inline-block "}}>
                        <h4>Get paid with ParkUpp</h4>
                        <p>
                            Whether you have an existing parking facility, 
                            long term parking or an idle driveway.<br/> 
                            ParkUpp helps you find users for your parking.
                        </p>
                    </div> 
                    {/*
                    <div className="align-top" style={{display: "inline-block", marginLeft: "20%"}}>
                        <Link to="/List"><Button color="blue">LIST PARKING</Button> </Link>
                    </div>                                
                    */}
                </div>
            }
            
            <div class="container" style={{marginTop: 50, paddingLeft: 40, paddingRight: 40, fontFamily: "Quicksand"}}>
                <div class="row" style={{color: "black"}}>
                    <div class="col-lg-4" >                                            
                        <h4><strong>Why ParkUpp</strong></h4>
                        <p>
                            No matter what kind of parking you have, ParkUpp is a simple and secure way to 
                            earn money and reach millions of drivers looking for golden parking spots.
                        </p>                        
                    </div>
                    <div class="col-lg-4 parkingScreen">
                        <h4><strong>You are in charge</strong></h4>
                        <p >
                            With ParkUpp, you have full control of who you let into your parking lot by 
                            accepting and rejecting bookings, prices and availability of your parking. 
                            You handle the entire process.
                        </p>                       
                    </div>                            
                    <div class="col-lg-4 parkingScreen">                                        
                        <h4><strong>We are secure</strong></h4>
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
                                <img src={require("../Resources/listing_woman.jpg")} class="img-fluid"/> 
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
                            <img src={require("../Resources/listing_woman.jpg")} class="img-fluid"/> 
                        </div>                    
                    </div>
                }
                
                {this.state.mobile?
                    <div>
                        <div class="row" style={{marginTop: 30}}>                
                            <div class="col-sm-12">  
                                <img src={require("../Resources/parking_car.jpg")} class="img-fluid"/> 
                            </div>
                        </div>                               
                        <div style={{padding: 15}}>
                            <h3><span style={{fontSize: 50, color: "#2bbbad", marginRight: 10}}><b>2</b></span><b>Allow Access</b></h3>
                            <p>
                                For driveways and privately owned parking, simply allow user to park.
                            </p>
                        </div>                    
                    </div>
                :
                    <div class="row" style={{marginTop: 80}}>                
                        <div class="col-lg-5">  
                            <img src={require("../Resources/parking_car.jpg")} class="img-fluid"/> 
                        </div>
                        <div class="col-lg-1" style={{textAlign: "right"}}>
                            <h1 style={{fontSize: 80, color: "#2bbbad"}}><b>2</b></h1>
                        </div>
                        <div class="col-lg-5" style={{padding: 15}}>                                        
                            <h3><b>Allow Access</b></h3>
                            <p>
                                For driveways and privately owned parking, simply allow user to park.
                            </p>
                        </div>
                    </div>
                }


                {this.state.mobile?
                    <div>
                        <div class="row" style={{marginTop: 30}}>                
                            <div class="col-sm-12">  
                                <img src={require("../Resources/man_smiling.jpg")} class="img-fluid"/> 
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
                            <img src={require("../Resources/man_smiling.jpg")} class="img-fluid"/> 
                        </div>
                    </div>
                }
                
                {/*
                {this.state.mobile?
                    <h2 style={{marginTop: 50}}> ParkUpp works on safety</h2>
                :
                    <h1 style={{marginTop: 50}}> ParkUpp works on safety</h1>
                }
                
                {this.state.mobile?
                    <div>
                        <div style={{marginTop: 30}}>
                            <img src={require("../Resources/badge.png")} class="align-top" style={{height: 50, marginRight: 10, display: "inline-block"}}/>
                            <div style={{display: "inline-block"}}> 
                                <h5 ><strong>Host<br/>Guarantee</strong></h5>
                            </div>
                            <p style={{marginTop: 15}}>
                                In rare event of accidental damage, ParkUpp has you covered for 3rd party liability.
                                Peace of mind at no extra charge
                            </p>
                        </div>                                                                                                    

                        <div style={{marginTop: 60}}>
                            <img src={require("../Resources/shield.png")} class="align-top" style={{height: 50, marginRight: 10, display: "inline-block"}}/>
                            <div style={{display: "inline-block"}}> 
                                 <h5><strong>Owner Protection<br/>Insurance</strong></h5>
                            </div>
                            <p style={{marginTop: 15}}>
                                If your guests get hurt or cause property damage, our Owner Protection Insurance 
                                protects you from liability, included free for every ParkUpp owner
                            </p>
                        </div>                                                            
                        
                        <div style={{marginTop: 60}}>
                            <img src={require("../Resources/trust.png")} class="align-top" style={{height: 50, marginRight: 10, display: "inline-block"}}/>
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
                                    <img src={require("../Resources/badge.png")} class="img-fluid"/>
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
                                    <img src={require("../Resources/shield.png")} class="img-fluid"/> 
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
                                    <img src={require("../Resources/trust.png")} class="img-fluid"/>  
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
                }*/}

            <h3 style={{marginTop: 50}}>Frequently Asked Questions</h3>
            <div style={{marginTop: 50}} class="row">
                <div class="col-lg-6">
                    <h5 class="faq" onClick={() => this.setState({show1: !this.state.show1})}>Listings</h5>
                    <p style={{display: this.state.show1?"block":"none"}}>
                        It’s easy to list your space in most high traffic areas and you list for free. 
                        If you have a parking facility, idle driveway, privately owned garage, parking space in a building, 
                        church parking lot you’d like to make extra cash from during the week or any parking based in the CBD or 
                        high density suburban areas, ParkUpp will find you users.
                    </p>
                    <hr/>
                </div>
                <div class="col-lg-6">
                    <h5 class="faq" onClick={() => {this.setState({show2: !this.state.show2})}}>
                    What type of parking is provided for?</h5>
                    <p style={{display: this.state.show2?"block":"none"}}>
                        Short term parking - this is where users can use your parking for less than a month.<br/>
                        Long term parking - usually longer than a month.<br/>
                        Booked parking - sometimes drivers know where they are going and will book your parking days before.<br/>
                        On-demand - sometimes users won’t know where they are going until they get there.
                    </p>
                    <hr/>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h5 class="faq" onClick={() => this.setState({show3: !this.state.show3})}>Who uses ParkUpp?</h5>
                    <p style={{display: this.state.show3?"block":"none"}}>
                        People going to meetings, work, events, going for shopping, markets and everything else in between
                    </p>
                    <hr/>
                </div>
                <div class="col-lg-6">
                    <h5 class="faq" onClick={() => this.setState({show4: !this.state.show4})}>Earnings</h5>
                    <p style={{display: this.state.show4?"block":"none"}}>
                        How should I price my listing on ParkUpp?<br/>
                        What you charge is up to you but we give you some tips on how 
                        to charge based on our smart analytic tools to help you to be more competitive. 
                        You can charge daily, weekly and monthly.
                    </p>
                    <hr/>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <h5 class="faq" onClick={() => this.setState({show5: !this.state.show5})}>How do ParkUpp payments work?</h5>
                    <p style={{display: this.state.show5?"block":"none"}}>
                        ParkUpp pays you on a monthly basis through our secure online payment system. 
                    </p>
                    <hr/>
                </div>
                <div class="col-lg-6">
                    <h5 class="faq" onClick={() => this.setState({show6: !this.state.show6})}>Does ParkUpp have insurance?</h5>
                    <p style={{display: this.state.show6?"block":"none"}}>
                        Damages to property on ParkUpp are rare as we screen users however should anything happen, 
                        we have a third party liability insurance that has you covered.
                    </p>
                    <hr/>
                </div>
            </div>

            </div>
                
            <div style={{paddingBottom: 20, backgroundColor: "#32bca2", color: "white", textAlign: "center", marginTop: 100}}>
                <div style={{marginTop: 20, padding: 25, marginTop: -20, fontFamily: "Quicksand"}}>
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