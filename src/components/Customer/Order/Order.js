import React from 'react';
import { useForm } from "react-hook-form";
import './Order.css'
import SideNav from '../../SharedComponents/SideNav/SideNav';
import Topbar from '../../SharedComponents/TopNav/Topbar';

const Order = () => {
    
    const { register, handleSubmit } = useForm()
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <section className='ClientDashboard'>
            <div className='row'>
                <SideNav></SideNav>
                <div className="col-md-10 p-0">
                    <Topbar></Topbar>
                    <div className='order-area p-4'>
                        <div className="container">
                            <form onSubmit={handleSubmit(onSubmit)} className="orderForm-area form-group pt-3">
                                <input required ref={register} placeholder="Your name / company's name" className='form-control mb-3' type="text" name="name" id="" />
                                <input required ref={register} placeholder='Your email address' className='form-control mb-3' type="email" name="email" id="" />
                                <input required ref={register} placeholder='what service do you want?' className='form-control mb-3' type="text" name="work" id="" />
                                <textarea required ref={register} placeholder='Project Detail' name="details" id="" cols="30" rows="10" className="form-control mb-3"></textarea>
                                <input required ref={register} placeholder='Price' className='form-control mb-3 d-inline mr-4' type="number" name="price" id="" />
                                <input ref={register} className='upload-file-inp' type="file" name="file" id="uploadImg" />
                                
                                <button className="btn btn-dark ">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;