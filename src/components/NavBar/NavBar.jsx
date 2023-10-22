import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import About from '../pages/About';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">Cosaco PETSHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link style={{textDecoration : "none", marginRight:"10px"}} to="/">Inicio</Link>
              <Link style={{textDecoration : "none", marginRight:"10px"}} to="/Products">Productos</Link>
              <Link style={{textDecoration : "none", marginRight:"10px"}} to="/Contact">Contacto</Link>
              <Link style={{textDecoration : "none", marginRight:"10px"}} to="/About">Sobre Nosotros</Link>
            </Nav>
          </Navbar.Collapse>
          <CartWidget />
        </Container>
      </Navbar>
  );
}

export default NavBar;
