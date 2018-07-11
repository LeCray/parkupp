import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
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
} from 'react-bootstrap';



export default class Sign_Up extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            driver: false,
            owner: false,
            height: "",
            width: window.innerWidth,
            mobile: false,
            first_name: "", 
            last_name: "",
            email: "",
            user_type: "",
            tel: "",
            password: "",
            confirm_password: "",
            showModal: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.driver = this.driver.bind(this);
        this.owner = this.owner.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    componentWillMount(){
        this.setState({height: window.innerHeight + 'px'});
        if (this.state.width < 576) {
            this.setState({mobile: true});
        }
      }

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    handleInputChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    driver() {this.setState({driver: !this.state.driver})}       
    owner() {this.setState({owner: !this.state.owner})}

    handleShow() {
        this.setState({ show: true });
      }

    async handleSubmit() {   

        if (this.state.driver && this.state.owner) {
            await this.setState({user_type: "both"})                
        } else if (this.state.driver) {
            await this.setState({user_type: "driver"})                
        } else {
            await this.setState({user_type: "owner"})                
        }
        
        if (this.state.password !== this.state.confirm_password) {
            console.log("Passwords do not match")
            this.toggleModal()
        } else {

            await console.log(
                "first_name:", this.state.first_name,
                "last_name:", this.state.last_name,
                "email:", this.state.email,
                "user_type:", this.state.user_type,    
                "tel:", this.state.tel,                
                "password:", this.state.password,
                "slogan:", this.state.slogan
            )
                    
            fetch("http://preproduction.an22aevtww.eu-west-1.elasticbeanstalk.com/api/users/new", {
                method: "POST", 
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                body: JSON.stringify({
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    user_type: this.state.user_type,    
                    tel: this.state.tel,                    
                    password: this.state.password,  
                    slogan: this.state.slogan                  
                }), 

            })
            .then(response => response.json())
            .then((responseData) => {
                console.log(responseData);               
            })
            .catch((error) => {
              console.error(error);
            })
            
        }                     
    }

    toggleModal() {   
        this.setState({showModal: !this.state.showModal})     
        setTimeout(() => {this.setState({showModal: !this.state.showModal})}, 2000)
    }

    render() {   
    return(  
        <div>                    
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
        <div style={{backgroundColor: "white", height: "100%", paddingTop: 50, fontFamily: "Quicksand"}}>
                    
            <div className="container" style={{padding: 40, color: "#2bbbad", marginTop: 50}}>
               <section className="form-dark">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3" style={{paddingRight: 30, textAlign: "center"}}>
                            <h1 style={{fontSize: 30}}><strong>Sign Up to ParkUpp</strong></h1>

                            <div>                                      
                                <Input 
                                    label="First Name" 
                                    name="first_name" 
                                    type="text" 
                                    style={{color: "black"}} 
                                    onChange={this.handleInputChange}/>
                                <Input 
                                    label="Last Name"  
                                    name="last_name" 
                                    type="text" 
                                    style={{color: "black"}} 
                                    onChange={this.handleInputChange}/>
                                <Input 
                                    label="Email Address" 
                                    name="email" 
                                    type="email" 
                                    style={{color: "black"}} 
                                    onChange={this.handleInputChange}/>
                                
                                <div style={{textAlign: "center"}} >                                                
                                    <Button color={this.state.driver? "yellow" : "default"} onClick={this.driver}>DRIVER</Button>                                                                                               
                                    <Button color={this.state.owner? "yellow" : "default"} onClick={this.owner}>OWNER</Button>                                                
                                </div>
                                                                
                                <Input 
                                    label="Tel" 
                                    name="tel" 
                                    type="number" 
                                    style={{color: "black"}} 
                                    onChange={this.handleInputChange}/>
                                <Input 
                                    label="Password" 
                                    name="password" 
                                    type="text" 
                                    style={{color: "black"}} 
                                    onChange={this.handleInputChange}/>
                                <Input 
                                    label="Confirm Password" 
                                    name="confirm_password" 
                                    type="text" 
                                    style={{color: "black"}} 
                                    onChange={this.handleInputChange}/>
                                <Input 
                                    label="Type your cool slogan here..."  
                                    name="slogan" 
                                    type="text" 
                                    style={{color: "black"}} 
                                    onChange={this.handleInputChange}/>

                                <h6 style={{color: "#2bbbad", fontSize: 12}}> *Increase your chance of winning by following our social media accounts</h6>
                                <div style={{flexDirection: "row"}}>                                        
                                    <a href="https://twitter.com/_parkupp?lang=en" target="_blank" style={{marginRight: 5}}><Ionicon icon="logo-twitter" fontSize="20px" color="#2bbbad"/></a>
                                    <a href="https://www.instagram.com/_parkupp/?hl=en" target="_blank"><Ionicon icon="logo-instagram" fontSize="20px" color="#2bbbad"/></a>                                        
                                </div>

                       
                                <Row className="d-flex align-items-center mb-4" style={{marginTop: 30, paddingRight: 50, paddingLeft: 50}}>
                                    <div className="text-center mb-3 col-md-12">
                                        <Button color="yellow" rounded type="button" className="btn btn-block z-depth-1" onClick={this.handleSubmit}>Sign Up</Button>
                                    </div>
                                </Row>                                      
                            </div>                                      
                        </div>                            
                    </div>
                </section>
                

                <Modal isOpen={this.state.showModal} toggle={this.toggleModal} side position="bottom-right">
                    <ModalBody style={{fontSize: 18, textAlign: "center"}} toggle={this.toggleModal}>PASSWORDS DON'T MATCH!</ModalBody>                            
                </Modal>       

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