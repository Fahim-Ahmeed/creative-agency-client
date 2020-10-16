import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import SideNav from '../../SharedComponents/SideNav/SideNav';
import Topbar from '../../SharedComponents/TopNav/Topbar';
import loading from '../../../images/loading.gif';
import './ServiceList.css'



const ServiceList = () => {
    const[user, setUser]=useContext(UserContext)
    const [totalItem, setTotalItem] = useState([])
    const yourOrder = () => {
        fetch(`http://localhost:5000/findCustomer?email=${user.email}`, {
            method: 'GET',

        })
            .then(response => response.json())
            .then(data => {
                setTotalItem(data)
            })
    }
    const statusBtnStyles = {
        width: "108px",
        height: "40px",
        borderRadius: "5px",
        background: "#FFE3E3",
        color: "#FF4545"
    }
    useEffect(() => {
        yourOrder();
    }, [])
    console.log(totalItem)
    return (
        <section className='ClientDashboard'>
        <div className='row'>
            <SideNav></SideNav>
            <div className="col-md-10 p-0">
                <Topbar></Topbar>
                <div className='service-list-container p-5'>
                    <div className="row">
                        {
                            totalItem.length===0?<img src={loading}className="img-fluid" alt=""/>:totalItem.map(item=>
                            
                                <div className="col-md-6">
                                <div className="order-card p-4 mb-5">
                                    <div className="order-top d-flex justify-content-between align-items-start">
                                        <img width='74' src={`data:image/png;base64,${item.image.img}`} alt="" />
                                        <button style={statusBtnStyles} className="btn">Pending</button>
                                    </div>
                                    <p className="order-title mt-3">{item.work}</p>
                                    <p style={{ color: 'rgba(0, 0, 0, 0.7)' }} className="text-secondary">{item.details}</p>
                                </div>
                            </div>
                             )
                        }
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ServiceList;