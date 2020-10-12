import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
                <NavLink to="/home">
                    <img className="nav-logo ml-5" src={logo} alt=""/>
                </NavLink>

            <div class="collapse navbar-collapse mr-5" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li>
                        <NavLink to="/home"
                            className="nav-link mr-5"
                            activeStyle={{
                                fontWeight: "bold",
                                paddingBottom: '0px',
                                borderBottom: '3px solid #7AB259',
                                textDecoration: 'none',
                                color:'#111430'
                            }}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio"
                            className="nav-link mr-5"
                            activeStyle={{
                                fontWeight: "bold",
                                paddingBottom: '0px',
                                borderBottom: '3px solid #7AB259',
                                textDecoration: 'none',
                                color:'#111430'
                            }}>
                            Our portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/team"
                            className="nav-link mr-5"
                            activeStyle={{
                                fontWeight: "bold",
                                paddingBottom: '0px',
                                borderBottom: '3px solid #7AB259',
                                textDecoration: 'none',
                                color:'#111430'
                            }}>
                            Our Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"
                            className="nav-link mr-5"
                            activeStyle={{
                                fontWeight: "bold",
                                paddingBottom: '0px',
                                borderBottom: '3px solid #7AB259',
                                textDecoration: 'none',
                                color:'#111430'
                            }}>
                         Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <button className="btn btn-dark " >Login</button>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;