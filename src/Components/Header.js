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
            
                <Navbar transparent fixed="top" color="transparent" dark expand="md" scrolling style={{paddingLeft: 50, fontFamily: "Arial", backgroundColor: "transparent"}}>
                    <NavbarBrand>
                        <Link to="/"><img src={require("../parkupp_logo.png")} height="50"/></Link>                                                 
                    </NavbarBrand>

                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav right>
                            <NavItem>   
                                <Link to="/List" style={{color: "white", marginLeft: 15, marginRight: 5}}>List your parking</Link> 
                                <Link to="/Sign_Up" style={{color: "white", marginLeft: 15, marginRight: 5}}>Sign up</Link>                                                             
                                <Link to="/About_Us" style={{color: "white", marginLeft: 15, marginRight: 5}}>About us</Link>                                
                            </NavItem>  

                            <Dropdown isOpen = { this.state.dropdownOpen } toggle = { this.toggle } size="sm">
                                <DropdownToggle nav caret style={{marginTop: -8, marginLeft: 0, color: "white"}}>More</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem><Link to="/Contact_Us" style={{ color: '#FFF' }}>Contact us </Link></DropdownItem>
                                    <DropdownItem><Link to="/Careers" style={{ color: '#FFF' }}>Careers </Link></DropdownItem>
                                    <DropdownItem><Link to="/Support" style={{ color: '#FFF' }}>Support </Link></DropdownItem>
                                    <DropdownItem><Link to="/Terms_Conditions" style={{ color: '#FFF' }}>Terms & Conditions </Link> </DropdownItem>
                                    <DropdownItem><Link to="/Privacy_Policy" style={{ color: '#FFF' }}>Privacy Policy </Link></DropdownItem>
                                </DropdownMenu>
                            </Dropdown> 

                        </NavbarNav>                                
                    </Collapse>
                </Navbar>
            
        );
    }
}