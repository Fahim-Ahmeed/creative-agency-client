import React from 'react';
import SideNav from '../SharedComponents/SideNav/SideNav';
import Topbar from '../SharedComponents/TopNav/Topbar';

// import './Order.css'

const MainDashboard = () => {

    return (
        <section className='ClientDashboard'>
            <div className='row'>
                <SideNav></SideNav>
                <div className="col-md-10 p-0">
                    <Topbar></Topbar>
                    <div className='order-container p-4'>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainDashboard;