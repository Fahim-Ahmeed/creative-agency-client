import React from 'react';
import { useForm } from 'react-hook-form';
import SideNav from '../../SharedComponents/SideNav/SideNav';
import Topbar from '../../SharedComponents/TopNav/Topbar';
import './MakeAdmin.css'

const MakeAdmin = () => {
    
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        fetch('http://localhost:5000/makeAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result){
                    alert('one admin added successfully')
                }
            })
    }
    return (

        <section className='ClientDashboard'>
            <div className='row'>
                <SideNav></SideNav>
                <div className="col-md-10 p-0">
                    <Topbar></Topbar>
                    <div className='MakeAdmin p-4'>
                        <div className="service-form p-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <p className="m-0">Email</p>
                                <input required ref={register} type="email" placeholder='name@gmail.com' name="email" id="" className="form-control" />
                                <button className="btn btn-success ml-2 px-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>










    );
};

export default MakeAdmin;