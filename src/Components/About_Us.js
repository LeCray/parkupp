import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'
import InstagramEmbed from 'react-instagram-embed'

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



export default class About_Us extends Component {
  componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {   
    return(  
        <div>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
        <div style={{backgroundColor: "#2bbbad", height: "100%", color: "white", paddingTop: 50, fontFamily: "Quicksand"}}>
        
            <div class="container" style={{backgroundColor: "#2bbbad", color: "white", marginTop: 50}}>
                <div class="row" style={{padding: 30}}>
                    <div class="col-lg-8 offset-lg-2" style={{textAlign: "justify"}}>                    
                    
                        <h1 style={{fontSize: 30, marginTop: 20, textAlign: "center"}}>About Us</h1>                    

                        <p style={{marginTop: 50, fontSize: 20}}>
                        At ParkUpp, we are a family of young, diverse, creative and somewhat quirky 
                        individuals who love solving worldly problems. For us it’s about it’s about serving others and providing value to both the user and the owners.
                        <br/><br/>
                        The ParkUpp idea came about when we noticed the amount of idle driveways in areas where demand for parking was high while drivers struggled to find parking.
                        <br/><br/>
                        ParkUpp has created an efficient peer-to-peer marketplace that connects owners with idle driveways, garages and unused parking spaces to drivers who need parking. 

                        We all know that driving a car comes with having to park it somewhere and more often there’s a hassle to find a parking space, especially in high traffic areas. 
                        <br/><br/>
                        But, worry no more! ParkUpp now offers a simple yet ubiquitous service that solves your parking problems.

                        </p>                       
                        <hr style={{width: "70%", borderColor: "white", marginTop: 50}}/>  
                    </div>             
                </div>
                
                <h1 style={{textAlign: "center", fontSize: 30, marginTop: 20}}>Are you on the Gram?</h1>
                <p style={{textAlign: "center", fontSize: 20, paddingLeft: 30, paddingRight: 30}}>Follow us and check out what’s on the haps!</p>

                <div class="row" style={{flexDirection: "row", justifyContent: "center"}}>
                  <InstagramEmbed
                    url='https://www.instagram.com/p/BlHqn_NFg51/?hl=en&taken-by=_parkupp'
                    maxWidth={340}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    style={{margin: 20}}
                  />                
                  <InstagramEmbed
                    url='https://www.instagram.com/p/BlDfnekF7ZM/?hl=en&taken-by=_parkupp'
                    maxWidth={340}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    style={{margin: 20}}
                  />
                  <InstagramEmbed
                    url='https://www.instagram.com/p/BkjnrIuDHgt/?hl=en&taken-by=_parkupp'
                    maxWidth={340}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    style={{margin: 20}}
                  />
                </div>
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