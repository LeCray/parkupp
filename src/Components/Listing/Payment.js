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



export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPaymentModal: false,
        };
    }

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    async handleChange (evt) {
        await this.setState({ [evt.target.name]: evt.target.value })
        //this.renderResCom()        
    }

    render() {   
    return(  
        <div>
                                     
          <div class="container" style={{height: 350, padding: 40, textAlign: "left"}}>  

                <h2 style={{display: "inline-block"}}>Payment</h2>
                
                <p class="processButton pull-right" style={{display: "inline-block", marginTop: 0}} 
                    onClick={() => this.setState({showPaymentModal: !this.state.showPaymentModal})}>
                    Process
                </p>
                

                <hr style={{borderColor: "#fff"}}/>

                <div style={{textAlign: "left"}}>
                    <h4 style={{display: "inline-block"}}>Name on card</h4>                                                                            
                    <input 
                        style={{width: 300, display: "inline-block", color: "black"}}
                        className="form-control pull-right"
                        label="Name on Card" 
                        placeholder="Card holder"
                        name="nameOnCard" 
                        type="text" 
                        onChange={this.handleChange}/>  
                </div> 

                <div style={{marginTop: 20, textAlign: "left"}}>
                    <h4 style={{display: "inline-block"}}>Card Number</h4>                                                                            
                    <input 
                        style={{width: 300, display: "inline-block", color: "black"}}
                        className="form-control pull-right"
                        label="Card Number" 
                        placeholder="Card Number"
                        name="cardNumber" 
                        type="text" 
                        onChange={this.handleChange}/>  
                </div>

                <div style={{marginTop: 20, textAlign: "left"}}>
                    <h4 style={{display: "inline-block"}}>Expiry Date</h4>                                                                            
                    <input 
                        style={{width: 300, display: "inline-block", color: "black"}}
                        className="form-control pull-right"
                        label="Expiry Date" 
                        placeholder="Expiry Date"
                        name="expiryDate" 
                        type="text" 
                        onChange={this.handleChange}/>  
                </div>

                <div style={{marginTop: 20, textAlign: "left"}}>
                    <h4 style={{display: "inline-block"}}>CVV</h4>                                                                            
                    <input 
                        style={{width: 300, display: "inline-block", color: "black"}}
                        className="form-control pull-right"
                        label="CVV" 
                        placeholder="CVV"
                        name="cvv" 
                        type="text" 
                        onChange={this.handleChange}/>  
                </div>                                                                                               
            </div>  

            <Modal isOpen={this.state.showPaymentModal} toggle={() => this.setState({showPaymentModal: !this.state.showPaymentModal})} size="lg">
                <ModalBody toggle={() => this.setState({showPaymentModal: !this.state.showPaymentModal})}>   
                    <div style={{padding: 20}}>                                                                        
                        <div className="col-lg-12" style={{textAlign: "center"}}>
                            <h4>Thank you</h4>
                            <hr/>                                                
                            <div style={{marginTop: 20, textAlign: "center"}}>
                                <img src={require("../../Resources/book.png")} style={{height: 80, marginBottom: 20}}/>
                            </div>           
                        </div>                            
                                
                            
                    </div>                        
                </ModalBody>
                <ModalFooter>
                    <b className="pull-right faq" onClick={() => this.setState({showPaymentModal: !this.state.showPaymentModal})}>Close</b>                    
                </ModalFooter>
            </Modal>                                                     
        </div>
        
    )}
}