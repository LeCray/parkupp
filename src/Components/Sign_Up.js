import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'
import { Input, Button, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { createMuiTheme } from 'material-ui/styles';
import {withStyles, MuiThemeProvider} from 'material-ui/styles';
import green from '@material-ui/core/colors/green';

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
            showModal: false,
            showValidationModal: false,
            passwordError: "",
            phoneNumberError: "",
            emailError: "",
            disableBtn: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleValidationModal = this.toggleValidationModal.bind(this);
        this.driver = this.driver.bind(this);
        this.owner = this.owner.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.disableBtn = this.disableBtn.bind(this);
        this.passwordError = this.passwordError.bind(this);
        this.phoneNumberError = this.phoneNumberError.bind(this);
        this.emailError = this.emailError.bind(this);
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

        this.setState({passwordError: ""})
        this.setState({phoneNumberError: ""})
        this.setState({emailError: ""})
                
        this.disableBtn()

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
            this.disableBtn()

        } else {
                 
            fetch("http://preproduction.an22aevtww.eu-west-1.elasticbeanstalk.com/api/users/new", {
                method: "POST", 
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
                body: JSON.stringify({
                    firstName: this.state.first_name,
                    lastName: this.state.last_name,
                    email: this.state.email,
                    userType: this.state.user_type,    
                    phoneNumber: this.state.tel,                    
                    password: this.state.password,                      
                }), 

            })
            .then(response => response.json())                                              
            .then((responseData) => {
                
                this.toggleValidationModal() 

                const data = responseData.error.slice(17).split(":")
                console.log(data)
                
                var err;

                for (err of data) {                                        
                    if (String(err.slice(1, 14)) === "Password must") {                        
                        this.setState({passwordError: "Password must contain at least 6 characters, and include at least one number"})
                        console.log(this.state.passwordError)
                    }
                }

                for (err of data) {
                    if (String(err.slice(1, 13)) === "Phone number") {
                        this.setState({phoneNumberError: "Phone number must be 10 digits long"})
                        console.log(this.state.phoneNumberError)
                    }
                }

                for (err of data) {
                    if (String(err[err.length-1]) === "!") {
                        this.setState({emailError: "f is not a valid email!"})
                        console.log(this.state.emailError)
                    }
                }
           
                
                

                this.disableBtn()
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

    toggleValidationModal() {   
        this.setState({showValidationModal: !this.state.showValidationModal})             
    }

    disableBtn() {
        this.setState({disableBtn: !this.state.disableBtn})
    }

    passwordError() {
        if (this.state.passwordError) {
            return (
                <hr/>
            )
        } else {
            return null
        }
    }
    phoneNumberError() {
        if (this.state.phoneNumberError) {
            return (
                <hr/>
            )
        } else {
            return null
        }
    }
    emailError() {
        if (this.state.emailError) {
            return (
                <hr/>
            )
        } else {
            return null
        }
    }

    render() {   
    const { email } = this.state;
   

    
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
                                    validators={['required', 'isEmail']}    
                                    errorMessages={['this field is required', 'email is not valid']}                               
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
                                        <Button 
                                            color="yellow" 
                                            rounded 
                                            disabled={this.state.disableBtn}
                                            type="button" 
                                            className="btn btn-block z-depth-1" 
                                            onClick={this.handleSubmit}>
                                            Sign Up
                                        </Button>
                                    </div>
                                </Row>                                      
                            </div>                                      
                        </div>                            
                    </div>
                </section>
                

                <Modal isOpen={this.state.showModal} toggle={this.toggleModal} side position="bottom-right">
                    <ModalBody style={{fontSize: 18, textAlign: "center"}} toggle={this.toggleModal}>PASSWORDS DON'T MATCH!</ModalBody>                            
                </Modal>   

                <Modal isOpen={this.state.showValidationModal} toggle={this.toggleValidationModal} side position="bottom-right">
                    <ModalBody style={{fontSize: 18}} toggle={this.toggleValidationModal}>
                        {this.state.passwordError}<br/>
                        {this.passwordError()}

                        {this.state.phoneNumberError}<br/>
                        {this.phoneNumberError()}

                        {this.state.emailError}
                        {this.emailError()}
                        <b className="pull-right" style={{fontSize: 15}} onClick={this.toggleValidationModal}>CLOSE</b>
                    </ModalBody>                            
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

const styles = theme => ({
    cssLabel: {
    '&$cssFocused': {
      color: "#2bbbad",
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: "#2bbbad",
    },
  }
})