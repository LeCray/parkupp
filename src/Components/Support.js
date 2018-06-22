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



export default class Support extends Component {

    render() {   
    return(  
        <div style={{backgroundColor: "#2bbbad", color: "white", paddingTop: 10, height: "100vh", fontFamily: "Arial"}}>
        
            <div style={{paddingBottom: 50, backgroundColor: "#2bbbad", color: "white"}}>
                <div class="container" style={{padding: 20}}>
                    <Link to="/" style={{ color: '#FFF' }}><Ionicon icon="md-arrow-back" fontSize="35px" color="white" style={{marginRight: 20}}/></Link>
                
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
                       
                    <hr style={{borderColor: "white", width: 120, marginTop: 100}}/> 
                </div>                       
            </div>
        </div>
    )}
}