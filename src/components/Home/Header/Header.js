import React from 'react';
import TopHeader from './TopHeader/TopHeader';
import './Header.css';
import Navigation from './Navigation/Navigation';

const Header = () => {
    return (
        <div className="header-area mb-5">
            <Navigation></Navigation>
            <TopHeader></TopHeader>
        </div>
    );
};

export default Header;