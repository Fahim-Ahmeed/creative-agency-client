import React from 'react';
import service1 from '../../../../images/icons/service1.png'
import service2 from '../../../../images/icons/service2.png'
import service3 from '../../../../images/icons/service3.png'
import OrderDetail from '../OrderDetail/OrderDetail';
import './ServiceList.css'

const orders = [
    {
        title: 'Web & Mobile design',
        img: service1,
        description: 'We craft stunning and amazing web UI, using a well drafted UX to fit your product.'
    },
    {
        title: 'Graphic design',
        img: service2,
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        title: 'Web development',
        img: service3,
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
]

const ServiceList = () => {
    return (
        <div className='service-list-container p-5'>
            <div className="row">
                {
                    orders.map(order => <OrderDetail order={order} key={order.title} />)
                }
            </div>
        </div>
    );
};

export default ServiceList;