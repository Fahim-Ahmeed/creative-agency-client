import React from 'react';
import { useForm } from 'react-hook-form';
import SideNav from '../../SharedComponents/SideNav/SideNav';
import Topbar from '../../SharedComponents/TopNav/Topbar';
import './Review.css'

const Review = () => {
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
                <div className='review-container order-container p-4'>
                    <div className="container">
                        <form onSubmit={handleSubmit(onSubmit)} className="order-form form-group pt-1">
                            <input ref={register} placeholder="Your name" className='form-control mb-3' type="text" name="name" id="" required />
                            <input ref={register} placeholder="Company's name, Designation" className='form-control mb-3' type="text" name="designation" id="" required />
                            <textarea ref={register} placeholder='Project Detail' name="detail" id="" cols="30" rows="8" className="form-control mb-3" required />
                            <button className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Review;
