import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from "../../Assets/Images/logo.png"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navigation() {
    return (
        <Navbar bg="dark">
            <Navbar.Brand as={Link} to="/">
                <img src={logo} className="logo" alt="Logo" />
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navigation;