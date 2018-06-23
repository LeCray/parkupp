import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'
import { Input, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

import {
  //Collapse,
  //Navbar,
  //NavbarToggler,
  //NavbarBrand,
  Nav,
  //NavItem,
  //NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  //Button
} from 'react-bootstrap';



export default class Sign_Up extends Component {

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
        <div>
            <Navbar transparent fixed="top" color="transparent" dark expand="md" scrolling style={{paddingLeft: 50, fontFamily: "Arial", backgroundColor: "transparent"}}>
                <NavbarBrand>
                    <Link to="/"><img src={require("../parkupp_logo_green.png")} height="50"/></Link>                                                 
                </NavbarBrand>

                { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav right>
                        <NavItem>   
                            <Link to="/List" style={{color: "#2bbbad", marginLeft: 15, marginRight: 5}}>List your parking</Link> 
                            <Link to="/Sign_Up" style={{color: "#2bbbad", marginLeft: 15, marginRight: 5}}>Sign up</Link>                                                             
                            <Link to="/About_Us" style={{color: "#2bbbad", marginLeft: 15, marginRight: 5}}>About us</Link>                                
                        </NavItem>  

                        <Dropdown isOpen = { this.state.dropdownOpen } toggle = { this.toggle } size="sm">
                            <DropdownToggle nav caret style={{marginTop: -8, marginLeft: 0, color: "#2bbbad"}}>More</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem><Link to="/Contact_Us" style={{ color: '#2bbbad' }}>Contact us </Link></DropdownItem>
                                <DropdownItem><Link to="/Careers" style={{ color: '#2bbbad' }}>Careers </Link></DropdownItem>
                                <DropdownItem><Link to="/Support" style={{ color: '#2bbbad' }}>Support </Link></DropdownItem>
                                <DropdownItem><Link to="/Terms_Conditions" style={{ color: '#2bbbad' }}>Terms & Conditions </Link> </DropdownItem>
                                <DropdownItem><Link to="/Privacy_Policy" style={{ color: '#2bbbad' }}>Privacy Policy </Link></DropdownItem>
                            </DropdownMenu>
                        </Dropdown> 

                    </NavbarNav>                                
                </Collapse>
            </Navbar>

        <div style={{backgroundColor: "white", height: "100%", color: "white", paddingTop: 50, fontFamily: "Arial"}}>
        
            <div style={{color: "white", marginTop: 50}}>
                <div class="container" style={{padding: 20}}>
                <h1 style={{fontSize: 30}}><strong>Sign Up to ParkUpp</strong></h1>
                   <section className="form-dark">
                        <div class="row">
                            <div class="col-lg-6" style={{paddingLeft: 30, paddingRight: 30}}>
                          
                                <div className="text-white" style={{padding: 30}}>                                      
                                    <Input label="First Name"  type="text" style={{color: "white"}}/>
                                    <Input label="Last Name"  type="text" style={{color: "white"}}/>
                                    <Input label="Email Address" group type="email" style={{color: "white"}} validate/>
                                    
                                    <div style={{textAlign: "center"}} >                                                
                                        <Button color={this.state.driver? "yellow" : "default"} onClick={this.driver}>DRIVER</Button>                                                                                               
                                        <Button color={this.state.owner? "yellow" : "default"} onClick={this.owner}>OWNER</Button>                                                
                                    </div>
                                    
                                    
                                    <Input label="Tel" type="number" style={{color: "white"}}/>
                                    <Input label="Password"  type="text" style={{color: "white"}}/>
                                    <Input label="Confirm Password"  type="text" style={{color: "white"}}/>

                           
                                    <Row className="d-flex align-items-center mb-4" style={{marginTop: 30, paddingRight: 50, paddingLeft: 50}}>
                                        <div className="text-center mb-3 col-md-12">
                                            <Button color="yellow" rounded type="button" className="btn btn-block z-depth-1">Sign Up</Button>
                                        </div>
                                    </Row>                                      
                                </div>                                      
                            </div>
                            <div class="col-lg-6" style={{padding: 20, paddingBottom: 100}}>
                                <img src={require("../car_four.jpg")} style={{width: "100%", opacity: 0.8}} /> 
                            </div>
                        </div>
                    </section> 

                    
                
                    
                </div>                       
            </div>
        </div>
        <div style={{marginTop: 20, textAlign: "center", backgroundColor: "#2bbbad", paddingTop: 20, paddingBottom: 30}}>
            <p>
                <Link to="/Support" style={{ color: '#FFF' }}>Support |</Link>
                <Link to="/Contact_Us" style={{ color: '#FFF' }}> Contact us |</Link>  
                <Link to="/Terms_Conditions" style={{ color: '#FFF' }}> Terms & Conditions |</Link> 
                <Link to="/Privacy_Policy" style={{ color: '#FFF' }}> Privacy Policy |</Link>
                <Link to="/Careers" style={{ color: '#FFF' }}> Careers </Link>
            </p>
            <p style={{color: "white"}}>© Copyright 2018 ParkUpp. All rights reserved</p>                                
        </div>  
    </div>
    )}
}