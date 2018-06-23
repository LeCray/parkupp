import React, { Component } from 'react';
import { Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import Background from '../parkupp_gif.png';
import Ionicon from 'react-ionicons'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import scrollToComponent from 'react-scroll-to-component';

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
  //Button
} from 'react-bootstrap';



export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            driver: false,
            owner: false,
            height: ""
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
      }


	render() {		
		return(  
			<div style={{overflow: "hidden", fontFamily: "Arial"}}>				
                <img src={require("../parkupp.gif")} style={{width: "100%"}} /> 
                <div style={{textAlign: "center"}}>

                    {/* PARKUPP */}
                    <div class="parkupp height" style={{paddingBottom: 50, backgroundColor: "#32bca2", height: "100%"}}>
                        <h1 style={{color: "white", fontSize: 60}}><strong>ParkUpp</strong></h1><br/>
                        <h2 style={{color: "white", fontSize: 25, marginTop: -20, fontStyle: "italic"}}><strong>The Art of Sharing</strong></h2>

                        <div class="row" style={{marginTop: 60}}>
                            <div class="col-sm-6 col-md-4 offset-md-2 col-lg-2 offset-lg-4">
                                <div >
                                    <h2 style={{color: "yellow"}}>1 235 789</h2>
                                    <h4 style={{color: "white"}}>Shared Driveways</h4>   
                                </div>
                            </div>
                            <div class="col-sm-6 col-md-4 col-lg-2 parkers">
                                <div>
                                    <h2 style={{color: "yellow"}}>100 245 365</h2>
                                    <h4 style={{color: "white"}}>Sharing Parkers</h4>   
                                </div>
                            </div>
                        </div>

                        <hr class="line margin" style={{borderColor: "white", width: 120, marginTop: 100}}/>
                        <Ionicon onClick={() => scrollToComponent(this.why_parkupp, { offset: -50, align: 'top', duration: 1500})} icon="md-arrow-down" fontSize="35px" color="white"/>
                    </div>
                    
                    {/* WHY PARKUPP */}
                    <div class="height" ref={(section) => { this.why_parkupp = section; }} style={{height: "100%", paddingTop: 50, paddingBottom: 50, backgroundColor: "white"}}>
                        <h1 style={{color: "black", fontSize: 30}}><strong>Why Parkupp</strong></h1>

                        <div class="row" style={{marginTop: 50, color: "black"}}>
                            <div class="col-lg-4">
                                <div class="text-md-right">
                                    <img src={require("../time.png")} style={{height: 130}} /> 
                                    <h5 style={{marginTop: 50}}><strong>Save Time</strong></h5>
                                    <p>ParkUpp wherever you go</p>
                                </div>
                            </div>
                            <div class="col-lg-4 pictures">
                                
                                <img src={require("../pay_easy.png")} style={{height: 130}} />
                                <h5 style={{marginTop: 50}}><strong>Pay Easy</strong></h5>
                                <p>
                                    Users can find their spot<br/>
                                    and pay for it with the<br/>
                                    app and cut out any cash<br/>
                                    exchange
                                </p>
                                
                            </div>
                            <div class="col-lg-4 pictures">
                                <div class="text-md-left" >
                                    <img src={require("../culture.png")} style={{height: 130}} />
                                    <h5 style={{marginTop: 50}}><strong>Share Culture</strong></h5>
                                    <p>
                                        ParkUpp lets you list your<br/>
                                        driveway so drivers can<br/>
                                        find parking anywhere in<br/>
                                        the city
                                    </p>
                                </div>
                            </div>                            
                        </div>

                        <div class="row" style={{marginTop: 50, color: "black", paddingLeft: 30, paddingRight: 30}}>
                            <div class="col-sm-2 offset-sm-4" >
                                <div style={{border: "2px solid #2bbbad", borderRadius: 30, padding: 10}}> 
                                    <h4 onClick={() => scrollToComponent(this.driver_section, { offset: -100, align: 'top', duration: 1500})}>DRIVER</h4>
                                </div>                                
                            </div>
                            <div class="col-sm-2 owner">
                                <div style={{border: "2px solid #2bbbad", borderRadius: 30, padding: 10}}> 
                                    <h4 onClick={() => scrollToComponent(this.owner_section, { offset: -100, align: 'top', duration: 1500})}>OWNER</h4>
                                </div>
                            </div>
                        </div>
                        
                        <hr class="margin" style={{borderColor: "#2bbbad", width: 120, marginTop: 100}}/>
                        
                    </div>

                    {/* HOW IT WORKS 2*/}
                    
                    <div class="height" style={{height: "100%", paddingTop: 50, paddingBottom: 50, backgroundColor: "#32bca2"}}>
                       
                        <h1 className='driver' ref={(section) => { this.driver_section = section; }} style={{color: "white", fontSize: 30}}><strong>How it Works</strong></h1>                        

                        <div class="row" style={{marginTop: 50, color: "white"}}>

                            <div class="col-lg-4 ">
                                <div class="text-md-right">
                                    <img src={require("../search.png")} style={{height: 120}} /> 
                                    <h5 style={{marginTop: 50}}><strong>Search</strong></h5>                                
                                </div>
                            </div>

                            <div class="col-lg-4 pictures">
                                <img src={require("../parking.png")} style={{height: 120}} />
                                <h5 style={{marginTop: 50}}><strong>Park</strong></h5>                             
                            </div>
                            
                            <div class="col-lg-4 pictures">
                                <div class="text-md-left">
                                    <img src={require("../pay.png")} style={{height: 120}} />
                                    <h5 style={{marginTop: 50}}><strong>Pay</strong></h5>                            
                                </div>
                            </div>
                        </div>  
                           
                        <hr style={{borderColor: "white", width: 120, marginTop: 150}}/>                        
                        <Ionicon onClick={() => scrollToComponent(this.how_it_works_two, { offset: -50, align: 'top', duration: 1500})} icon="md-arrow-down" fontSize="35px" color="white"/>
                    </div>

                    {/* HOW IT WORKS 2*/} 
                    <div class="height" ref={(section) => { this.how_it_works_two = section; }} style={{height: "100%", paddingTop: 50, paddingBottom: 50, backgroundColor: "white"}}>
                        
                        
                        <h1 className='owner' ref={(section) => { this.owner_section = section; }} style={{color: "black", fontSize: 30}}><strong>How it Works</strong></h1>
                        

                        <div class="row" style={{marginTop: 50, color: "black"}}>
                            
                            <div class="col-lg-4">
                                <div class="text-md-right">
                                    <img src={require("../list.png")} style={{height: 120}} /> 
                                    <h5 style={{marginTop: 50}}><strong>List</strong></h5>                                
                                </div>
                            </div>

                            <div class="col-lg-4 pictures">
                                <img src={require("../accept.png")} style={{height: 120}} />
                                <h5 style={{marginTop: 50}}><strong>Accept</strong></h5>                             
                            </div>
                            
                            <div class="col-lg-4 pictures">
                                <div  class="text-md-left">
                                    <img src={require("../get_paid.png")} style={{height: 120}} />
                                    <h5 style={{marginTop: 50}}><strong>Get Paid</strong></h5>                            
                                </div>
                            </div>
                        </div>  
                           
                        <hr style={{borderColor: "#2bbbad", width: 120, marginTop: 150}}/> 
                        <Ionicon onClick={() => scrollToComponent(this.sign_up, { offset: -50, align: 'top', duration: 1500})} icon="md-arrow-down" fontSize="35px" color="#2bbbad"/>                       
                    </div>

                    

                    <div ref={(section) => { this.sign_up = section; }} style={{paddingTop: 50, paddingBottom: 50, backgroundColor: "#32bca2", color: "white"}}>
                        <div class="container">
                            
                                                                                
                                                       
                                
                            <hr style={{borderColor: "white", width: "75%", marginTop: 100}}/>    

                            <div style={{marginTop: 20}}>
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
            </div>
		)
	}

}

