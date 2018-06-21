import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Ionicon from 'react-ionicons'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import scrollToComponent from 'react-scroll-to-component';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            
                <Navbar navbar-fixed-top color="default-color" dark expand="md" scrolling style={{paddingLeft: 50}}>
                    <NavbarBrand>
                        <Link to="/"><img src={require("../parkupp_logo.png")} height="50"/></Link>                                                 
                    </NavbarBrand>

                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav left>
                          <NavItem>
                               <Link to="About_Us" style={{color: "white"}}>About Us</Link>
                          </NavItem>                         
                        </NavbarNav>
                        <NavbarNav right>
                            <NavItem>
                                <Ionicon icon="logo-instagram" fontSize="35px" color="white" style={{marginRight: 20}}/>
                                <Ionicon icon="logo-twitter" fontSize="35px" color="white" style={{marginRight: 20}}/>
                                <Ionicon icon="md-mail" fontSize="35px" color="white" style={{marginRight: 50}}/>
                            </NavItem> 
                        </NavbarNav>
                        
                    </Collapse>
                </Navbar>
            
        );
    }
}