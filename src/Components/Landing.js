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
            owner: false
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

    driver() {
        console.log("It's running tho")
        this.setState({driver: true, owner: false})
    }
    owner() {
        this.setState({owner: true, driver: false})
    }


	render() {		
		return(  
			<div style={{overflow: "hidden"}}>				
                <img src={require("../parkupp.gif")} style={{width: "100%"}} /> 
                <div style={{textAlign: "center"}}>

                    {/* PARKUPP */}
                    <div class="parkupp" style={{paddingTop: 100, paddingBottom: 50, backgroundColor: "#2bbbad", height: "100vh", border: "1px solid red"}}>
                        <h1 style={{color: "white", fontSize: 60}}><strong>ParkUpp</strong></h1><br/>
                        <h2 style={{color: "white", fontSize: 25}}><strong>Reimagine. Parking.</strong></h2>

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

                        <hr class="line" style={{borderColor: "white", width: 120, marginTop: 100}}/>
                        <Ionicon onClick={() => scrollToComponent(this.how_it_works, { offset: 0, align: 'top', duration: 1500})} icon="md-arrow-down" fontSize="35px" color="white"/>
                    </div>
                    
                    {/* WHY PARKUPP */}
                    <div ref={(section) => { this.how_it_works = section; }} style={{height: "100vh", paddingTop: 50, paddingBottom: 50, backgroundColor: "#2bbbad"}}>
                        <h1 style={{color: "white", fontSize: 30}}><strong>How it Works</strong></h1>

                        <div class="row" style={{marginTop: 50, color: "white"}}>
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

                        <div class="row" style={{marginTop: 50, color: "white", paddingLeft: 30, paddingRight: 30}}>
                            <div class="col-sm-2 offset-sm-4" >
                                <div style={{border: "2px solid yellow", borderRadius: 30, padding: 10}}> 
                                    <h4 onClick={() => scrollToComponent(this.driver, { offset: -50, align: 'top', duration: 1500})}>DRIVER</h4>
                                </div>                                
                            </div>
                            <div class="col-sm-2 owner">
                                <div style={{border: "2px solid yellow", borderRadius: 30, padding: 10}}> 
                                    <h4 onClick={() => scrollToComponent(this.owner, { offset: -50, align: 'top', duration: 1500})}>OWNER</h4>
                                </div>
                            </div>
                        </div>
                        
                        <hr style={{borderColor: "white", width: 120, marginTop: 100}}/>
                        
                    </div>

                    {/* HOW IT WORKS 2*/}
                    
                    <div style={{height: "100vh", paddingTop: 50, paddingBottom: 50, backgroundColor: "#2bbbad"}}>
                       
                        <h1 className='driver' ref={(section) => { this.driver = section; }} style={{color: "white", fontSize: 30}}><strong>How it Works</strong></h1>                        

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
                        <Ionicon onClick={() => scrollToComponent(this.how_it_works_two, { offset: 0, align: 'top', duration: 1500})} icon="md-arrow-down" fontSize="35px" color="white"/>
                    </div>

                    {/* HOW IT WORKS 2*/} 
                    <div ref={(section) => { this.how_it_works_two = section; }} style={{height: "100vh", paddingTop: 50, paddingBottom: 50, backgroundColor: "#aaa8a5"}}>
                        
                        {/*<Element name="owner" className="element" >*/}
                            <h1 className='owner' ref={(section) => { this.owner = section; }} style={{color: "white", fontSize: 30}}><strong>How it Works</strong></h1>
                        {/*</Element>*/}

                        <div class="row" style={{marginTop: 50, color: "white"}}>
                            
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
                           
                        <hr style={{borderColor: "white", width: 120, marginTop: 150}}/> 
                        <Ionicon onClick={() => scrollToComponent(this.sign_up, { offset: 0, align: 'top', duration: 1500})} icon="md-arrow-down" fontSize="35px" color="white"/>                       
                    </div>

                    

                    <div ref={(section) => { this.sign_up = section; }} style={{paddingTop: 50, paddingBottom: 50, backgroundColor: "#2bbbad", color: "white"}}>
                        <div class="container">
                            <h1 style={{fontSize: 30}}><strong>Sign Up to ParkUpp</strong></h1>
                                                                                
                            <section className="form-dark">
                                <div class="row">
                                    <div class="col-lg-4 offset-lg-4">
                                  
                                        <div className="text-white" style={{padding: 30}}>                                      
                                            <Input label="First Name"  type="text"/>
                                            <Input label="Last Name"  type="text"/>
                                            <Input label="Email Address" group type="email" validate/>
                                            
                                            <div style={{textAlign: "center"}} >                                                
                                                <Button color={this.state.driver? "yellow" : "default"} onClick={this.driver}>DRIVER</Button>                                                                                               
                                                <Button color={this.state.owner? "yellow" : "default"} onClick={this.owner}>OWNER</Button>                                                
                                            </div>
                                            
                                            
                                            <Input label="Tel" type="text"/>
                                            <Input label="Password"  type="text"/>
                                            <Input label="Confirm Password"  type="text"/>

                                   
                                            <Row className="d-flex align-items-center mb-4" style={{marginTop: 30, paddingRight: 50, paddingLeft: 50}}>
                                                <div className="text-center mb-3 col-md-12">
                                                    <Button color="yellow" rounded type="button" className="btn btn-block z-depth-1">Sign Up</Button>
                                                </div>
                                            </Row>                                      
                                        </div>                                      
                                    </div>
                                </div>
                            </section>                              
                                
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

