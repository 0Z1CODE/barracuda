import React from 'react';
import {Navbar, Nav, Link, Container, NavDropdown} from "react-bootstrap"
import logo from './../../../assets/img/logo.svg'
import SubBtn from './../../SubBtn'


const Header = () =>  {
  return(
    <>
      <Container className="Custom__Container"  bg="dark">
      <Navbar  expand="lg" className="Header__Component d-flex justify-content-between align-items-center navbar-light">
        <Navbar.Brand href="#home">
          <img src={logo} alt="site logo" width="205" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto my-md-3">
          </Nav>
          <Nav>
          <SubBtn text='ЗАПИСАТЬСЯ' href="https://n350750.yclients.com/"/>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>


    </>
  )
}
export default Header;