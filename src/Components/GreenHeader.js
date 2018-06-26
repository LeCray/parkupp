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
            <div >
                <Navbar transparent fixed="top" color="transparent" light expand="md" scrolling style={{paddingLeft: 50, fontFamily: "Arial", backgroundColor: "transparent"}}>
                    <NavbarBrand>
                        <Link to="/"><img src={require("../parkupp_logo_green.png")} height="50"/></Link>                                                 
                    </NavbarBrand>

                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } color="#2bbbad"/>}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                          <NavItem active>
                              <NavLink to="/List" onClick={this.onClick} style={{color: "#2bbbad"}}>List your parking</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/Sign_Up" onClick={this.onClick} style={{color: "#2bbbad"}}>Sign up</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink to="/About_Us" onClick={this.onClick} style={{color: "#2bbbad"}}>About us</NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                              <DropdownToggle nav caret style={{color: "#2bbbad"}}>Dropdown</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem><Link to="/Contact_Us" onClick={this.onClick} style={{color: "#2bbbad"}}>Contact us</Link></DropdownItem>
                                  <DropdownItem><Link to="/Careers" onClick={this.onClick} style={{color: "#2bbbad"}}>Careers</Link></DropdownItem>
                                  <DropdownItem><Link to="/Support" onClick={this.onClick} style={{color: "#2bbbad"}}>Support</Link></DropdownItem>
                                  <DropdownItem><Link to="/Terms_Conditions" onClick={this.onClick} style={{color: "#2bbbad"}}>Terms and Conditions</Link></DropdownItem>
                                  <DropdownItem><Link to="/Privacy_Policy" onClick={this.onClick} style={{color: "#2bbbad"}}>Privacy Policy</Link></DropdownItem>
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