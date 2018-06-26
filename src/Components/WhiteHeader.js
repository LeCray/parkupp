import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import Ionicon from 'react-ionicons'
//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import scrollToComponent from 'react-scroll-to-component';




export default class GreenHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false,
            color: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,            
        });
        this.state.color ? setTimeout(() => {this.setState({color: !this.state.color})}, 500) : this.setState({color: !this.state.color})
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Quicksand:700" rel="stylesheet"/>
                <Navbar transparent fixed="top" color="transparent" dark expand="md" scrolling style={{paddingLeft: 50, fontFamily: "Quicksand", backgroundColor: this.state.color? "#2bbbad": "transparent"}}>
                    <NavbarBrand>
                        <Link to="/"><img src={require("../parkupp_logo.png")} height="50"/></Link>                                                 
                    </NavbarBrand>

                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                          <NavItem>
                              <NavLink to="/List" onClick={this.onClick}>List your parking</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/Sign_Up" onClick={this.onClick} style={{fontStyle:"bold"}}>Sign up</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/About_Us" onClick={this.onClick}>About us</NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Menu</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem><Link to="/Contact_Us" onClick={this.onClick}><b>Contact us</b></Link></DropdownItem>
                                  <DropdownItem><Link to="/Careers" onClick={this.onClick}>Careers</Link></DropdownItem>
                                  <DropdownItem><Link to="/Support" onClick={this.onClick}>Support</Link></DropdownItem>
                                  <DropdownItem><Link to="/Terms_Conditions" onClick={this.onClick}>Terms and Conditions</Link></DropdownItem>
                                  <DropdownItem><Link to="/Privacy_Policy" onClick={this.onClick}>Privacy Policy</Link></DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>                        
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}