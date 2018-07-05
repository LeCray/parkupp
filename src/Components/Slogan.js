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

    render() {   
    return(  
        <div>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
        <div class="container" style={{color: "#2bbbad", paddingTop: 100, height: "100vh", fontFamily: "Quicksand", textAlign: "center"}}>
                 
            <div style={{padding: 20, height: 500}}>
            <h1 style={{fontSize: 30, marginBottom: 100}}><strong>Submit Your Slogan</strong></h1>

               <section className="form-dark" style={{width: 400, margin: "0 auto"}}>                                                                
                    <div className="text-white">                                      
                        <Input label="Slogan"  type="text" style={{color: "#2bbbad"}}/>                                    
               
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
    )}
}