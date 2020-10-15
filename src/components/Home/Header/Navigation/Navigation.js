import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Navigation.css';
import logo from '../../../../images/logos/logo.png';
import { Container, Nav,  Navbar } from 'react-bootstrap';

const Navigation = () => {
  // const history=useHistory()
  // const handleToLogin=()=>{
  //   history.push('/dekha')
  // }
  return (
    <Container>
      <Navbar bg="" expand="lg">
        <NavLink to="/home">
          <img className="nav-logo " src={logo} alt="" />
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

            <NavLink to="/home"
              className="nav-link mr-4"
              activeStyle={{
                fontWeight: "bold",
                paddingBottom: '0px',
                borderBottom: '3px solid #7AB259',
                textDecoration: 'none',
                color: '#111430'
              }}>
              Home
                        </NavLink>
            <NavLink to="/portfolio"
              className="nav-link mr-4"
              activeStyle={{
                fontWeight: "bold",
                paddingBottom: '0px',
                borderBottom: '3px solid #7AB259',
                textDecoration: 'none',
                color: '#111430'
              }}>
              Our portfolio
                        </NavLink>
            <NavLink to="/member"
              className="nav-link mr-4"
              activeStyle={{
                fontWeight: "bold",
                paddingBottom: '0px',
                borderBottom: '3px solid #7AB259',
                textDecoration: 'none',
                color: '#111430'
              }}>
              Our Team
                        </NavLink>
            <NavLink to="/contact"
              className="nav-link mr-4"
              activeStyle={{
                fontWeight: "bold",
                paddingBottom: '0px',
                borderBottom: '3px solid #7AB259',
                textDecoration: 'none',
                color: '#111430'
              }}>
              Contact Us
                        </NavLink>
            <NavLink to="/mainDashboard">
            <button className="btn btn-dark ">Login</button>

            </NavLink>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation;