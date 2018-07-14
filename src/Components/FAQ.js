import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'
import InstagramEmbed from 'react-instagram-embed'
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



export default class FAQ extends Component {

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

        //this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidMount() {
      window.scrollTo(0, 0)
    }


    render() {   
    return(  
        <div>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
        <div style={{backgroundColor: "#2bbbad", height: "100%", color: "white", paddingTop: 50, fontFamily: "Quicksand"}}>
        
            <div class="container" style={{backgroundColor: "#2bbbad", color: "white", marginTop: 50}}>
                <h1>FAQ</h1>

                <div style={{marginTop: 40}}>
                    <p onClick={() => this.setState({show1: !this.state.show1})}>Listings</p>

                    <p onClick={() => this.setState({show2: !this.state.show2})}>What type of parking is provided for?</p>
                    <p onClick={() => this.setState({show3: !this.state.show3})}>Who users ParkUpp</p>
                
                    <p onClick={() => this.setState({show4: !this.state.show4})}>Earnings</p>
                    <p onClick={() => this.setState({show5: !this.state.show5})}>How do ParkUpp payments work?</p>
                    <p onClick={() => this.setState({show6: !this.state.show6})}>Does ParkUpp have insurance?</p>
                </div>
                
                <Modal isOpen={this.state.show1} toggle={() => this.setState({show1: !this.state.show1})} size="lg">
                    <ModalBody toggle={() => this.setState({show1: !this.state.show1})}>   
                        <div style={{padding: 20}}>
                            <h2>Listings</h2>
                            <h6>Who can share their parking on ParkUpp?</h6>
                            <hr/>
                            <div style={{marginTop: 20}}>                        
                                <p>                                                                        
                                    It’s easy to list your space in most high traffic areas and you list for free. 
                                    If you have a parking facility, idle driveway, privately owned garage, parking space in a building, 
                                    church parking lot you’d like to make extra cash from during the week or any parking based in the CBD or 
                                    high density suburban areas, ParkUpp will find you users.
                                </p>
                            </div>
                        </div>                        
                    </ModalBody>
                    <ModalFooter>
                        <b className="pull-right" onClick={() => this.setState({show1: !this.state.show1})}>Close</b>                    
                    </ModalFooter>
                </Modal>  






            </div>
            <div style={{marginTop: 20, textAlign: "center", padding: 25}}>
                <hr style={{borderColor: "white", width: "75%", marginTop: 150}}/> 
                <p>
                    <Link to="/Support" style={{ color: '#FFF' }}>Support </Link>
                    | <Link to="/Contact_Us" style={{ color: '#FFF' }}>Contact us </Link>  
                    | <Link to="/Terms_Conditions" style={{ color: '#FFF' }}>Terms & Conditions </Link> 
                    | <Link to="/Privacy_Policy" style={{ color: '#FFF' }}>Privacy Policy </Link>
                    | <Link to="/Careers" style={{ color: '#FFF' }}>Careers </Link>
                </p>
                <p>© Copyright 2018 ParkUpp. All rights reserved</p>                                
            </div> 
        </div>
    </div>
    )}
}