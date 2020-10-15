import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import './Order.css'
import SideNav from '../../SharedComponents/SideNav/SideNav';
import Topbar from '../../SharedComponents/TopNav/Topbar';
import { useHistory, useLocation } from 'react-router-dom';
import { ServiceContext, UserContext } from '../../../App';

const Order = () => {
    const[user, setUser]=useContext(UserContext)
    const[selectService,setSelectservice]=useContext(ServiceContext)
    console.log(selectService)
  
    
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
                                <input required ref={register} placeholder="Your name / company's name"  defaultValue={user.name} className='form-control mb-3' type="text" name="name" id="" />
                                <input required ref={register} placeholder='Your email address' defaultValue={user.email} className='form-control mb-3' type="email" name="email" id="" />
                                <input required ref={register} placeholder='what service do you want?' defaultValue={selectService.serviceName} className='form-control mb-3' type="text" name="work" id="" />
                                <textarea required ref={register} placeholder='Project Detail' defaultValue={selectService.serviceDescription} name="details" id="" cols="30" rows="10" className="form-control mb-3"></textarea>
                                <input required ref={register} placeholder='Price' className='form-control mb-3 d-inline mr-4' type="number" name="price" id="" />
                                    <p className='m-0'>Icon</p>
                                    <input className='upload-file-inp' type="file" name="file" id="uploadImg" />
                                    <label htmlFor="uploadImg" className='upload-file-btn text-center'><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload project file</label>
                                
                                <br/>
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