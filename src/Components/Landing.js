import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';

import Ionicon from 'react-ionicons'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import scrollToComponent from 'react-scroll-to-component';
    
import { Link } from 'react-router-dom'

import ReactPlayer from 'react-player';
import YouTubePlayer from 'react-player/lib/players/YouTube'


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
  //Button
} from 'react-bootstrap';



export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            driver: false,
            driverCount: "",            
            owner: false,
            ownerCount: "",
            height: "",
            playing: false,
            width: window.innerWidth,
            mobile: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.driver = this.driver.bind(this);
        this.owner = this.owner.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    driver() {this.setState({driver: !this.state.driver})}       
    owner() {this.setState({owner: !this.state.owner})}            

    componentWillMount(){
        this.setState({height: window.innerHeight + 'px'});

        if (this.state.width <= 576) {
          this.setState({mobile: true})
        } 
                         
        fetch('http://preproduction.an22aevtww.eu-west-1.elasticbeanstalk.com/api/users')
        .then(response => response.json())                                 
        .then((response) => {
            console.log(response.users)
            console.log(response.users.length)
            
            const length = response.users.length
            const data = response.users
            

            var i
            var driverCount = 0
            var ownerCount = 0

            for (i = 0; i < length; i++ ) {                

                if (data[i].userType === "driver" || data[i].userType === "both") {
                    driverCount++                        
                }

                if (data[i].userType === "owner" || data[i].userType === "both") {
                    ownerCount++                        
                }
            }

            this.setState({
                driverCount: driverCount,
                ownerCount: ownerCount
            })

            console.log("Drivers:",this.state.driverCount)     
            console.log("Owners:",this.state.ownerCount)     

        })
            
    }

    componentDidMount() {
      window.scrollTo(0, 0)
    }


	render() {		
		return(
            <div>  
            <link rel="stylesheet" href="/css/video-react.css" />
            <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>			
            <div style={{overflow: "hidden", fontFamily: "Quicksand"}}> 

                <div class="mainBackground" style={{flex: 1,  paddingTop: "30%", paddingLeft: "15%", color: "white"}}>
                    {/*<Link to="/Discover_Parking">
                        <p class="button ourButton"> 
                            DISCOVER PARKING
                        </p> 
                    </Link>*/}
                </div>

                <div style={{textAlign: "center", paddingTop: this.state.mobile?0:100, marginTop: this.state.mobile?-370:0}}>

                    {/* PARKUPP */}
                    <div class="parkupp height" 
                        style={{paddingBottom: 20, marginTop: "5%", marginBottom: 30, backgroundColor: "white", height: "100%", paddingLeft: 20, paddingRight: 20}}>
                        <h1 style={{color: "#32bca2", fontSize: 60}}><strong>ParkUpp</strong></h1><br/>
                        

                        <div class="row" style={{marginTop: 20}}>
                            <div class="col-sm-6 col-md-4 offset-md-2 col-lg-2 offset-lg-4">
                                <div >
                                    <img src={require("../Resources/location.png")} style={{height: 80, marginBottom: 10}}/> 
                                    <h2 style={{color: "#e6c131"}}>{this.state.ownerCount}</h2>
                                    <h4 style={{color: "#32bca2"}}>Locations</h4>   
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-2 parkers">
                                <div>
                                    <img src={require("../Resources/parkers.png")} style={{height: 80, marginBottom: 10}}/> 
                                    <h2 style={{color: "#e6c131"}}>{this.state.driverCount}</h2>
                                    <h4 style={{color: "#32bca2"}}>Users</h4>   
                                </div>
                            </div>
                        </div>

                        <hr class="line margin" style={{borderColor: "#32bca2", width: 120, marginTop: this.state.mobile?50:100}}/>
                        <Ionicon style={{cursor: "pointer"}}onClick={()=>scrollToComponent(this.why_parkupp,{offset:-50,align:'top',duration:1500})} icon="md-arrow-down" fontSize="35px" color="#32bca2"/>
                    </div>
                    
                    
                    <div class="imgBackground sneakers" style={{flex: 1, flexDirection: "column", paddingTop: "15%", color: "white"}}>
                        <Link to="/Sign_Up"><h2 style={{fontSize: 30, color: "white"}}>SIGN UP NOW</h2></Link>
                        <h6 style={{fontSize: this.state.mobile? 13: 20}}>
                            STAND A CHANCE TO WIN A R3000 CAR SERVICE VOUCHER<br/> 
                            BY WATCHING <u style={{cursor: "pointer"}} onClick={() => scrollToComponent(this.how_it_works, {offset:-100,align:'top',duration:1500})}>HOW IT WORKS</u>, 
                            <Link to="/Sign_Up" style={{color: "white"}}> <u>SIGNING UP</u></Link> AND <br/>
                            SHARING YOUR PARKING HORROR STORY<br/>                            
                        </h6>                                                              
                    </div>

                    
                    {/* WHY PARKUPP */}
                    <div class="height"  style={{height: "100%", paddingTop: 100, paddingBottom: 50, backgroundColor: "white", paddingLeft: 20, paddingRight: 20}}>
                        <h1 ref={(section) => { this.why_parkupp = section; }} style={{color: "black", fontSize: 30}}><strong>Shared Parking for a Global Community</strong></h1>

                        <div class="row" style={{marginTop: 50, color: "black"}}>
                            <div class="col-lg-4">
                                <div >
                                    <img src={require("../Resources/search.png")} style={{height: 130}} /> 
                                    <h5 style={{marginTop: 50}}><strong>Find Parking</strong></h5>
                                    <p style={{paddingLeft: 80, paddingRight: 80}}>
                                        Stop driving around tirelessly finding parking. Search on the app and book your time
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4 pictures">
                                <div>
                                    <img src={require("../Resources/culture.png")} style={{height: 130}} />
                                    <h5 style={{marginTop: 50}}><strong>Share Culture</strong></h5>
                                    <p style={{paddingLeft: 80, paddingRight: 80}}>
                                        ParkUpp lets you list your
                                        driveway so drivers can
                                        find parking anywhere in
                                        the city
                                    </p>
                                </div>
                            </div>                            
                            <div class="col-lg-4 pictures">
                                
                                <img src={require("../Resources/pay_easy.png")} style={{height: 130}} />
                                <h5 style={{marginTop: 50}}><strong>Pay Easy</strong></h5>
                                <p style={{paddingLeft: 80, paddingRight: 80}}>
                                    Users can find their spo
                                    and pay for it with the
                                    app and cut out any cash
                                    exchange
                                </p>
                                
                            </div>
                        </div>
                        
                        <hr class="margin" style={{borderColor: "#2bbbad", width: 120, marginTop: this.state.mobile?50:100}}/>
                        <div class="height"  style={{height: "100%", paddingTop: this.state.mobile?50:100, paddingBottom: 50, backgroundColor: "white"}}>
                            <h1 style={{color: "black", fontSize: 30, marginBottom: 50}}><strong>ParkUpp Works on Trust and Safety</strong></h1>

                            <div class="row" style={{marginTop: 50, color: "black"}}>
                                <div class="col-lg-4">
                                    <div >
                                        <img src={require("../Resources/star.png")} style={{height: 130}} /> 
                                        <h5 style={{marginTop: 50}}><strong>Vetting</strong></h5>
                                        <p style={{paddingLeft: 80, paddingRight: 80}}>
                                            Owners of driveways and parking lots including drivers are vetted through detailed profiles, 
                                            peer-to-peer rating and confirmed verification
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-4 pictures">
                                    <div>
                                        <img src={require("../Resources/lock.png")} style={{height: 130}} />
                                        <h5 style={{marginTop: 50}}><strong>Sharing with Trust</strong></h5>
                                        <p style={{paddingLeft: 80, paddingRight: 80}}>
                                           ParkUpp verifies each user and owner profile 
                                           while payments are made through a secure payment gateway
                                        </p>
                                    </div>
                                </div>                            
                                <div class="col-lg-4 pictures">
                                    
                                    <img src={require("../Resources/support.png")} style={{height: 130}} />
                                    <h5 style={{marginTop: 50}}><strong>24/7 Support</strong></h5>
                                    <p style={{textAlign: "center", paddingLeft: 80, paddingRight: 80}}>
                                       We have a world class support team and a chat bot ready to help you around the clock.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>        

                        {/*}
                        <div class="row" style={{marginTop: 50, color: "black", paddingLeft: 30, paddingRight: 30,justifyContent: "center" }}>                            
                            <div style={{border: "2px solid #2bbbad", borderRadius: 30, padding: 20}}> 
                                <h4 style={{fontSize: 20, cursor: "pointer"}} onClick={()=>scrollToComponent(this.how_it_works,{offset:-100,align:'top',duration:1500})}>HOW IT WORKS</h4>
                            </div>                                                                                  
                        </div>
                        */}
                        
                        <hr class="margin" style={{borderColor: "#2bbbad", width: 120, marginTop: this.state.mobile?0:50}}/>                        
                    </div>

                    {/* HOW IT WORKS 2 */}
                    
                                                              
                    <h1 ref={(section) => { this.how_it_works = section; }} style={{color: "black", fontSize: 30, marginBottom: 50}}><strong>How it works</strong></h1>                                          
                    <div class="video" style={{margin: "0 auto",  backgroundColor: "white", paddingBottom: 50}}>
                        <YouTubePlayer
                          url='https://youtu.be/35XnLTfKtDQ'
                          className='react-player'                          
                          controls
                          loop
                          width='100%'
                          height='100%'
                        />  
                    </div>                                                
                    
                    <hr style={{borderColor: "#32bca2", width: 120, marginBottom: 50}}/>                                              

                   <div style={{position: "relative"}}>
                        <img src={require("../Resources/car_two.jpg")} style={{height: "auto", width: "100%", background: "#000000" }} />                                      
                    </div>
                    

                    <div ref={(section)=>{this.sign_up=section;}} style={{paddingBottom: 20, backgroundColor: "#32bca2", color: "white"}}>
      
                        <hr style={{borderColor: "white", width: "75%", marginTop: 0}}/>    

                        <div style={{marginTop: 20, padding: 25, marginTop: -20}}>
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
            </div>
        </div>
		)
	}

}

