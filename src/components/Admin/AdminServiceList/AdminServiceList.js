import React, { useEffect } from 'react';
import { useState } from 'react';
import SideNav from '../../SharedComponents/SideNav/SideNav';
import Topbar from '../../SharedComponents/TopNav/Topbar';
import './AdminServiceList.css'
import loading from '../../../images/loading.gif';

const AdminServiceList = () => {
    const[customers,setCustomers]=useState([])
    const allCustomer=()=>{
        fetch('http://localhost:5000/allcustomer')
        .then(response => response.json())
        .then(data =>{
            if(data){
                setCustomers(data)
                console.log(customers)
            }
        })
    }
    useEffect(()=>{
        allCustomer()
    },[])
    return (

<section className='ClientDashboard'>
            <div className='row'>
                <SideNav></SideNav>
                <div className="col-md-10 p-0">
                    <Topbar></Topbar>
                    <div className='service-list p-4'>
            <div className="all-services p-4">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Project Detail</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.length===0?<img src={loading} alt=""/>:customers.map(customer => <tr>
                                <td>{customer.name}</td>
                                <td>{customer.email}</td>
                                <td>{customer.work}</td>
                                <td>{customer.details}</td>
                                <td>pending</td>
                            </tr>)
                        }
                       
                    </tbody>
                </table>
            </div>
        </div>
                </div>
            </div>
        </section>


    );











};

export default AdminServiceList;
