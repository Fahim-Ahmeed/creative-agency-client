import React, { useEffect } from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import SideNav from '../../SharedComponents/SideNav/SideNav';
import Topbar from '../../SharedComponents/TopNav/Topbar';
import './AdminServiceList.css'
import loading from '../../../images/loading.gif';

const AdminServiceList = () => {
    const [customers, setCustomers] = useState([])
    // let [status, setStatus] = useState('')
    const allCustomer = () => {
        fetch('http://localhost:5000/allcustomer')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setCustomers(data)
                    console.log(customers)
                }
            })
    }
    useEffect(() => {
        allCustomer()
    }, [])


    const handleChange = (e, id) => {
       let updateStatus=e.target.value
        console.log('handleChange',updateStatus)
        fetch(`http://localhost:5000/updateStatus/${id}`,{
            method: 'PATCH',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify({updateStatus})
        })
        .then(result=>{
            if(result){
                
            }
        } )
    
    }
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
                                        customers.length === 0 ? <img src={loading} alt="" /> : customers.map(customer => <tr>
                                            <td>{customer.name}</td>
                                            <td>{customer.email}</td>
                                            <td>{customer.work}</td>
                                            <td>{customer.details}</td>
                                            <td>{
                                                <select onChange={(e) => handleChange(e, customer._id)}>
                                                    <option value="pending" className="text-danger">pending</option>
                                                    <option value="on going" className="text-warning">on going</option>
                                                    <option value="done" className="text-success">done</option>
                                                </select>
                                            }</td>
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
