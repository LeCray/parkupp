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
        <div style={{backgroundColor: "#2bbbad", height: "100%", color: "white", paddingTop: 50, fontFamily: "Arial"}}>
        
            <div style={{backgroundColor: "#2bbbad", color: "white", marginTop: 50}}>
                <div class="container" style={{padding: 20, textAlign: "center"}}>
                <h1 style={{fontSize: 30}}><strong>Sign Up to ParkUpp</strong></h1>
                   <section className="form-dark">
                        <div class="row">
                            <div class="col-lg-6 offset-lg-3" style={{paddingLeft: 30, paddingRight: 30}}>
                          
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
                        </div>
                    </section>  
                
                    
                </div>                       
            </div>
        </div>
    )}
}