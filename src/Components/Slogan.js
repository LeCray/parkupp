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



export default class Slogan extends Component {

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {   
    return(  
        <div>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
        <div style={{color: "#2bbbad", paddingTop: 100, fontFamily: "Quicksand", textAlign: "center", "overflow-x": "hidden"}}>
        
            <div class="container">
                <div style={{padding: 20, height: 500}}>
                    <h1 style={{fontSize: 30, marginBottom: 100}}><strong>Submit Your Slogan</strong></h1>
                    
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3">
                           <section className="form-dark" >                                                                
                                <div className="text-white">                                      
                                    <Input label="Type your cool slogan here..."  type="text" style={{color: "#2bbbad"}}/>                                                       
                                    <Row className="d-flex align-items-center mb-4" style={{marginTop: 30, paddingRight: 50, paddingLeft: 50}}>
                                        <div className="text-center mb-3 col-md-12">
                                            <Button color="yellow" rounded type="button" className="btn btn-block z-depth-1">Submit</Button>
                                        </div>
                                    </Row>                                      
                                </div>                                                                                             
                            </section> 
                        </div>
                    </div>  
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