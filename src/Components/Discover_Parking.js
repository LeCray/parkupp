import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'

import { Input, Fa, Card, CardBody, ModalFooter,ModalBody, ModalHeader, Modal } from 'mdbreact';

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
  Button
} from 'react-bootstrap';



export default class Discover_Parking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false,
            show6: false

        };
    }
    
    componentDidMount() {
      window.scrollTo(0, 0)
    }

    checkout() {

    }

    render() {   
    return(  
        <div>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
        <div style={{backgroundColor: "#2bbbad", color: "white", paddingTop: 100, height: 2000, fontFamily: "Quicksand", textAlign: "center"}}>
                    
            <div class="container" style={{padding: 40}}>    
                <div class="row" style={{flexDirection: "row", justifyContent: "center"}}>
                    <div class="borderWhite" style={{margin: 30, height: 200, width: 300, textAlign: "right", backgroundColor: "white", borderRadius: 3}}>
                        <p class="button ourBookingButton  pull-right" onClick={() => this.setState({show1: !this.state.show1})}>Book</p>                    
                        <p style={{textAlign: "center", marginTop: 100, color: "black"}}>COMING SOON</p>
                    </div>
                    <div class="borderWhite" style={{margin: 30, height: 200, width: 300, textAlign: "right", backgroundColor: "white", borderRadius: 3}}>
                        <p class="button ourBookingButton  pull-right">Book</p>
                        <p style={{textAlign: "center", marginTop: 100, color: "black"}}>COMING SOON</p>
                    </div>
                    <div class="borderWhite" style={{margin: 30, height: 200, width: 300, textAlign: "right", backgroundColor: "white", borderRadius: 3}}>
                        <p class="button ourBookingButton  pull-right">Book</p>
                        <p style={{textAlign: "center", marginTop: 100, color: "black"}}>COMING SOON</p>
                    </div>
                </div>

                <div class="row" style={{flexDirection: "row", justifyContent: "center"}}>
                    <div class="borderWhite" style={{margin: 30, height: 200, width: 300, textAlign: "right", backgroundColor: "white", borderRadius: 3}}>
                        <p class="button ourBookingButton  pull-right">Book</p>
                        <p style={{textAlign: "center", marginTop: 100, color: "black"}}>COMING SOON</p>
                    </div>
                    <div class="borderWhite" style={{margin: 30, height: 200, width: 300, textAlign: "right", backgroundColor: "white", borderRadius: 3}}>
                        <p class="button ourBookingButton  pull-right">Book</p>
                        <p style={{textAlign: "center", marginTop: 100, color: "black"}}>COMING SOON</p>
                    </div>
                    <div class="borderWhite" style={{margin: 30, height: 200, width: 300, textAlign: "right", backgroundColor: "white", borderRadius: 3}}>
                        <p class="button ourBookingButton  pull-right">Book</p>
                        <p style={{textAlign: "center", marginTop: 100, color: "black"}}>COMING SOON</p>
                    </div>
                </div>

                <div class="row" style={{flexDirection: "row", justifyContent: "center"}}>
                    <div class="borderWhite" style={{margin: 30, height: 200, width: 300, textAlign: "right", backgroundColor: "white", borderRadius: 3}}>
                        <p class="button ourBookingButton  pull-right">Book</p>
                        <p style={{textAlign: "center", marginTop: 100, color: "black"}}>COMING SOON</p>
                    </div>
                    <div class="borderWhite" style={{margin: 30, height: 200, width: 300, textAlign: "right", backgroundColor: "white", borderRadius: 3}}>
                        <p class="button ourBookingButton  pull-right">Book</p>
                        <p style={{textAlign: "center", marginTop: 100, color: "black"}}>COMING SOON</p>
                    </div>
                    <div class="borderWhite" style={{margin: 30, height: 200, width: 300, textAlign: "right", backgroundColor: "white", borderRadius: 3}}>
                        <p class="button ourBookingButton  pull-right">Book</p>
                        <p style={{textAlign: "center", marginTop: 100, color: "black"}}>COMING SOON</p>
                    </div>
                </div>
            </div>   
              
            <Modal isOpen={this.state.show1} toggle={() => this.setState({show1: !this.state.show1})} size="lg">
                <ModalBody toggle={() => this.setState({show2: !this.state.show1})}>   
                    <div style={{padding: 20}}>
                        <h2>Give us the deets</h2>                            
                        <hr/>
                        <div style={{marginTop: 20}}>                        
                            <section className="form-dark">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3" style={{paddingRight: 30, textAlign: "center"}}>
                                        <h1 style={{fontSize: 30}}><strong>Book</strong></h1>
                                        <div>                                      
                                            <Input 
                                                label="Start Date" 
                                                name="startDate" 
                                                type="text" 
                                                style={{color: "black"}}/>                                                
                                            <Input 
                                                label="End Date"  
                                                name="endDate" 
                                                type="text" 
                                                style={{color: "black"}}/>                                                 
                                            <Input 
                                                label="Name"  
                                                name="name" 
                                                type="text" 
                                                style={{color: "black"}}/>                                                
                                            <Input 
                                                label="Vehicle Reg Number"  
                                                name="vehicleRegNumber" 
                                                type="text" 
                                                style={{color: "black"}}/>
                                                                                   
                                            <Row className="d-flex align-items-center mb-4" style={{marginTop: 30, paddingRight: 50, paddingLeft: 50}}>
                                                <div className="text-center mb-3 col-md-12">
                                                    <Button 
                                                        color="yellow" 
                                                        rounded 
                                                        disabled={this.state.disableBtn}
                                                        type="button" 
                                                        className="btn btn-block z-depth-1" 
                                                        onClick={() => {
                                                            this.setState({show1: !this.state.show1})
                                                            this.setState({show11: !this.state.show11})
                                                        }}
                                                        >
                                                        Checkout
                                                    </Button>
                                                </div>
                                            </Row>                                      
                                        </div>

                                    </div>                            
                                </div>
                            </section>
                        </div>
                    </div>                        
                </ModalBody>
                <ModalFooter>
                    <b className="pull-right faq" onClick={() => this.setState({show1: !this.state.show1})}>Close</b>                    
                </ModalFooter>
            </Modal> 

            <Modal isOpen={this.state.show11} toggle={() => this.setState({show1: !this.state.show11})} size="lg">
                <ModalBody toggle={() => this.setState({show2: !this.state.show11})}>   
                    <div style={{padding: 20}}>
                        <h3>Don't worry your payment details are safe with us</h3>  
                        <hr/>
                        <div style={{marginTop: 20}}>                        
                            <section className="form-dark">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3" style={{paddingRight: 30, textAlign: "center"}}>                                        
                                        <div>                                      
                                            <Input 
                                                label="Name on Card" 
                                                name="nameOnCard" 
                                                type="text" 
                                                style={{color: "black"}}/>                                                
                                            <Input 
                                                label="Card Number"  
                                                name="cardNumber" 
                                                type="text" 
                                                style={{color: "black"}}/>                                                 
                                            <Input 
                                                label="Expiry Date"  
                                                name="expiryDate" 
                                                type="text" 
                                                style={{color: "black"}}/>                                                
                                            <Input 
                                                label="CVV"  
                                                name="cvv" 
                                                type="text" 
                                                style={{color: "black"}}/>
                                                                                   
                                            <Row className="d-flex align-items-center mb-4" style={{marginTop: 30, paddingRight: 50, paddingLeft: 50}}>
                                                <div className="text-center mb-3 col-md-12">
                                                    <Button 
                                                        color="yellow" 
                                                        rounded 
                                                        disabled={this.state.disableBtn}
                                                        type="button" 
                                                        className="btn btn-block z-depth-1" 
                                                        onClick={() => {
                                                            this.setState({show11: !this.state.show11})
                                                            this.setState({show111: !this.state.show111})
                                                        }}>
                                                        Process
                                                    </Button>
                                                </div>
                                            </Row>                                      
                                        </div>

                                    </div>                            
                                </div>
                            </section>
                        </div>
                    </div>                        
                </ModalBody>
                <ModalFooter>
                    <b className="pull-right faq" onClick={() => this.setState({show11: !this.state.show11})}>Close</b>                    
                </ModalFooter>
            </Modal> 

            <Modal isOpen={this.state.show111} toggle={() => this.setState({show111: !this.state.show111})} size="lg">
                <ModalBody toggle={() => this.setState({show111: !this.state.show111})}>   
                    <div style={{padding: 20}}>                                                                        
                        <div className="col-lg-12" style={{textAlign: "center"}}>
                            <h4>Thank you for your Benjamins!</h4>
                            <hr/>                                
                            <h5>
                                You now have parking for six months at Green Point.<br/>
                                Please contact 011 213 5671 for access.
                            </h5>   
                            <div style={{marginTop: 20, textAlign: "center"}}>
                                <img src={require("../Resources/book.png")} style={{height: 80, marginBottom: 20}}/>
                            </div>           
                        </div>                            
                                
                            
                    </div>                        
                </ModalBody>
                <ModalFooter>
                    <b className="pull-right faq" onClick={() => this.setState({show111: !this.state.show111})}>Close</b>                    
                </ModalFooter>
            </Modal>   



            <hr style={{borderColor: "white", width: "70%", marginTop: 200}}/> 
            <div style={{marginTop: 20, textAlign: "center", padding: 25, marginTop: -20}}>
                <p>
                    <Link to="/Support" style={{ color: '#FFF' }}>Support </Link>
                    | <Link to="/Contact_Us" style={{ color: '#FFF' }}>Contact us </Link>  
                    | <Link to="/Terms_Conditions" style={{ color: '#FFF' }}>Terms & Conditions </Link> 
                    | <Link to="/Privacy_Policy" style={{ color: '#FFF' }}>Privacy Policy </Link>
                    | <Link to="/Careers" style={{ color: '#FFF' }}>Careers </Link>
                    | <Link to="/FAQ" style={{ color: '#FFF' }}>FAQ </Link>
                </p>
                <p>© Copyright 2018 ParkUpp. All rights reserved</p>                                
            </div> 

        </div>
    </div>
    )}
}