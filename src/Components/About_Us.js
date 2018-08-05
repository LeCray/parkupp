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
                        We are a family of young, diverse, creative and somewhat quirky individuals who love solving worldly problems. 
                        For us it’s about it’s about serving others and providing value to both the user and the owners.
                        <br/><br/>
                        We believe in simplicity, creativity and having an abundance mentality in all we do. Our business is built under 
                        the core principle that here is enough for all of us and if we all learn to share, people will not be in need of what others already have.
                        <br/><br/>
                        What we do is fairly simple: a marketplace that connects owners with idle driveways, garages, 
                        parking facilities and unused parking spaces to drivers who need parking. 

                        </p>                       
                        <hr style={{width: "70%", borderColor: "white", marginTop: 50}}/>  
                    </div>             
                </div>
                
                <h1 style={{textAlign: "center", fontSize: 30, marginTop: 20}}>Are you on the Gram?</h1>
                <p style={{textAlign: "center", fontSize: 20, paddingLeft: 30, paddingRight: 30}}>Follow us and check out what’s on the haps!</p>

                <div class="row" style={{flexDirection: "row", justifyContent: "center"}}>

                  <InstagramEmbed
                    url='https://www.instagram.com/p/BlHqn_NFg51/?hl=en&taken-by=_parkupp'
                    maxWidth={350}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    style={{margin: 20}}
                  /> 

                  <InstagramEmbed
                    url='https://www.instagram.com/p/BlKOiM3BNYu/?taken-by=_parkupp'
                    maxWidth={350}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    style={{margin: 20}}
                  />
                  <InstagramEmbed
                    url='https://www.instagram.com/p/BkjnrIuDHgt/?hl=en&taken-by=_parkupp'
                    maxWidth={350}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    style={{margin: 20}}
                  />
                </div>

                <div class="row" style={{flexDirection: "row", justifyContent: "center"}}>

                  <InstagramEmbed
                    url='https://www.instagram.com/p/Bl5yOnNHmBR/?taken-by=_parkupp'
                    maxWidth={350}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    style={{margin: 20}}
                  /> 

                  <InstagramEmbed
                    url='https://www.instagram.com/p/Bl2DdColxd3/?taken-by=_parkupp'
                    maxWidth={350}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    style={{margin: 20}}
                  />
                  <InstagramEmbed
                    url='https://www.instagram.com/p/Bl7u5lVljHL/?taken-by=_parkupp'
                    maxWidth={350}
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
                    | <Link to="/FAQ" style={{ color: '#FFF' }}>FAQ </Link>
                </p>
                <p>© Copyright 2018 ParkUpp. All rights reserved</p>                                
            </div> 
        </div>
    </div>
    )}
}