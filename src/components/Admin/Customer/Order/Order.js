import React from 'react';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from "react-hook-form";
import './Order.css'

const Order = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = data =>{
        console.log(data);
    }
    return (
        <div className='order-container p-4'>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className="order-form form-group pt-3">
                    <input required ref={register} placeholder="Your name / company's name" className='form-control mb-3' type="text" name="name" id="" />
                    <input required ref={register} placeholder='Your email address' className='form-control mb-3' type="email" name="email" id="" />
                    <input required ref={register} placeholder='Graphic Design' className='form-control mb-3' type="text" name="work" id="" />
                    <textarea required ref={register} placeholder='Project Detail' name="detail" id="" cols="30" rows="10" className="form-control mb-3"></textarea>
                    <input required ref={register} placeholder='Price' className='form-control mb-3 d-inline mr-4' type="number" name="price" id="" />
                    <input ref={register} className='upload-file-inp' type="file" name="file" id="uploadImg" />
                    <label htmlFor="uploadImg" id='upload-label' className='upload-file-btn text-center'><FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image</label>
                    <button className="btn btn-brand mb-4">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Order;