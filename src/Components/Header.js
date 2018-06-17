import React, { Component}  from 'react';
import { Link } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavDropdown,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'react-bootstrap';


const Header = () => (
 <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">React-Bootstrapper</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
  
    </NavDropdown>
  </Nav>
</Navbar>
)

export default Header