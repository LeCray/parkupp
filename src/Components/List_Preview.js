import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'
import YouTubePlayer from 'react-player/lib/players/YouTube'

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



export default class List_Preview extends Component {
  constructor(props) {
        super(props);
        this.state = {
            howItWorks: false,
        };      
    }

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {   
    return(  
        <div>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
            <div style={{backgroundColor: "#2bbbad", paddingTop: 100, color: "white", height: "100%", fontFamily: "Quicksand", textAlign: "center"}}>
        
           
                <div class="container" style={{padding: 40}}>                    
                    
                    <img src={require("../Resources/welcome.png")} style={{height: 100, marginBottom: 10}} /> 
                    <h1 style={{fontSize: 30, marginTop: 20}}>LIST YOUR PARKING</h1>  
                    <p style={{fontSize: 15}}>COMING SOON</p>

                    <p style={{fontSize: 20, marginTop: 20}}>DON'T FORGET TO <Link to="Sign_Up"><u style={{color: "#fff"}}>SIGN UP</u></Link></p> 
    
                </div>   
                
                <div style={{marginBottom: 50, fontSize: 15}}>
                  STAND A CHANCE TO WIN A R3000 CAR SERVICE VOUCHER<br/>
                  BY WATCHING <u onClick={()=>this.setState({howItWorks: !this.state.howItWorks})} style={{cursor: "pointer"}}>HOW IT WORKS</u>, SIGNING UP<br/>                  
                  AND SHARING YOUR PARKING HORROR STORY
                </div>
                
                {this.state.howItWorks?
                <div>
                  <h3>HOW IT WORKS</h3>
                  <div class="video" style={{margin: "0 auto",  backgroundColor: "white"}}>
                      <YouTubePlayer
                        url='https://youtu.be/35XnLTfKtDQ'
                        className='react-player'                          
                        controls
                        loop
                        width='100%'
                        height='100%'
                      />  
                  </div>
                </div>:null}

                <div style={{height: this.state.howItWorks?0:100}}>
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