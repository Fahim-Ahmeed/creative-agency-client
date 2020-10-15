import React from 'react';
import './OrderDetail.css'

const OrderDetail = ({ order }) => {
    const { img, title, description } = order;
    const statusBtnStyles = {
        width: "108px",
        height: "40px",
        borderRadius: "5px",
        background: "#FFE3E3",
        color: "#FF4545"
    }
    return (
        <div className="col-md-6">
            <div className="order-card p-4 mb-5">
                <div className="order-top d-flex justify-content-between align-items-start">
                    <img width='74' src={img} alt="" />
                    <button style={statusBtnStyles} className="btn">Pending</button>
                </div>
                <p className="order-title mt-3">{title}</p>
                <p style={{ color: 'rgba(0, 0, 0, 0.7)' }} className="text-secondary">{description}</p>
            </div>
        </div>
    );
};

export default OrderDetail;