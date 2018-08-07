import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'

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



export default class Contact_Us extends Component {
    constructor(props) {
          super(props);
          this.state = {            
              width: window.innerWidth,
              mobile: false
          }
    };
    
    componentDidMount() {
      window.scrollTo(0, 0)
    }

    componentWillMount() {
      if (this.state.width <= 576) {
          this.setState({mobile: true})
        } 
    }

    render() {   
    return(  
        <div>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
            <div style={{backgroundColor: "#2bbbad", paddingTop: 100, color: "white", height: "100%", fontFamily: "Quicksand", textAlign: "center"}}>
        
           
                <div class="container" style={{padding: 40}}>                    
                    
                    <img src={require("../Resources/contact_us.png")} style={{height: 100, marginBottom: 10}} /> 
                    <h1 style={{fontSize: 30, marginTop: 20}}>Contact Us</h1>  
                                      
                    <div class="row">
                        <div class="col-sm-12">
                            <p style={{marginTop: 50, fontSize: this.state.mobile?15:20}}>
                                Email: hello@parkupp.co.za
                                 
                                <br/>
                                <div style={{marginTop: 35, flexDirection: "row"}}>
                                    <Ionicon icon="logo-facebook" fontSize="35px" color="#fff"/>
                                    <Ionicon icon="logo-instagram" fontSize="35px" color="#fff"/>
                                    <Ionicon icon="md-mail" fontSize="35px" color="#fff"/>
                                </div>
                                <div style={{marginTop: 30}}>
                                    Address:<br/>
                                    9 Portswood Rd, V& A Waterfront <br/>
                                    Cape Town <br/>
                                    Western Cape <br/>
                                    8001 <br/>
                                    South Africa <br/>
                                </div>
                            </p>
                        </div>

                    </div>
                </div>   
                                    
                <hr style={{borderColor: "white", width: "70%", marginTop: 150}}/> 
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