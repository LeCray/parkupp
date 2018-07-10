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

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {   
    return(        
        <div>                    
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>  
        <div style={{backgroundColor: "white", color: "#2bbbad", paddingTop: 100, height: "100vh", fontFamily: "Quicksand"}}>
        
            <div >
                <div class="container" style={{padding: 40}}>                    
                    
                    <section className="form-dark">
                        <div class="row">
                            <div class="col-lg-6 offset-lg-3">
                                <img src={require("../support.png")} style={{height: 100, marginBottom: 10}} /> 
                                <h1 style={{fontSize: 30, marginTop: 20}}>Support</h1>  
                                <p style={{fontSize: 20}}>Send us an mail and we will contact you</p>                  

                                                                                              
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

                </div>                       
            </div>
            <div style={{marginTop: 20, textAlign: "center", backgroundColor: "#2bbbad", padding: 25}}>
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
    </div>
        
    )}
}