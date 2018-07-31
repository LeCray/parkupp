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



export default class Payment extends Component {
    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {   
    return(  
        <div>
                                     
          <div class="borderr container" style={{height: 300, padding: 40}}>                    
              <h2>Payment Details</h2>
              
          </div>   
                                                      
        </div>
        
    )}
}