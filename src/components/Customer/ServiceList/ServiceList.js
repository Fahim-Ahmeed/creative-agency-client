import React from 'react';
import SideNav from '../../SharedComponents/SideNav/SideNav';
import Topbar from '../../SharedComponents/TopNav/Topbar';
import './ServiceList.css'



const ServiceList = () => {
    return (
        <section className='ClientDashboard'>
        <div className='row'>
            <SideNav></SideNav>
            <div className="col-md-10 p-0">
                <Topbar></Topbar>
                <div className='service-list-container p-5'>
                    <div className="row">
                       {
                    //        <div className="col-md-6">
                    //        <div className="order-card p-4 mb-5">
                    //            <div className="order-top d-flex justify-content-between align-items-start">
                    //                <img width='74' src={img} alt="" />
                    //                <button style={statusBtnStyles} className="btn">Pending</button>
                    //            </div>
                    //            <p className="order-title mt-3">{title}</p>
                    //            <p style={{ color: 'rgba(0, 0, 0, 0.7)' }} className="text-secondary">{description}</p>
                    //        </div>
                    <h2>hlwwww</h2>
                    //    </div>
                       }
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ServiceList;