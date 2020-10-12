import React from 'react';
import Navbar from './Navbar/Navbar';
import TopHeader from './TopHeader/TopHeader';
import './Header.css';

const Header = () => {
    return (
        <div className="header-area mb-5">
            <Navbar></Navbar>
            <TopHeader></TopHeader>
        </div>
    );
};

export default Header;