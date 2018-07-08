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
  
} from 'react-bootstrap';



export default class Parking extends Component {

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {   
    return(  
        <div style={{height: 1000, "overflow-x": "hidden"}}>
            <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
            <div class="girlBackground sneakers" style={{flex: 1,  paddingTop: 200, paddingLeft: 200, flexDirection: "column", color: "white", fontFamily: "Quicksand"}}>                
                <div>
                    <h4>Get paid with ParkUpp</h4>
                    <p>
                        Whether you have an existing parking facility, 
                        long term parking or an idle driveway.<br/> 
                        ParkUpp helps you find users for your parking.
                    </p>
                </div>                                 
            </div>

            <div class="row" style={{marginTop: 50, color: "black", paddingLeft: 100}}>
                <div class="col-lg-3">
                    <div >                        
                        <h5><strong>Why ParkUpp</strong></h5>
                        <p>
                            No matter what kind of parking you have, ParkUpp is a simple and secure way to 
                            earn money and reach millions of drivers looking for golden parking spots.
                        </p>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1 pictures">
                    <div>                        
                        <h5><strong>You are in charge</strong></h5>
                        <p >
                            With ParkUpp, you have full control of who you let into your parking lot by 
                            accepting and rejecting bookings, prices and availability of your parking. 
                            You handle the entire process.
                        </p>
                    </div>
                </div>                            
                <div class="col-lg-3 offset-lg-1 pictures">                                        
                    <h5><strong>We are secure</strong></h5>
                    <p>
                        ParkUpp vets everyone who parks in your driveway or parking lot. 
                        We have an online community and support 24/7.
                    </p>
                    
                </div>
            </div>
    </div>
    )}
}