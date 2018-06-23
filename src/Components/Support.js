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



export default class Support extends Component {
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
            <div style={{backgroundColor: "white", color: "#2bbbad", paddingTop: 100, height: "100vh", fontFamily: "Arial"}}>
            
                <div >
                    <div class="container" style={{padding: 20}}>                    
                        
                        <img src={require("../support.png")} style={{height: 100, marginBottom: 10}} /> 
                        <h1 style={{fontSize: 30, marginTop: 20}}>Support</h1>  
                        <p style={{fontSize: 20}}>Send us an mail and we will contact you</p>                  

                        <section className="form-dark">
                            <div class="row">
                                <div class="col-lg-5">
                                                                                                  
                                    <Input label="Name"  type="text" style={{color: "white"}}/>                                    
                                    <Input label="Email Address" group type="email" style={{color: "white"}} validate/>
                                                                                            
                                    <div class="md-form">
                                        <textarea type="text" class="md-form form-dark md-textarea" rows="2" style={{width: "100%", color: "white"}}></textarea>
                                        <label>Message</label>
                                    </div>                                    
                                                                                                   
                                    <Button color="yellow" rounded type="button" className="btn pull-left" style={{marginTop: -20}}>Submit</Button>
                                                                                                                                                     
                                </div>
                            </div>
                        </section> 
                           
                        <hr style={{borderColor: "white", width: "75%", marginTop: 150}}/> 

                        <div style={{marginTop: 20, textAlign: "center"}}>
                            <p>
                                <Link to="/Support" style={{ color: '#2bbbad' }}>Support </Link>
                                | <Link to="/Contact_Us" style={{ color: '#2bbbad' }}>Contact us </Link>  
                                | <Link to="/Terms_Conditions" style={{ color: '#2bbbad' }}>Terms & Conditions </Link> 
                                | <Link to="/Privacy_Policy" style={{ color: '#2bbbad' }}>Privacy Policy </Link>
                                | <Link to="/Careers" style={{ color: '#2bbbad' }}>Careers </Link>
                            </p>
                            <p>© Copyright 2018 ParkUpp. All rights reserved</p>                                
                        </div> 
                    </div>                       
                </div>
            </div>
        </div>
    )}
}